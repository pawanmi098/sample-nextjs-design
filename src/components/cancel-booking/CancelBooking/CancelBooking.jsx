import styles from './CancelBooking.module.scss';
import cancelBookingData from '../../../data/cancelBooking.json';

export default function CancelBooking() {
  const { header, bookingSummary, cancellationPolicy, refundSummary, cta } =
    cancelBookingData;

  const regularItems = refundSummary.items.filter((item) => !item.highlighted);
  const highlightedItems = refundSummary.items.filter((item) => item.highlighted);

  return (
    <section className={styles.cancelBooking}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>{header.title}</h1>
        <p className={styles.pageSubtitle}>{header.subtitle}</p>
      </div>

      <div className={styles.contentLayout}>
        {/* Left: Booking Summary Card */}
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

          {highlightedItems.map((item) => (
            <div key={item.label} className={styles.refundRow}>
              <span className={styles.refundLabel}>{item.label}</span>
              <span className={styles.refundValue}>{item.value}</span>
            </div>
          ))}

          <div className={styles.infoNote}>
            <InfoIcon className={styles.infoIcon} />
            <span className={styles.infoText}>{refundSummary.disclaimer}</span>
          </div>

          <div className={styles.ctaRow}>
            <button type="button" className={styles.keepBtn}>
              {cta.keepLabel}
            </button>
            <button type="button" className={styles.cancelBtn}>
              {cta.cancelLabel}
            </button>
          </div>
        </div>

        {/* Right: Cancellation Policy Card */}
        <div className={styles.policyCard}>
          <h2 className={styles.policyTitle}>{cancellationPolicy.title}</h2>
          <ul className={styles.bullets}>
            {cancellationPolicy.bullets.map((bullet, index) => (
              <li key={index} className={styles.bullet}>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function InfoIcon({ className }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M8 7.5V11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="8" cy="5.5" r="0.75" fill="currentColor" />
    </svg>
  );
}
