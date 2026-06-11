import BookingConfirmation from "@/components/booking-confirmation/BookingConfirmation";
import ReservationDetails from "@/components/booking-confirmation/ReservationDetails/ReservationDetails";
import ManageBooking from "@/components/booking-confirmation/ManageBooking/ManageBooking";
import CabBanner from "@/components/booking-confirmation/CabBanner/CabBanner";
import DealCard from "@/components/booking-confirmation/DealCard/DealCard";
import PriceBreakup from "@/components/booking-confirmation/PriceBreakup/PriceBreakup";
import CancellationPolicy from "@/components/booking-confirmation/CancellationPolicy/CancellationPolicy";
import BluChipNudge from "@/components/booking-confirmation/BluChipNudge/BluChipNudge";
import MoreOptions from "@/components/booking-confirmation/MoreOptions/MoreOptions";
import SightseeingCard from "@/components/booking-confirmation/SightseeingCard/SightseeingCard";
import SightseeingExplore from "@/components/booking-confirmation/SightseeingExplore/SightseeingExplore";
import styles from "./page.module.scss";

export default function BookingConfirmationPage() {
  return (
    <main className={styles.pageContainer}>
      <div className={styles.bookingRow}>
        <div className={styles.leftSection}>
          <BookingConfirmation />
          <ReservationDetails />
          <CabBanner />
          <CancellationPolicy />
          <SightseeingExplore />
        </div>
        <div className={styles.rightSection}>
          <ManageBooking />
          <DealCard />
          <PriceBreakup />
          <BluChipNudge />
          <MoreOptions />
          <SightseeingCard />
        </div>
      </div>
    </main>
  );
}
