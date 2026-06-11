import Image from "next/image";
import styles from "./CabBanner.module.scss";

export default function CabBanner() {
  return (
    <div className={styles.banner}>
      <div className={styles.iconSection}>
        <Image
          src="/assets/booking-confirmation/cab-icon.png"
          alt=""
          width={58}
          height={44}
          className={styles.icon}
        />
      </div>
      <div className={styles.infoSection}>
        <div className={styles.textGroup}>
          <p className={styles.title}>Book cabs for your delhi trip starting @ ₹1</p>
          <p className={styles.subtitle}>
            Congratulations you&apos;ve unlocked exclusive coupon with this booking!
          </p>
        </div>
        <button className={styles.button} type="button">
          Book Now
        </button>
      </div>
    </div>
  );
}
