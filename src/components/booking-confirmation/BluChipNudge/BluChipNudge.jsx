import Image from "next/image";
import styles from "./BluChipNudge.module.scss";

export default function BluChipNudge() {
  return (
    <div className={styles.outer}>
      <div className={styles.card}>
        <div className={styles.textGroup}>
          <p className={styles.heading}>
            You are missing out{" "}
            <span className={styles.highlight}>6,200</span>
            {" IndiGo "}
            <span className={styles.highlight}>BluChips</span>
          </p>
          <p className={styles.subtext}>Enrol now for benefits</p>
        </div>
      </div>
      <div className={styles.deviceGroup}>
        <Sparkle className={styles.star1} size={10} />
        <div className={styles.deviceImageWrap}>
          <Image
            src="/assets/booking-confirmation/bluchip-device.png"
            alt="IndiGo BluChip device"
            width={101}
            height={105}
            className={styles.deviceImg}
          />
        </div>
        <Sparkle className={styles.star2} size={8} />
        <Sparkle className={styles.star3} size={9} />
      </div>
    </div>
  );
}

function Sparkle({ className, size = 10 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 10 10"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M5 0C5 0 5.5 4 10 5C5.5 6 5 10 5 10C5 10 4.5 6 0 5C4.5 4 5 0 5 0Z"
        fill="currentColor"
      />
    </svg>
  );
}
