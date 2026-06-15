import Image from "next/image";
import styles from "./PromoCards.module.scss";
import data from "@/data/my-bookings.json";

const { promoCards } = data;

export default function PromoCards({ isMweb }) {
  if (isMweb) {
    return (
      <div className={styles.mwebCard}>
        <div className={styles.imageWrapper}>
          <Image
            src={promoCards.image}
            alt={promoCards.imageAlt}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={styles.mwebOverlay}>
          <div className={styles.mwebTexts}>
            <p className={styles.mwebTitle}>{promoCards.mwebTitle}</p>
            <p className={styles.mwebSubtitle}>{promoCards.mwebSubtitle}</p>
          </div>
          <div className={styles.mwebCtaRow}>
            <span className={styles.validFrom}>{promoCards.validFromLabel}</span>
            <button className={styles.mwebActionBtn} aria-label="View offer">
              <Image
                src="/assets/my-bookings/icon-promo-action.svg"
                alt=""
                width={40}
                height={40}
              />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={promoCards.image}
          alt={promoCards.imageAlt}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.overlay}>
        <p className={styles.descriptor}>{promoCards.descriptor}</p>
        <p className={styles.headline}>{promoCards.headline}</p>
        <button className={styles.actionBtn} aria-label="View offer">
          <Image
            src="/assets/my-bookings/icon-promo-action.svg"
            alt=""
            width={40}
            height={40}
          />
        </button>
      </div>
    </div>
  );
}
