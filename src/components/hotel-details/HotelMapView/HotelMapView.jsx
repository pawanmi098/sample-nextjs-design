'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './HotelMapView.module.scss';

// ─── Icons ────────────────────────────────────────────────────────────────────

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const RouteIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M5 7.5a3 3 0 1 1 6 0c0 2.25-3 5.5-3 5.5S5 9.75 5 7.5z" stroke="currentColor" strokeWidth="1.3" fill="none"/>
    <circle cx="8" cy="7.5" r="1" fill="currentColor"/>
    <path d="M10 15a3 3 0 0 1 6 0 3 3 0 0 1-6 0z" stroke="currentColor" strokeWidth="1.3" fill="none"/>
    <circle cx="13" cy="15" r="1" fill="currentColor"/>
  </svg>
);

const PlusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const MinusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M4 10h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const MaximizeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M3 7V3h4M13 3h4v4M17 13v4h-4M7 17H3v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BuildingIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M3 17V5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    <path d="M9 17V9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    <path d="M1 17h18" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    <path d="M5 7h2M5 10h2M5 13h2M12 11h2M12 14h2" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
  </svg>
);

const DoubleBedIcon = () => (
  <svg width="16" height="14" viewBox="0 0 16 14" fill="none" aria-hidden="true">
    <path d="M1 9V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    <rect x="2" y="5" width="4" height="3" rx="0.5" stroke="currentColor" strokeWidth="1.1"/>
    <rect x="10" y="5" width="4" height="3" rx="0.5" stroke="currentColor" strokeWidth="1.1"/>
    <path d="M1 9h14v3H1z" fill="currentColor" opacity="0.15"/>
    <path d="M1 9h14M3 12v1M13 12v1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="8.5" cy="8.5" r="5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M17 17l-3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const LandscapeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M1 16l5-7 3 4 3-5 7 8H1z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="14.5" cy="5.5" r="2" stroke="currentColor" strokeWidth="1.3"/>
  </svg>
);

const MapPinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M2 5l5-2 6 3 5-3v13l-5 3-6-3-5 2V5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
    <path d="M7 3v13M13 6v13" stroke="currentColor" strokeWidth="1.3"/>
  </svg>
);

const AirplaneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M17 9l-6 3-1.5 5.5L7 14l-4.5-2.5L8 9.5 10 3l2 3.5L17 9z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChevronUpIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M5 13l5-5 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M5 7l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TickIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8l3.5 3.5 6.5-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ─── Data ────────────────────────────────────────────────────────────────────

const ATTRACTIONS = [
  { id: 1, name: 'Candolim Beach', type: 'Tourist attraction', distance: '1.2 Km' },
  { id: 2, name: 'Baga Beach', type: 'Tourist attraction', distance: '1.2 Km' },
  { id: 3, name: 'Canlangute Beach', type: 'Tourist attraction', distance: '1.2 Km' },
];

const COLLAPSED_CATEGORIES = [
  { id: 'landmarks', label: 'Landmarks', Icon: MapPinIcon },
  { id: 'transport', label: 'Transport', Icon: AirplaneIcon },
  { id: 'restaurants', label: 'Restaurants', Icon: LandscapeIcon },
  { id: 'other', label: 'Other Landmarks', Icon: LandscapeIcon },
];

const MAP_CONTROLS = [
  { id: 'route', label: 'Route', Icon: RouteIcon },
  { id: 'plus', label: 'Zoom in', Icon: PlusIcon },
  { id: 'minus', label: 'Zoom out', Icon: MinusIcon },
  { id: 'maximize', label: 'Fullscreen', Icon: MaximizeIcon },
  { id: 'building', label: 'Building view', Icon: BuildingIcon },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function HotelMapView() {
  const [showSimilar, setShowSimilar] = useState(false);
  const [checked, setChecked] = useState({ 1: true, 2: true, 3: false });

  const toggle = (id) => setChecked((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className={styles.root}>
      <div className={styles.inner}>
        {/* ── Map background ── */}
        <div className={styles.mapArea}>
          <Image
            src="/assets/hotel-details/hotel-map-bg.png"
            fill
            alt="Hotel location on map"
            className={styles.mapBg}
            sizes="1152px"
            priority
          />

          {/* Close */}
          <button className={styles.closeBtn} aria-label="Close map view">
            <CloseIcon />
          </button>

          {/* Map controls — left stack */}
          <div className={styles.mapControls} role="group" aria-label="Map controls">
            {MAP_CONTROLS.map(({ id, label, Icon }) => (
              <button key={id} className={styles.mapBtn} aria-label={label}>
                <Icon />
              </button>
            ))}
          </div>

          {/* "This hotel" pin chip */}
          <div className={styles.hotelPin} aria-label="This hotel location">
            <div className={styles.hotelChip}>
              <span className={styles.chipBedIcon}><DoubleBedIcon /></span>
              <span className={styles.chipLabel}>This hotel</span>
            </div>
            <span className={styles.chipArrow} aria-hidden="true" />
          </div>

          {/* Show similar nearby — top-right toggle */}
          <label className={styles.similarRow}>
            <input
              type="checkbox"
              className={styles.srOnly}
              checked={showSimilar}
              onChange={() => setShowSimilar((v) => !v)}
            />
            <span className={`${styles.checkbox} ${showSimilar ? styles.checkboxOn : ''}`}>
              {showSimilar && <TickIcon />}
            </span>
            <span className={styles.similarLabel}>Show similar nearby</span>
          </label>

          {/* Right sidebar panel */}
          <div className={styles.panel}>
            {/* Search */}
            <div className={styles.searchInput}>
              <span className={styles.searchIcon}><SearchIcon /></span>
              <span className={styles.searchPlaceholder}>Search by location</span>
            </div>

            {/* Category list */}
            <div className={styles.categories}>

              {/* Attractions — expanded */}
              <div className={styles.categoryExpanded}>
                <div className={styles.catHeader}>
                  <span className={styles.catIcon}><LandscapeIcon /></span>
                  <span className={styles.catLabel}>Attractions</span>
                  <span className={styles.catChevron}><ChevronUpIcon /></span>
                </div>
                <ul className={styles.locationList}>
                  {ATTRACTIONS.map((item, idx) => (
                    <li
                      key={item.id}
                      className={`${styles.locationRow} ${idx === ATTRACTIONS.length - 1 ? styles.locationRowLast : ''}`}
                    >
                      <div className={styles.locationLeft}>
                        <button
                          className={`${styles.checkBtn} ${checked[item.id] ? styles.checkBtnOn : ''}`}
                          onClick={() => toggle(item.id)}
                          aria-pressed={checked[item.id]}
                          aria-label={item.name}
                        >
                          {checked[item.id] && <TickIcon />}
                        </button>
                        <div className={styles.locationMeta}>
                          <span className={styles.locationName}>{item.name}</span>
                          <span className={styles.locationType}>{item.type}</span>
                        </div>
                      </div>
                      <span className={styles.locationDist}>{item.distance}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Collapsed categories */}
              {COLLAPSED_CATEGORIES.map(({ id, label, Icon }) => (
                <button key={id} className={styles.categoryCollapsed}>
                  <span className={styles.catIcon}><Icon /></span>
                  <span className={styles.catLabel}>{label}</span>
                  <span className={styles.catChevron}><ChevronDownIcon /></span>
                </button>
              ))}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
