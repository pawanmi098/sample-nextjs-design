'use client';
import { useState } from 'react';
import HotelPhotosViewer from './HotelPhotosViewer';
import styles from './HotelGalleryToggle.module.scss';

const HotelGalleryToggle = () => {
  const [open, setOpen] = useState(false);

  if (open) {
    return (
      <div className={styles.overlay}>
        <HotelPhotosViewer onBack={() => setOpen(false)} />
      </div>
    );
  }

  return (
    <button className={styles.trigger} type="button" onClick={() => setOpen(true)}>
      View all photos
    </button>
  );
};

export default HotelGalleryToggle;
