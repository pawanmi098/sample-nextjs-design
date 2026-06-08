'use client';
import { useState, forwardRef } from 'react';
import useIsMobile from '@/hooks/useIsMobile';
import styles from './PaxSelector.module.scss';

const MAX_ROOMS = 4;
const MAX_ADULTS = 9;
const MAX_CHILDREN = 6;
const CHILD_AGES = Array.from({ length: 11 }, (_, i) => i + 2); // 2–12

const newRoom = () => ({ adults: 2, children: 0, childAges: [] });

function MinusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 8l8 8M16 8l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className={styles.chevron}>
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Counter({ value, min, max, onChange }) {
  return (
    <div className={styles.counter}>
      <button
        type="button"
        className={`${styles.counterBtn} ${styles.counterBtnMinus}`}
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        aria-label="Decrease"
      >
        <MinusIcon />
      </button>
      <span className={styles.counterValue}>{value}</span>
      <button
        type="button"
        className={`${styles.counterBtn} ${styles.counterBtnPlus}`}
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        aria-label="Increase"
      >
        <PlusIcon />
      </button>
    </div>
  );
}

const PaxSelector = forwardRef(function PaxSelector({ isOpen, onClose, onApply, popoverPos }, ref) {
  const [rooms, setRooms] = useState([newRoom()]);
  const [isMobile] = useIsMobile();

  if (!isOpen) return null;

  const updateAdults = (ri, v) =>
    setRooms(prev => prev.map((r, i) => i === ri ? { ...r, adults: v } : r));

  const updateChildren = (ri, v) =>
    setRooms(prev => prev.map((r, i) => {
      if (i !== ri) return r;
      const ages = [...r.childAges];
      while (ages.length < v) ages.push(2);
      while (ages.length > v) ages.pop();
      return { ...r, children: v, childAges: ages };
    }));

  const updateChildAge = (ri, ci, age) =>
    setRooms(prev => prev.map((r, i) => {
      if (i !== ri) return r;
      const ages = [...r.childAges];
      ages[ci] = age;
      return { ...r, childAges: ages };
    }));

  const handleApply = () => { onApply(rooms); onClose(); };

  const hasAnyChildren = rooms.some(r => r.children > 0);

  const roomsContent = rooms.map((room, ri) => (
    <div key={ri} className={styles.room}>
      <p className={styles.roomTitle}>Room {ri + 1}</p>
      <div className={styles.paxRows}>
        <div className={styles.paxRow}>
          <div className={styles.paxLabel}>
            <span className={styles.paxLabelBold}>Adult(s)</span>
            <span className={styles.paxLabelSub}> (Age above 12 yrs)</span>
          </div>
          <Counter value={room.adults} min={1} max={MAX_ADULTS} onChange={v => updateAdults(ri, v)} />
        </div>
        <div className={styles.paxRow}>
          <div className={styles.paxLabel}>
            <span className={styles.paxLabelBold}>Children(s)</span>
            <span className={styles.paxLabelSub}> (Age 2 to 12 yrs)</span>
          </div>
          <Counter value={room.children} min={0} max={MAX_CHILDREN} onChange={v => updateChildren(ri, v)} />
        </div>
      </div>
    </div>
  ));

  const childAgesContent = hasAnyChildren && (
    <div className={styles.childAgesSection}>
      {rooms.map((room, ri) =>
        room.childAges.map((age, ci) => (
          <div key={`${ri}-${ci}`} className={styles.childAgeRow}>
            <span className={styles.childAgeLabel}>Child - {ci + 1} age</span>
            <div className={styles.childAgeSelectWrap}>
              <span className={styles.childAgeDisplayValue}>{age}</span>
              <ChevronDownIcon />
              <select
                className={styles.childAgeSelect}
                value={age}
                onChange={e => updateChildAge(ri, ci, Number(e.target.value))}
                aria-label={`Child ${ci + 1} age`}
              >
                {CHILD_AGES.map(a => (
                  <option key={a} value={a}>{a}</option>
                ))}
              </select>
            </div>
          </div>
        ))
      )}
      <p className={styles.childAgeInfo}>
        Please provide right number of children along with their right age for best options and prices.
      </p>
    </div>
  );

  // ─── mweb: full-screen fixed modal ─────────────────────────────────────────
  if (isMobile === true) {
    return (
      <div ref={ref} className={styles.mwebOverlay}>
        <div
          className={styles.mwebModal}
          role="dialog"
          aria-modal="true"
          aria-label="Select No. of Guest & Rooms"
        >
          <div className={styles.mwebHeader}>
            <button type="button" className={styles.mwebClose} onClick={onClose} aria-label="Close">
              <CloseIcon />
            </button>
            <span className={styles.mwebTitle}>Select No. of Guest &amp; Rooms</span>
          </div>

          <div className={styles.mwebContent}>
            {roomsContent}
            {childAgesContent}
            {rooms.length < MAX_ROOMS && (
              <button type="button" className={styles.addRoom} onClick={() => setRooms(p => [...p, newRoom()])}>
                + Add More Room
              </button>
            )}
          </div>

          <div className={styles.mwebFooter}>
            <button type="button" className={styles.cancelBtn} onClick={onClose}>Cancel</button>
            <button type="button" className={styles.doneBtn} onClick={handleApply}>Done</button>
          </div>
        </div>
      </div>
    );
  }

  // ─── web: fixed popover aligned to pax button's left edge ──────────────────
  const posStyle = popoverPos
    ? { top: `${popoverPos.top}px`, left: `${popoverPos.left}px` }
    : undefined;

  return (
    <div
      ref={ref}
      className={styles.webPopover}
      style={posStyle}
      role="dialog"
      aria-label="Select No. of Guest & Rooms"
    >
      <div className={styles.webContent}>
        {roomsContent}
        {childAgesContent}
        {rooms.length < MAX_ROOMS && (
          <button type="button" className={styles.addRoom} onClick={() => setRooms(p => [...p, newRoom()])}>
            + Add More Room
          </button>
        )}
      </div>
      <div className={styles.webDivider} />
      <button type="button" className={styles.webDoneBtn} onClick={handleApply}>
        Done
      </button>
    </div>
  );
});

export default PaxSelector;
