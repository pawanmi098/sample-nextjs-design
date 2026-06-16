import styles from './CancelBookingMweb.module.scss';
import cancelBookingData from '../../../data/cancelBooking.json';

export default function CancelBookingMweb() {
  const { header, bookingSummary, refundSummary, cta } = cancelBookingData;

  const regularItems = refundSummary.items.filter((item) => !item.highlighted);
  const highlightedItem = refundSummary.items.find((item) => item.highlighted);

  return (
    <section className={styles.root}>
      {/* Navigation header */}
      <div className={styles.navHeader}>
        <button type="button" className={styles.closeBtn} aria-label="Close">
          <CloseIcon />
        </button>
        <span className={styles.navTitle}>Cancel Booking</span>
      </div>

      {/* Scrollable content */}
      <div className={styles.content}>
        {/* Page heading */}
        <div className={styles.headingSection}>
          <h1 className={styles.heading}>{header.title}</h1>
          <p className={styles.subheading}>{header.subtitle}</p>
        </div>

        {/* Booking summary card */}
        <div className={styles.summaryCard}>
          <h2 className={styles.hotelName}>{bookingSummary.hotelName}</h2>
          <div className={styles.divider} />

          <div className={styles.datesRow}>
            <div className={styles.dateCol}>
              <span className={styles.dateLabel}>Check In</span>
              <span className={styles.dateValue}>{bookingSummary.checkIn.date}</span>
            </div>
            <div className={styles.dateCol}>
              <span className={styles.dateLabel}>Check Out</span>
              <span className={styles.dateValue}>{bookingSummary.checkOut.date}</span>
            </div>
          </div>
          <div className={styles.divider} />

          <div className={styles.roomSection}>
            <span className={styles.roomType}>{bookingSummary.roomType}</span>
            <span className={styles.guestChip}>{bookingSummary.guestChip}</span>
          </div>
          <div className={styles.divider} />

          <div className={styles.priceBreakup}>
            <span className={styles.breakupTitle}>{refundSummary.priceBreakupTitle}</span>
            {regularItems.map((item) => (
              <div key={item.label} className={styles.priceRow}>
                <span className={styles.priceLabel}>{item.label}</span>
                <span className={styles.priceValue}>{item.value}</span>
              </div>
            ))}
          </div>
          <div className={styles.divider} />

          {highlightedItem && (
            <div className={styles.refundRow}>
              <span className={styles.refundLabel}>{highlightedItem.label}</span>
              <span className={styles.refundValue}>{highlightedItem.value}</span>
            </div>
          )}
        </div>

        {/* Info banner */}
        <div className={styles.infoBanner}>
          <InfoIcon className={styles.infoIcon} />
          <span className={styles.infoText}>{refundSummary.disclaimer}</span>
        </div>
      </div>

      {/* Bottom CTA bar */}
      <div className={styles.ctaBar}>
        <button type="button" className={styles.keepBtn}>
          {cta.keepLabel}
        </button>
        <button type="button" className={styles.cancelBtn}>
          {cta.cancelLabel}
        </button>
      </div>
    </section>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M18 6L6 18M6 6l12 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InfoIcon({ className }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M10 9.5V14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="10" cy="7" r="0.75" fill="currentColor" />
    </svg>
  );
}
