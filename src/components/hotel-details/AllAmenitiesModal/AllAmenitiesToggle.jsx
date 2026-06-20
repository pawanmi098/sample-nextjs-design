'use client';
import { useState } from 'react';
import AllAmenitiesModal from './AllAmenitiesModal';
import styles from './AllAmenitiesToggle.module.scss';

const AllAmenitiesToggle = ({ hotelName }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className={styles.trigger} type="button" onClick={() => setOpen(true)}>
        View all amenities
      </button>
      {open && (
        <AllAmenitiesModal hotelName={hotelName} onClose={() => setOpen(false)} />
      )}
    </>
  );
};

export default AllAmenitiesToggle;
