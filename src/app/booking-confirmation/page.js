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
import ActionBar from "@/components/booking-confirmation-mweb/ActionBar/ActionBar";
import BookingConfirmationMweb from "@/components/booking-confirmation-mweb/BookingConfirmation/BookingConfirmation";
import CabBannerMweb from "@/components/booking-confirmation-mweb/CabBanner/CabBanner";
import PaymentDetailsMweb from "@/components/booking-confirmation-mweb/PaymentDetails/PaymentDetails";
import BookingDetailsMweb from "@/components/booking-confirmation-mweb/BookingDetails/BookingDetails";
import CancellationPolicyMweb from "@/components/booking-confirmation-mweb/CancellationPolicy/CancellationPolicy";
import SearchFlightBannerMweb from "@/components/booking-confirmation-mweb/SearchFlightBanner/SearchFlightBanner";
import ImportantInfoMweb from "@/components/booking-confirmation-mweb/ImportantInfo/ImportantInfo";
import SightseeingExploreMweb from "@/components/booking-confirmation-mweb/SightseeingExplore/SightseeingExplore";
import PriceBreakupMweb from "@/components/booking-confirmation-mweb/PriceBreakup/PriceBreakup";
import SpecialOffersMweb from "@/components/booking-confirmation-mweb/SpecialOffers/SpecialOffers";
import GstDetailsMweb from "@/components/booking-confirmation-mweb/GstDetails/GstDetails";
import MoreOptionsMweb from "@/components/booking-confirmation-mweb/MoreOptions/MoreOptions";
import styles from "./page.module.scss";

export default function BookingConfirmationPage() {
  return (
    <main className={styles.pageContainer}>
      {/* web layout */}
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

      {/* mweb layout */}
      <div className={styles.mwebSection}>
        <ActionBar />
        <BookingConfirmationMweb />
        <div className={styles.mwebCabBanner}>
          <CabBannerMweb />
        </div>
        <div className={styles.mwebPaymentDetails}>
          <PaymentDetailsMweb />
        </div>
        <div className={styles.mwebBookingDetails}>
          <BookingDetailsMweb />
        </div>
         <BluChipNudge />
         <div className={styles.mwebCancellationPolicy}>
           <CancellationPolicyMweb />
         </div>
         <div className={styles.mwebSearchFlightBanner}>
           <SearchFlightBannerMweb />
         </div>
         <div className={styles.mwebImportantInfo}>
           <ImportantInfoMweb />
         </div>
         <div className={styles.mwebSightseeingExplore}>
           <SightseeingExploreMweb />
         </div>
         <div className={styles.mwebPriceBreakup}>
           <PriceBreakupMweb />
         </div>
         <div className={styles.mwebSpecialOffers}>
           <SpecialOffersMweb />
         </div>
         <div className={styles.mwebGstDetails}>
           <GstDetailsMweb />
         </div>
         <div className={styles.mwebDealCard}>
           <DealCard />
         </div>
         <div className={styles.mwebMoreOptions}>
           <MoreOptionsMweb />
         </div>
         <div className={styles.mwebSightseeingCard}>
           <SightseeingCard />
         </div>
      </div>
    </main>
  );
}
