import Image from "next/image";
import styles from "./SightseeingCard.module.scss";

export default function SightseeingCard() {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <p className={styles.label}>Book your sightseeing</p>
        <h3 className={styles.title}>Get 5% off with the booking</h3>
      </div>
      <div className={styles.imageCard}>
        <Image
          src="/assets/booking-confirmation/sightseeing-bg.png"
          alt="Paragliding sightseeing activity"
          fill
          className={styles.bgImage}
          sizes="(max-width: 768px) 100vw, 346px"
        />
        <div className={styles.ctaWrapper}>
          <button type="button" className={styles.ctaButton}>
            Explore Sightseeing
          </button>
        </div>
      </div>
      <div className={styles.indicator} role="tablist" aria-label="Carousel">
        <div
          className={`${styles.dot} ${styles.dotActive}`}
          role="tab"
          aria-selected="true"
          aria-label="Slide 1"
        />
        <div
          className={styles.dot}
          role="tab"
          aria-selected="false"
          aria-label="Slide 2"
        />
        <div
          className={styles.dot}
          role="tab"
          aria-selected="false"
          aria-label="Slide 3"
        />
      </div>
    </article>
  );
}
