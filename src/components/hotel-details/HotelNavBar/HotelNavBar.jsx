'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import styles from './HotelNavBar.module.scss';

const NAV_TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'rooms', label: 'Rooms' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'policies', label: 'Policies' },
  { id: 'about', label: 'About' },
];

const HotelNavBar = ({ tabs = NAV_TABS, offset = 0 }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef(null);
  const sentinelRef = useRef(null);
  const isScrollingRef = useRef(false);
  const scrollTimerRef = useRef(null);

  // Stick nav to top when user scrolls past it
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsSticky(!entry.isIntersecting),
      { rootMargin: `${-offset}px 0px 0px 0px`, threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [offset]);

  // Update active tab based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return;

      const navHeight = navRef.current?.offsetHeight ?? 60;
      const scrollTop = window.scrollY + navHeight + offset + 16;

      for (let i = tabs.length - 1; i >= 0; i--) {
        const el = document.getElementById(tabs[i].id);
        if (el && el.offsetTop <= scrollTop) {
          setActiveTab(tabs[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tabs, offset]);

  const handleTabClick = useCallback((tabId) => {
    setActiveTab(tabId);
    isScrollingRef.current = true;
    clearTimeout(scrollTimerRef.current);

    const el = document.getElementById(tabId);
    if (el) {
      const navHeight = navRef.current?.offsetHeight ?? 60;
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight - offset - 8;
      window.scrollTo({ top, behavior: 'smooth' });
    }

    scrollTimerRef.current = setTimeout(() => {
      isScrollingRef.current = false;
    }, 800);
  }, [offset]);

  return (
    <>
      <div ref={sentinelRef} aria-hidden="true" />
      <nav
        ref={navRef}
        className={`${styles.navBar} ${isSticky ? styles.sticky : ''}`}
        aria-label="Hotel details navigation"
        style={isSticky && offset ? { top: `${offset}px` } : undefined}
      >
        <div className={styles.inner}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
              type="button"
              onClick={() => handleTabClick(tab.id)}
              aria-current={activeTab === tab.id ? 'true' : undefined}
            >
              {tab.label}
              {activeTab === tab.id && <span className={styles.indicator} aria-hidden="true" />}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
};

export default HotelNavBar;
