import styles from "./PaymentDetails.module.scss";

export default function PaymentDetailsMweb() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.headerRow}>
          <span className={styles.statusLabel}>Booking Status</span>
          <span className={styles.chip}>Confirmed</span>
        </div>
        <div className={styles.divider} />
      </div>
      <div className={styles.body}>
        <div className={styles.field}>
          <span className={styles.fieldText}>Booking ID : RDBS78755340000780</span>
        </div>
        <div className={styles.field}>
          <span className={styles.fieldText}>Hotel ID : 366465858787</span>
        </div>
      </div>
    </div>
  );
}
