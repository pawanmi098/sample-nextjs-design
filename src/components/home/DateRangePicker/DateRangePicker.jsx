'use client';
import { useState, forwardRef } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import useIsMobile from '@/hooks/useIsMobile';
import styles from './DateRangePicker.module.scss';

const WEEKDAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const MWEB_MONTHS = 13;

function ChevronLeftIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M8 2L4 6L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const DateRangePicker = forwardRef(function DateRangePicker(
  { isOpen, onClose, onApply, popoverPos, initialRange },
  ref
) {
  const [range, setRange] = useState(initialRange || {});
  const [isMobile] = useIsMobile();

  if (!isOpen) return null;

  const today = new Date();
  const defaultMonth = range?.from || today;

  const formattedRange = range?.from
    ? range?.to
      ? `${format(range.from, 'd MMM')} – ${format(range.to, 'd MMM')}`
      : format(range.from, 'd MMM')
    : 'Select dates';

  const handleApply = () => {
    onApply(range);
    onClose();
  };

  // ─── mweb: full-screen modal ────────────────────────────────────────────────
  if (isMobile === true) {
    return (
      <div ref={ref} className={styles.mwebOverlay}>
        <div
          className={styles.mwebModal}
          role="dialog"
          aria-modal="true"
          aria-label="Select check-in and check-out dates"
        >
          <div className={styles.mwebHeader}>
            <div className={styles.mwebHeaderInfo}>
              <span className={styles.mwebHeaderLabel}>Check - In &amp; Check - out</span>
              <span className={styles.mwebHeaderDate}>{formattedRange}</span>
            </div>
          </div>

          <div className={styles.mwebWeekdays} aria-hidden="true">
            {WEEKDAYS.map((d, i) => (
              <span key={i} className={styles.mwebWeekday}>{d}</span>
            ))}
          </div>

          <div className={styles.mwebCalendarScroll}>
            <DayPicker
              mode="range"
              selected={range}
              onSelect={setRange}
              numberOfMonths={MWEB_MONTHS}
              defaultMonth={today}
              fromDate={today}
              fixedWeeks
              className={styles.mwebCalendar}
              components={{
                IconLeft: ChevronLeftIcon,
                IconRight: ChevronRightIcon,
              }}
            />
          </div>

          <div className={styles.mwebFooter}>
            <button type="button" className={styles.cancelBtn} onClick={onClose}>
              Cancel
            </button>
            <button
              type="button"
              className={styles.doneBtn}
              onClick={handleApply}
              disabled={!range?.from}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ─── web: popover ──────────────────────────────────────────────────────────
  const posStyle = popoverPos
    ? { top: `${popoverPos.top}px`, left: `${popoverPos.left}px` }
    : undefined;

  return (
    <div
      ref={ref}
      className={styles.webPopover}
      style={posStyle}
      role="dialog"
      aria-modal="true"
      aria-label="Select check-in and check-out dates"
    >
      <DayPicker
        mode="range"
        selected={range}
        onSelect={setRange}
        numberOfMonths={2}
        defaultMonth={defaultMonth}
        fromDate={today}
        pagedNavigation
        fixedWeeks
        className={styles.webCalendar}
        components={{
          IconLeft: ChevronLeftIcon,
          IconRight: ChevronRightIcon,
        }}
      />
      <div className={styles.webFooter}>
        <div className={styles.webDivider} />
        <button
          type="button"
          className={styles.webDoneBtn}
          onClick={handleApply}
          disabled={!range?.from}
        >
          Done
        </button>
      </div>
    </div>
  );
});

export default DateRangePicker;
