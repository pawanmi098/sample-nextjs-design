import Image from "next/image";
import styles from "./DealCard.module.scss";

export default function DealCard() {
  return (
    <div className={styles.card}>
      <h3 className={styles.header}>Try La&apos; Opera at Khan market</h3>
      <div className={styles.imageCard}>
        <Image
          className={styles.bgImage}
          src="/assets/booking-confirmation/restaurant-bg.png"
          alt="50% Off on weekends at La' Opera"
          fill
          sizes="(max-width: 768px) 100vw, 346px"
        />
        <div className={styles.overlay}>
          <p className={styles.dealTitle}>50% Off on weekends</p>
          <p className={styles.dealCode}>USECODE: HOTELDEAL</p>
        </div>
      </div>
    </div>
  );
}
