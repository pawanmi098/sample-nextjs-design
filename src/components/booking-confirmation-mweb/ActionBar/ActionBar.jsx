import Image from "next/image";
import styles from "./ActionBar.module.scss";

const ACTIONS = [
  {
    id: "download",
    icon: "/assets/booking-confirmation-mweb/icon-download.svg",
    label: "Download",
  },
  {
    id: "share",
    icon: "/assets/booking-confirmation-mweb/icon-share.svg",
    label: "Share",
  },
  {
    id: "cancel",
    icon: "/assets/booking-confirmation-mweb/icon-cancel.svg",
    label: "Cancel",
  },
];

export default function ActionBar() {
  return (
    <div className={styles.bar}>
      {ACTIONS.map(({ id, icon, label }) => (
        <button key={id} className={styles.btn} type="button">
          <Image src={icon} alt="" width={16} height={16} />
          <span className={styles.label}>{label}</span>
        </button>
      ))}
    </div>
  );
}
