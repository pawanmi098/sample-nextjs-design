import Image from "next/image";
import styles from "./SearchFlightBanner.module.scss";

export default function SearchFlightBannerMweb() {
  return (
    <div className={styles.card}>
      <div className={styles.contentRow}>
        <div className={styles.iconWrapper}>
          <Image
            src="/assets/booking-confirmation-mweb/flight-icon.svg"
            alt="Flight"
            width={24}
            height={24}
          />
        </div>
        <div className={styles.textCol}>
          <p className={styles.title}>Book a flight</p>
          <p className={styles.description}>
            Choose from over 75+ domestic, and 25+ international destinations
            when you book with IndiGo.
          </p>
        </div>
      </div>
      <button className={styles.btn}>Search Flight</button>
    </div>
  );
}
