'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import styles from './HotelMwebNavBar.module.scss';

const NAV_TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'rooms', label: 'Rooms' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'policies', label: 'Policies' },
  { id: 'about', label: 'About' },
];

const BackIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M16 10H4M4 10L10 16M4 10L10 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ShareIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M7 9.5L13 5M13 5L10 3M13 5L11 8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 10.5L13 15M13 15L11 12M13 15L10 17" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="5.5" cy="10" r="1.75" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="14.5" cy="5" r="1.75" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="14.5" cy="15" r="1.75" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const HotelMwebNavBar = ({ tabs = NAV_TABS, onBack }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef(null);
  const sentinelRef = useRef(null);
  const isScrollingRef = useRef(false);
  const scrollTimerRef = useRef(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsSticky(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return;
      const navHeight = navRef.current?.offsetHeight ?? 88;
      const scrollTop = window.scrollY + navHeight + 16;
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
  }, [tabs]);

  const handleTabClick = useCallback((tabId) => {
    setActiveTab(tabId);
    isScrollingRef.current = true;
    clearTimeout(scrollTimerRef.current);
    const el = document.getElementById(tabId);
    if (el) {
      const navHeight = navRef.current?.offsetHeight ?? 88;
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight - 8;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    scrollTimerRef.current = setTimeout(() => {
      isScrollingRef.current = false;
    }, 800);
  }, []);

  return (
    <>
      <div ref={sentinelRef} aria-hidden="true" />
      <div
        ref={navRef}
        className={`${styles.mwebNav} ${isSticky ? styles.sticky : ''}`}
      >
        <div className={styles.actionBar}>
          <button
            type="button"
            className={styles.iconBtn}
            aria-label="Go back"
            onClick={onBack}
          >
            <BackIcon />
          </button>
          <button
            type="button"
            className={styles.iconBtn}
            aria-label="Share"
          >
            <ShareIcon />
          </button>
        </div>
        <div className={styles.divider} />
        <nav className={styles.tabBar} aria-label="Hotel details navigation">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
              onClick={() => handleTabClick(tab.id)}
              aria-current={activeTab === tab.id ? 'true' : undefined}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};

export default HotelMwebNavBar;
