import Image from "next/image";
import styles from "./LoginCard.module.scss";
import data from "@/data/my-bookings.json";

const { loginCard } = data;

export default function LoginCard() {
  const { quickAccessLabel, description, ctaLabel } = loginCard;

  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <span className={styles.quickLabel}>{quickAccessLabel}</span>
        <button className={styles.closeBtn} type="button" aria-label="Close">
          <Image
            src="/assets/my-bookings/icon-close.svg"
            alt=""
            width={16}
            height={16}
          />
        </button>
      </div>
      <div className={styles.content}>
        <p className={styles.description}>{description}</p>
        <button className={styles.loginBtn} type="button">
          <span className={styles.loginLabel}>{ctaLabel}</span>
          <Image
            src="/assets/my-bookings/icon-arrow-right.svg"
            alt=""
            width={24}
            height={24}
          />
        </button>
      </div>
    </article>
  );
}
