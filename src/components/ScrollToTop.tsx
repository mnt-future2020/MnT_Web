import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Resets scroll to top on every route change.
 * For hash links (anchor links), scrolls smoothly to the target
 * element with an offset for the fixed header.
 */
const HEADER_OFFSET = 80; // px – matches fixed navbar height

const ScrollToTop: React.FC = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            // Anchor link – scroll to target element with header offset
            const id = hash.replace('#', '');
            // Small delay to ensure the DOM has rendered
            const timer = setTimeout(() => {
                const el = document.getElementById(id);
                if (el) {
                    const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            }, 100);
            return () => clearTimeout(timer);
        } else {
            // Page navigation – instant scroll to top
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
        }
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;
