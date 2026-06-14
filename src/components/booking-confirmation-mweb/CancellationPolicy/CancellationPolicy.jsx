import styles from "./CancellationPolicy.module.scss";

const bullets = [
  "Free cancellation is allowed till 21st Mar, 2023",
  "No refund if cancelled after 12 pm 21st Mar, 2023",
];

export default function CancellationPolicyMweb() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Cancellation Policy</h2>
      <div className={styles.content}>
        <ul className={styles.bulletList}>
          {bullets.map((item, i) => (
            <li key={i} className={styles.bulletItem}>
              {item}
            </li>
          ))}
        </ul>
        <div className={styles.progressSection}>
          <div className={styles.progressBar}>
            <div className={styles.progressFill}>
              <span className={styles.fillLabel}>100% Refund</span>
            </div>
            <span className={styles.remainLabel}>Non refundable</span>
          </div>
          <div className={styles.progressLabels}>
            <span className={styles.labelText}>Till 21st Mar</span>
            <span className={styles.labelText}>After 21st Mar</span>
          </div>
        </div>
      </div>
    </div>
  );
}
