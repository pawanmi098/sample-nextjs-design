import styles from "./page.module.scss";
import CancelBooking from "@/components/cancel-booking/CancelBooking/CancelBooking";
import CancelBookingMweb from "@/components/cancel-booking/CancelBookingMweb/CancelBookingMweb";

export default function CancelBookingPage() {
  return (
    <main className={styles.pageContainer}>
      <div className={styles.desktopSection}>
        <CancelBooking />
      </div>
      <div className={styles.mwebSection}>
        <CancelBookingMweb />
      </div>
    </main>
  );
}
