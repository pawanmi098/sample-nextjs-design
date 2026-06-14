import Image from "next/image";
import styles from "./CabBanner.module.scss";

export default function CabBannerMweb() {
  return (
    <div className={styles.banner}>
      <div className={styles.iconSection}>
        <Image
          src="/assets/booking-confirmation-mweb/cab-icon.png"
          alt=""
          width={30}
          height={23}
          className={styles.icon}
        />
      </div>
      <div className={styles.infoSection}>
        <div className={styles.textGroup}>
          <p className={styles.title}>Book cabs starting @ ₹1</p>
          <p className={styles.subtitle}>Congratulations! exclusive coupon</p>
        </div>
        <button className={styles.button} type="button">
          Book Now
        </button>
      </div>
    </div>
  );
}
