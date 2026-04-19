import { useEffect, useRef, useState, type ReactNode } from "react";

interface LazyMountProps {
  children: ReactNode;
  /** Root margin for the IntersectionObserver — how early to mount before the slot enters view. */
  rootMargin?: string;
  /** Reserved space so layout doesn't jump before the child mounts. */
  minHeight?: number | string;
  className?: string;
}

/**
 * Renders its children only when the placeholder is near the viewport.
 * Used on the home page to defer heavy below-the-fold sections so they
 * don't spawn their animations (and parse their JS chunks) on first paint.
 */
const LazyMount = ({ children, rootMargin = "300px 0px", minHeight, className }: LazyMountProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (shown) return;
    const node = ref.current;
    if (!node) return;

    // Fallback for older browsers — just mount immediately.
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [rootMargin, shown]);

  return (
    <div
      ref={ref}
      className={className}
      style={!shown && minHeight ? { minHeight } : undefined}
    >
      {shown ? children : null}
    </div>
  );
};

export default LazyMount;
