'use client';
import { useState, useRef, useEffect, useCallback } from 'react';
import { format } from 'date-fns';
import InfoBanner from "@/components/common/InfoBanner/InfoBanner";
import PaxSelector from "@/components/home/PaxSelector/PaxSelector";
import DateRangePicker from "@/components/home/DateRangePicker/DateRangePicker";
import styles from "./HotelSearchPanel.module.scss";

function formatPax(rooms) {
  const totalAdults = rooms.reduce((sum, r) => sum + r.adults, 0);
  const totalChildren = rooms.reduce((sum, r) => sum + r.children, 0);
  const parts = [`${totalAdults} Adult${totalAdults !== 1 ? 's' : ''}`];
  if (totalChildren > 0) {
    parts.push(`${totalChildren} Child${totalChildren !== 1 ? 'ren' : ''}`);
  }
  parts.push(`${rooms.length} Room${rooms.length !== 1 ? 's' : ''}`);
  return parts.join(', ');
}

function formatDate(date) {
  return date ? format(date, 'd MMM, yy') : null;
}

const HotelSearchPanel = ({
  activeSearch = "destination",
  fields,
  searchInfoTitle,
  searchFormContent,
  onSearch,
}) => {
  const [showPax, setShowPax] = useState(false);
  const [rooms, setRooms] = useState([{ adults: 2, children: 0, childAges: [] }]);
  const [paxPopoverPos, setPaxPopoverPos] = useState(null);

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateRange, setDateRange] = useState({ from: null, to: null });
  const [datePopoverPos, setDatePopoverPos] = useState(null);

  const paxBtnRef = useRef(null);
  const paxSelectorRef = useRef(null);
  const checkinBtnRef = useRef(null);
  const datePickerRef = useRef(null);
  const formAreaRef = useRef(null);

  // ─── Pax handlers ──────────────────────────────────────────────────────────

  const handlePaxClick = useCallback(() => {
    if (showDatePicker) setShowDatePicker(false);
    if (!showPax && paxBtnRef.current && formAreaRef.current) {
      const btnRect = paxBtnRef.current.getBoundingClientRect();
      const areaRect = formAreaRef.current.getBoundingClientRect();
      setPaxPopoverPos({
        top: btnRect.bottom - areaRect.top + 8,
        left: btnRect.left - areaRect.left,
      });
    }
    setShowPax(prev => !prev);
  }, [showPax, showDatePicker]);

  useEffect(() => {
    if (!showPax) return;
    const handleMouseDown = (e) => {
      if (!paxBtnRef.current?.contains(e.target) && !paxSelectorRef.current?.contains(e.target)) {
        setShowPax(false);
      }
    };
    document.addEventListener('mousedown', handleMouseDown);
    return () => document.removeEventListener('mousedown', handleMouseDown);
  }, [showPax]);

  const handlePaxApply = (updatedRooms) => setRooms(updatedRooms);

  // ─── Date picker handlers ───────────────────────────────────────────────────

  const handleDateFieldClick = useCallback(() => {
    if (showPax) setShowPax(false);
    if (!showDatePicker && checkinBtnRef.current && formAreaRef.current) {
      const btnRect = checkinBtnRef.current.getBoundingClientRect();
      const areaRect = formAreaRef.current.getBoundingClientRect();
      setDatePopoverPos({
        top: btnRect.bottom - areaRect.top + 8,
        left: btnRect.left - areaRect.left,
      });
    }
    setShowDatePicker(prev => !prev);
  }, [showDatePicker, showPax]);

  useEffect(() => {
    if (!showDatePicker) return;
    const handleMouseDown = (e) => {
      const clickedCheckin = checkinBtnRef.current?.contains(e.target);
      const clickedPicker = datePickerRef.current?.contains(e.target);
      // also check checkout button (find it by the checkout field)
      const clickedField = e.target.closest('[data-datefield]');
      if (!clickedCheckin && !clickedPicker && !clickedField) {
        setShowDatePicker(false);
      }
    };
    document.addEventListener('mousedown', handleMouseDown);
    return () => document.removeEventListener('mousedown', handleMouseDown);
  }, [showDatePicker]);

  const handleDateApply = (range) => {
    setDateRange(range || { from: null, to: null });
  };

  // ─── Field value helpers ────────────────────────────────────────────────────

  const getFieldValue = (field) => {
    if (field.type === 'date') {
      if (field.dateKey === 'checkin') {
        return formatDate(dateRange.from) || field.value;
      }
      if (field.dateKey === 'checkout') {
        return formatDate(dateRange.to) || field.value;
      }
    }
    return field.value;
  };

  const isDateValueMuted = (field) => {
    if (field.type === 'date') {
      if (field.dateKey === 'checkin') return !dateRange.from;
      if (field.dateKey === 'checkout') return !dateRange.to;
    }
    return !!field.muted;
  };

  return (
    <section className={styles.panel} aria-label="Hotel search">
      <InfoBanner>{searchInfoTitle}</InfoBanner>

      <div ref={formAreaRef} className={styles.formArea}>
        <div className={styles.tabs} role="radiogroup" aria-label="Hotel search type">
          <label className={styles.tab}>
            <input type="radio" name="hotelSearchType" value="destination" defaultChecked={activeSearch === "destination"} />
            <span className={styles.radio} aria-hidden="true" />
            <span className={styles.title}>{searchFormContent?.searchByDestination}</span>
          </label>

          <label className={styles.tab}>
            <input type="radio" name="hotelSearchType" value="pnr" defaultChecked={activeSearch === "pnr"} />
            <span className={styles.radio} aria-hidden="true" />
            <span className={styles.title}>{searchFormContent?.searchByPNR}</span>
          </label>

          <span className={styles.chip}>{searchFormContent?.newLabel}</span>
        </div>

        <div className={styles.searchBox}>
          <div className={styles.fields}>
            {fields.map((field) => {
              // ── Pax field ──────────────────────────────────────────────────
              if (field.type === 'pax') {
                return (
                  <button
                    key={field.label}
                    ref={paxBtnRef}
                    className={styles.field}
                    type="button"
                    onClick={handlePaxClick}
                    aria-haspopup="dialog"
                    aria-expanded={showPax}
                  >
                    {field.icon && (
                      <span className={styles.fieldIcon} aria-hidden="true">{field.icon}</span>
                    )}
                    <span className={styles.fieldContent}>
                      <span className={styles.fieldLabel}>{field.label}</span>
                      <span className={styles.fieldValue}>{formatPax(rooms)}</span>
                    </span>
                  </button>
                );
              }

              // ── Check In date field ────────────────────────────────────────
              if (field.type === 'date' && field.dateKey === 'checkin') {
                return (
                  <button
                    key={field.label}
                    ref={checkinBtnRef}
                    className={`${styles.field} ${showDatePicker ? styles.fieldActive : ''}`}
                    type="button"
                    onClick={handleDateFieldClick}
                    aria-haspopup="dialog"
                    aria-expanded={showDatePicker}
                  >
                    {field.icon && (
                      <span className={styles.fieldIcon} aria-hidden="true">{field.icon}</span>
                    )}
                    <span className={styles.fieldContent}>
                      <span className={styles.fieldLabel}>{field.label}</span>
                      <span className={isDateValueMuted(field) ? styles.fieldValueMuted : styles.fieldValue}>
                        {getFieldValue(field)}
                      </span>
                    </span>
                  </button>
                );
              }

              // ── Check Out date field ───────────────────────────────────────
              if (field.type === 'date' && field.dateKey === 'checkout') {
                return (
                  <button
                    key={field.label}
                    data-datefield="checkout"
                    className={`${styles.field} ${showDatePicker ? styles.fieldActive : ''}`}
                    type="button"
                    onClick={handleDateFieldClick}
                    aria-haspopup="dialog"
                    aria-expanded={showDatePicker}
                  >
                    {field.icon && (
                      <span className={styles.fieldIcon} aria-hidden="true">{field.icon}</span>
                    )}
                    <span className={styles.fieldContent}>
                      <span className={styles.fieldLabel}>{field.label}</span>
                      <span className={isDateValueMuted(field) ? styles.fieldValueMuted : styles.fieldValue}>
                        {getFieldValue(field)}
                      </span>
                    </span>
                  </button>
                );
              }

              // ── Generic field ──────────────────────────────────────────────
              return (
                <button className={styles.field} type="button" key={field.label}>
                  {field.icon && (
                    <span className={styles.fieldIcon} aria-hidden="true">{field.icon}</span>
                  )}
                  <span className={styles.fieldContent}>
                    <span className={styles.fieldLabel}>{field.label}</span>
                    <span className={field.muted ? styles.fieldValueMuted : styles.fieldValue}>
                      {field.value}
                    </span>
                  </span>
                  {field.tag && (
                    <span className={styles.fieldTag}>{field.tag}</span>
                  )}
                </button>
              );
            })}
          </div>

          <button className={styles.searchButton} type="button" onClick={onSearch}>
            <span>{searchFormContent?.searchBtnTitle}</span>
          </button>
        </div>

        {/* DateRangePicker lives OUTSIDE searchBox so overflow:hidden doesn't clip it */}
        <DateRangePicker
          ref={datePickerRef}
          isOpen={showDatePicker}
          onClose={() => setShowDatePicker(false)}
          onApply={handleDateApply}
          popoverPos={datePopoverPos}
          initialRange={dateRange}
        />

        {/* PaxSelector lives OUTSIDE searchBox so overflow:hidden doesn't clip it */}
        <PaxSelector
          ref={paxSelectorRef}
          isOpen={showPax}
          onClose={() => setShowPax(false)}
          onApply={handlePaxApply}
          popoverPos={paxPopoverPos}
        />
      </div>
    </section>
  );
};

export default HotelSearchPanel;
