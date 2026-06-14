import styles from "./ImportantInfo.module.scss";

export default function ImportantInfoMweb() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Important Information</h2>
      <div className={styles.card}>
        <ul className={styles.list}>
          <li>Extra-person charges may apply and vary depending on property policy.</li>
          <li>
            Government-issued photo identification and a credit card, debit card, or cash deposit
            are required at check-in for incidental charges.
          </li>
        </ul>
        <div className={styles.footer}>
          <div className={styles.divider} />
          <div className={styles.linkRow}>
            <a href="#" className={styles.readMoreLink}>
              Read Complete Important Information
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
