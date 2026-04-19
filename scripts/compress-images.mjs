// Batch-compress every .png / .jpg / .jpeg inside src/assets/ and public/
// into a sibling .webp file. Originals are kept (git tracks them, delete later).
//
// Usage: node scripts/compress-images.mjs
//
// Logos (mntlogo*, favicon) stay near-lossless; everything else gets WebP @ 80.

import { readdirSync, statSync, existsSync } from "node:fs";
import { join, extname, basename } from "node:path";
import sharp from "sharp";

const ROOT = new URL("..", import.meta.url).pathname.replace(/^\/([A-Za-z]):/, "$1:"); // windows fix
const DIRS = ["src/assets", "public"];
const EXT_OK = new Set([".png", ".jpg", ".jpeg"]);

// Files to skip entirely (animated gifs, icons we don't want to convert)
const SKIP = new Set([
    "favicon.ico",
    "robots.txt",
    "placeholder.svg",
]);

// Files that should stay near-lossless (logos, icons)
const HIGH_QUALITY = new Set([
    "mntlogo.png",
    "mntlogo-white.png",
]);

function* walk(dir) {
    for (const entry of readdirSync(dir)) {
        const full = join(dir, entry);
        const s = statSync(full);
        if (s.isDirectory()) {
            // don't recurse - keep it flat
            continue;
        }
        yield full;
    }
}

async function convertOne(file) {
    const ext = extname(file).toLowerCase();
    if (!EXT_OK.has(ext)) return null;
    const name = basename(file);
    if (SKIP.has(name)) return null;

    const outFile = file.slice(0, -ext.length) + ".webp";
    if (existsSync(outFile)) {
        const origSize = statSync(file).size;
        const outSize = statSync(outFile).size;
        return { file, outFile, origSize, outSize, skipped: true };
    }

    const quality = HIGH_QUALITY.has(name) ? 95 : 80;

    const origSize = statSync(file).size;
    await sharp(file)
        .webp({ quality, effort: 5 })
        .toFile(outFile);
    const outSize = statSync(outFile).size;

    return { file, outFile, origSize, outSize, skipped: false };
}

function fmtKB(bytes) {
    return (bytes / 1024).toFixed(1).padStart(8) + " KB";
}

async function main() {
    console.log("Compressing images → WebP...\n");
    let totalOrig = 0;
    let totalOut = 0;
    const results = [];

    for (const dir of DIRS) {
        const full = join(ROOT, dir);
        if (!existsSync(full)) continue;
        for (const file of walk(full)) {
            try {
                const r = await convertOne(file);
                if (!r) continue;
                results.push(r);
                totalOrig += r.origSize;
                totalOut += r.outSize;
                const pct = ((1 - r.outSize / r.origSize) * 100).toFixed(1);
                const tag = r.skipped ? "[skip]" : "[ ok ]";
                console.log(
                    `${tag} ${basename(r.file).padEnd(30)} ${fmtKB(r.origSize)} → ${fmtKB(r.outSize)}  (-${pct}%)`
                );
            } catch (e) {
                console.error(`[fail] ${file}:`, e.message);
            }
        }
    }

    console.log("\n──────────────────────────────────────────────");
    console.log(`Total original : ${fmtKB(totalOrig)}`);
    console.log(`Total WebP     : ${fmtKB(totalOut)}`);
    if (totalOrig > 0) {
        console.log(`Saved          : ${fmtKB(totalOrig - totalOut)} (${((1 - totalOut / totalOrig) * 100).toFixed(1)}%)`);
    }
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
});
