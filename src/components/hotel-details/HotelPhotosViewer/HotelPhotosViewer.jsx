'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './HotelPhotosViewer.module.scss';

const TABS = [
  { id: 'all', label: 'All Images' },
  { id: 'others', label: 'Others' },
  { id: 'main', label: 'Main' },
];

const IMAGES_BY_CATEGORY = {
  others: [
    { id: 1, src: '/assets/booking-confirmation/hotel-image.png', alt: 'Hotel twin bedroom' },
    { id: 2, src: '/assets/booking-confirmation/hotel-image.png', alt: 'Hotel room with window view' },
    { id: 3, src: '/assets/booking-confirmation/hotel-image.png', alt: 'Hotel room with TV wall' },
    { id: 4, src: '/assets/booking-confirmation/hotel-image.png', alt: 'Hotel deluxe bedroom' },
  ],
  main: [
    { id: 5, src: '/assets/booking-confirmation/hotel-image.png', alt: 'Hotel exterior' },
    { id: 6, src: '/assets/booking-confirmation/hotel-image.png', alt: 'Hotel lobby' },
  ],
};


const ImageGrid = ({ images }) => (
  <div className={styles.imageGrid}>
    {images.map((img) => (
      <div key={img.id} className={styles.imageWrapper}>
        <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
      </div>
    ))}
  </div>
);

const HotelPhotosViewer = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className={styles.gallery}>
      <div className={styles.tabBar}>
        <div className={styles.tabList}>
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              aria-current={activeTab === tab.id ? 'true' : undefined}
            >
              {tab.label}
              {activeTab === tab.id && <span className={styles.indicator} aria-hidden="true" />}
            </button>
          ))}
        </div>
        <div className={styles.tabDivider} aria-hidden="true" />
      </div>

      <div className={styles.content}>
        <button className={styles.backLink} type="button" onClick={onBack}>
          <span className={styles.chevron} aria-hidden="true">&#8249;</span>
          Back to Hotel detail page
        </button>

        {activeTab === 'all' ? (
          Object.entries(IMAGES_BY_CATEGORY).map(([category, images]) => (
            <div key={category} className={styles.categorySection}>
              <h2 className={styles.categoryHeading}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h2>
              <ImageGrid images={images} />
            </div>
          ))
        ) : (
          <div className={styles.categorySection}>
            <ImageGrid images={IMAGES_BY_CATEGORY[activeTab] ?? []} />
          </div>
        )}
      </div>
    </div>
  );
};

export default HotelPhotosViewer;
