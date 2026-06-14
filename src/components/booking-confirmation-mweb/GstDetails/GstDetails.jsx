import styles from "./GstDetails.module.scss";

const fields = [
  { label: "GST Number:", value: "2****************5" },
  { label: "E-mail:", value: "T***********l.com" },
  { label: "GST Company:", value: "X******d." },
];

export default function GstDetailsMweb() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>GST Details</h2>
      <div className={styles.card}>
        <ul className={styles.fieldsList}>
          {fields.map(({ label, value }) => (
            <li key={label} className={styles.fieldRow}>
              <span className={styles.label}>{label}</span>
              <span className={styles.value}>{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
