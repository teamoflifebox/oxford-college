import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // smooth keeps the user oriented, but uses 'auto' if prefers‑reduced‑motion
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 'auto'
      : 'smooth';
    window.scrollTo({ top: 0, left: 0, behavior });
  }, [pathname]);

  return null; // renders nothing
};

export default ScrollToTop;
