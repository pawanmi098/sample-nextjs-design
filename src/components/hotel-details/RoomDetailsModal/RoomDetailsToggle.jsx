'use client';
import { useState } from 'react';
import RoomDetailsModal from './RoomDetailsModal';
import styles from './RoomDetailsToggle.module.scss';

const RoomDetailsToggle = ({ room }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className={styles.trigger} type="button" onClick={() => setOpen(true)}>
        View Room Details
      </button>
      {open && (
        <RoomDetailsModal room={room} onClose={() => setOpen(false)} />
      )}
    </>
  );
};

export default RoomDetailsToggle;
