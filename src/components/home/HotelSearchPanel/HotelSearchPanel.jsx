'use client';
import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { format } from 'date-fns';
import InfoBanner from "@/components/common/InfoBanner/InfoBanner";
import PaxSelector from "@/components/home/PaxSelector/PaxSelector";
import DateRangePicker from "@/components/home/DateRangePicker/DateRangePicker";
import useIsMobile from '@/hooks/useIsMobile';
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

const PNRIcon = () => (
  <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M0.750107 8.09839C0.335834 8.09839 -3.62169e-08 7.76255 0 7.34828L5.76782e-07 0.750657C6.12999e-07 0.336385 0.335835 0.000550428 0.750108 0.000550464L2.86232 0.000550648C4.18753 0.000550764 5.26183 1.07485 5.26183 2.40006C5.26183 3.72528 4.18753 4.79957 2.86232 4.79957H1.50021L1.50021 7.34828C1.50021 7.76255 1.16438 8.09839 0.750107 8.09839ZM1.50021 3.29936H2.86232C3.35899 3.29936 3.76162 2.89673 3.76162 2.40006C3.76162 1.90339 3.35899 1.50076 2.86232 1.50076L1.50021 1.50076L1.50021 3.29936Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M13.4883 8.0979C13.074 8.0979 12.7382 7.76206 12.7382 7.34779L12.7382 0.750169C12.7382 0.335896 13.074 6.20766e-05 13.4883 6.21129e-05L15.6005 6.22975e-05C16.9257 6.24134e-05 18 1.07436 18 2.39957C18 3.72479 16.9257 4.79909 15.6005 4.79909H14.2384V7.34779C14.2384 7.76206 13.9026 8.0979 13.4883 8.0979ZM14.2384 3.29887H15.6005C16.0972 3.29887 16.4998 2.89624 16.4998 2.39957C16.4998 1.90291 16.0972 1.50028 15.6005 1.50028L14.2384 1.50028V3.29887Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M15.191 3.50319C15.5565 3.30812 16.0109 3.44626 16.206 3.81173L17.9106 7.00532C18.1057 7.37079 17.9675 7.8252 17.6021 8.02027C17.2366 8.21535 16.7822 8.07721 16.5871 7.71174L14.8825 4.51815C14.6874 4.15268 14.8256 3.69827 15.191 3.50319Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M11.2862 8.06841C10.9653 8.16116 10.6217 8.03048 10.4435 7.74791L7.66749 3.34589L7.66748 7.34779C7.66748 7.76206 7.33165 8.0979 6.91738 8.0979C6.50311 8.0979 6.16727 7.76206 6.16727 7.34779L6.16727 0.75017C6.16727 0.4161 6.3882 0.122292 6.70913 0.0295482C7.03007 -0.063196 7.37366 0.0674789 7.55186 0.350053L10.3279 4.75207V0.75017C10.3279 0.335898 10.6637 6.33593e-05 11.078 6.33955e-05C11.4922 6.34317e-05 11.8281 0.335898 11.8281 0.75017L11.8281 7.34779C11.8281 7.68186 11.6071 7.97567 11.2862 8.06841Z" fill="currentColor"/>
  </svg>
);

const ProfileIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M10 1.5C5.30558 1.5 1.5 5.30558 1.5 10C1.5 14.6944 5.30558 18.5 10 18.5C14.6944 18.5 18.5 14.6944 18.5 10C18.5 5.30558 14.6944 1.5 10 1.5ZM0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M10 5.75C8.75736 5.75 7.75 6.75736 7.75 8C7.75 9.24264 8.75736 10.25 10 10.25C11.2426 10.25 12.25 9.24264 12.25 8C12.25 6.75736 11.2426 5.75 10 5.75ZM6.25 8C6.25 5.92893 7.92893 4.25 10 4.25C12.0711 4.25 13.75 5.92893 13.75 8C13.75 10.0711 12.0711 11.75 10 11.75C7.92893 11.75 6.25 10.0711 6.25 8Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M10 14.75C7.79097 14.75 5.849 15.8955 4.7364 17.6284L3.47416 16.818C4.85101 14.6735 7.25903 13.25 10 13.25C12.741 13.25 15.149 14.6735 16.5258 16.818L15.2636 17.6284C14.151 15.8955 12.209 14.75 10 14.75Z" fill="currentColor"/>
  </svg>
);

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="6.5" cy="6.5" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M10.5 10.5L14.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const HotelSearchPanel = ({
  activeSearch = "destination",
  fields,
  searchInfoTitle,
  searchFormContent,
  onSearch,
}) => {
  const [isMobile] = useIsMobile();

  const [activeTab, setActiveTab] = useState(activeSearch);
  const [pnrValue, setPnrValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');

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

  // On mweb: collapse the two date fields into one combined field
  const processedFields = useMemo(() => {
    if (isMobile !== true) return fields;

    const checkinField = fields.find(f => f.type === 'date' && f.dateKey === 'checkin');
    const checkoutField = fields.find(f => f.type === 'date' && f.dateKey === 'checkout');
    const placeholder = (checkinField && checkoutField)
      ? `${checkinField.value} – ${checkoutField.value}`
      : checkinField?.value ?? 'Add dates';

    return fields.reduce((acc, field) => {
      if (field.type === 'date' && field.dateKey === 'checkin') {
        acc.push({ type: 'dateRange', placeholder });
      } else if (field.type === 'date' && field.dateKey === 'checkout') {
        // merged into the single dateRange field above
      } else {
        acc.push(field);
      }
      return acc;
    }, []);
  }, [fields, isMobile]);

  // ─── Tab handler ────────────────────────────────────────────────────────────

  const handleTabChange = useCallback((tab) => {
    setActiveTab(tab);
    if (showDatePicker) setShowDatePicker(false);
    if (showPax) setShowPax(false);
  }, [showDatePicker, showPax]);

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

  const firstTabLabel = isMobile === true
    ? searchFormContent?.searchByLocation
    : searchFormContent?.searchByDestination;

  return (
    <section className={`${styles.panel}${isMobile === null ? ` ${styles.panelHidden}` : ''}`} aria-label="Hotel search">
      <InfoBanner>{searchInfoTitle}</InfoBanner>

      <div ref={formAreaRef} className={styles.formArea}>
        <div className={styles.tabs} role="radiogroup" aria-label="Hotel search type">
          <label className={styles.tab}>
            <input
              type="radio"
              name="hotelSearchType"
              value="destination"
              checked={activeTab === 'destination'}
              onChange={() => handleTabChange('destination')}
            />
            <span className={styles.radio} aria-hidden="true" />
            <span className={styles.title}>{firstTabLabel}</span>
          </label>

          <label className={styles.tab}>
            <input
              type="radio"
              name="hotelSearchType"
              value="pnr"
              checked={activeTab === 'pnr'}
              onChange={() => handleTabChange('pnr')}
            />
            <span className={styles.radio} aria-hidden="true" />
            <span className={styles.title}>{searchFormContent?.searchByPNR}</span>
          </label>

          <span className={styles.chip}>{searchFormContent?.newLabel}</span>
        </div>

        {activeTab === 'pnr' ? (
          // ── PNR search form ────────────────────────────────────────────────
          <div className={styles.pnrSearchBox}>
            <div className={styles.pnrFields}>
              <label className={styles.field}>
                <span className={styles.fieldIcon} aria-hidden="true">
                  <PNRIcon />
                </span>
                <span className={styles.fieldContent}>
                  <span className={styles.fieldLabel}>{searchFormContent?.pnrLabel}</span>
                  <input
                    type="text"
                    className={styles.pnrInput}
                    placeholder={searchFormContent?.pnrPlaceholder}
                    value={pnrValue}
                    onChange={e => setPnrValue(e.target.value)}
                    aria-label={searchFormContent?.pnrLabel}
                  />
                </span>
              </label>
              <label className={styles.field}>
                <span className={styles.fieldIcon} aria-hidden="true">
                  <ProfileIcon />
                </span>
                <span className={styles.fieldContent}>
                  <span className={styles.fieldLabel}>{searchFormContent?.lastNameLabel}</span>
                  <input
                    type="text"
                    className={styles.pnrInput}
                    placeholder={searchFormContent?.lastNamePlaceholder}
                    value={lastNameValue}
                    onChange={e => setLastNameValue(e.target.value)}
                    aria-label={searchFormContent?.lastNameLabel}
                  />
                </span>
              </label>
            </div>

            <button className={styles.searchButton} type="button" onClick={onSearch}>
              <span className={styles.pnrBtnIcon}><SearchIcon /></span>
              <span>{searchFormContent?.searchBtnTitle}</span>
            </button>
          </div>
        ) : (
          // ── Destination search form ────────────────────────────────────────
          <div className={styles.searchBox}>
            <div className={styles.fields}>
              {processedFields.map((field) => {
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

                // ── Combined date field (mweb only) ────────────────────────────
                if (field.type === 'dateRange') {
                  const combinedValue = dateRange.from && dateRange.to
                    ? `${format(dateRange.from, 'd MMM')} – ${format(dateRange.to, 'd MMM, yy')}`
                    : dateRange.from ? format(dateRange.from, 'd MMM, yy') : null;
                  return (
                    <button
                      key="dateRange"
                      ref={checkinBtnRef}
                      className={`${styles.field} ${showDatePicker ? styles.fieldActive : ''}`}
                      type="button"
                      onClick={handleDateFieldClick}
                      aria-haspopup="dialog"
                      aria-expanded={showDatePicker}
                    >
                      <span className={styles.fieldContent}>
                        <span className={styles.fieldLabel}>Check In &amp; Check Out</span>
                        <span className={combinedValue ? styles.fieldValue : styles.fieldValueMuted}>
                          {combinedValue || field.placeholder}
                        </span>
                      </span>
                    </button>
                  );
                }

                // ── Check In date field (desktop) ──────────────────────────────
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

                // ── Check Out date field (desktop) ─────────────────────────────
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
        )}

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
