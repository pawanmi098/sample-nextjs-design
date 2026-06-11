import styles from "./ManageBooking.module.scss";

const actions = [
  { label: "Download Voucher", href: "#download" },
  { label: "Share Booking", href: "#share" },
  { label: "Cancel Booking", href: "#cancel" },
];

export default function ManageBooking() {
  return (
    <aside className={styles.card}>
      <div className={styles.header}>
        <div className={styles.titleRow}>
          <h2 className={styles.title}>Manage Booking</h2>
        </div>
        <div className={styles.divider} role="separator" />
      </div>
      <ul className={styles.actionList}>
        {actions.map(({ label, href }) => (
          <li key={label} className={styles.actionItem}>
            <a href={href} className={styles.actionLink}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
