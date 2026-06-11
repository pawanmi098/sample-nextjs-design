import Image from "next/image";
import styles from "./MoreOptions.module.scss";

export default function MoreOptions() {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>More Options For Your Trip</h2>

      <div className={styles.cards}>
        {/* Sightseeing card — Experience Delhi */}
        <article className={styles.card}>
          <div className={styles.imageWrap}>
            <Image
              fill
              src="/assets/booking-confirmation/more-options-delhi.png"
              alt="Experience Delhi sightseeing"
              className={styles.cardImage}
              sizes="92px"
            />
          </div>
          <div className={styles.timerChip}>
            <ClockIcon className={styles.clockIcon} />
            <span className={styles.timerText}>20 : 19</span>
          </div>
          <div className={styles.infoPanel}>
            <div className={styles.textGroup}>
              <h3 className={styles.cardTitle}>Experience Delhi</h3>
              <p className={styles.cardPrice}>Starting @₹600</p>
              <span className={styles.newChip}>New</span>
            </div>
            <button type="button" className={styles.ctaBtn}>Explore</button>
          </div>
        </article>

        {/* Cab card — Book a ride */}
        <article className={`${styles.card} ${styles.cabCard}`}>
          <div className={styles.imageWrap}>
            <Image
              fill
              src="/assets/booking-confirmation/more-options-cab.png"
              alt="Book a cab ride"
              className={styles.cardImage}
              sizes="92px"
            />
          </div>
          <div className={styles.cabPanelWrap}>
            <div className={styles.infoPanel}>
              <div className={styles.textGroup}>
                <h3 className={styles.cabTitle}>Book a ride</h3>
                <span className={styles.discountChip}>50% off for this trip</span>
              </div>
              <button type="button" className={styles.ctaBtn}>Claim</button>
            </div>
            <div className={styles.bottomBanner}>
              Book your first ride at just ₹1
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

function ClockIcon({ className }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="10" cy="10" r="7.7" stroke="#A97D0E" strokeWidth="1.25" />
      <path
        d="M10 6.5V10L12.1 12.1"
        stroke="#A97D0E"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
