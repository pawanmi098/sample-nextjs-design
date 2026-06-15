import styles from "./page.module.scss";
import FindBooking from "@/components/my-bookings/FindBooking/FindBooking";
import LoginCard from "@/components/my-bookings/LoginCard/LoginCard";
import ManageBooking from "@/components/my-bookings/ManageBooking/ManageBooking";
import PromoCards from "@/components/my-bookings/PromoCards/PromoCards";
import BookingsList from "@/components/my-bookings/BookingsList/BookingsList";

export default function MyBookingsPage() {
  return (
    <main className={styles.pageContainer}>
      {/* MWeb: FindBooking + ManageBooking + PromoCards + BookingsList */}
      <div className={styles.mwebOnly}>
        <FindBooking isMweb />
        <ManageBooking />
        <PromoCards isMweb />
        <BookingsList isMweb />
      </div>

      {/* Web: full two-column layout */}
      <div className={styles.webOnly}>
      <div className={styles.layout}>
        <div className={styles.leftSection}>
          <FindBooking />
          <LoginCard />
          <PromoCards />
        </div>
        <div className={styles.rightSection}>
          <ManageBooking />
          <BookingsList />
        </div>
      </div>
      </div>
    </main>
  );
}
