import Image from "next/image";
import styles from "./BookingDetails.module.scss";

export default function BookingDetailsMweb() {
  return (
    <div className={styles.card}>
      <div className={styles.heading}>
        <div className={styles.headingRow}>
          <span className={styles.headingLabel}>Booking Details</span>
          <span className={styles.chip}>Confirmed</span>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.dateSection}>
          <div className={styles.dateRow}>
            <div className={styles.dateGroup}>
              <span className={styles.dateLabel}>Check In Date &amp; Time</span>
              <div className={styles.dateValue}>
                <span className={styles.dateText}>22 Mar 2023,</span>
                <span className={styles.dateText}>11:30 AM</span>
              </div>
            </div>
            <div className={styles.dateGroup}>
              <span className={styles.dateLabel}>Check Out Date &amp; Time</span>
              <div className={styles.dateValue}>
                <span className={styles.dateText}>23 Mar 2023,</span>
                <span className={styles.dateText}>10:30 AM</span>
              </div>
            </div>
          </div>

          <div className={styles.stayInfo}>
            <div className={styles.stayInfoItem}>
              <Image
                src="/assets/booking-confirmation-mweb/icon-night.svg"
                alt="nights"
                width={20}
                height={20}
              />
              <span className={styles.infoText}>2 Nights</span>
            </div>
            <div className={styles.stayInfoItem}>
              <Image
                src="/assets/booking-confirmation-mweb/icon-passenger.svg"
                alt="guests"
                width={20}
                height={20}
              />
              <span className={styles.infoText}>4 Adults + 2 Child</span>
            </div>
          </div>
        </div>

        <div className={styles.payNotice}>
          <div className={styles.payBanner}>
            <Image
              src="/assets/booking-confirmation-mweb/icon-info.svg"
              alt="info"
              width={16}
              height={16}
            />
            <span className={styles.payBannerText}>
              This is a Pay at property booking
            </span>
          </div>
          <span className={styles.payNote}>
            *Pay in local currency at the hotel; Exchange rate at that time will
            apply for international bookings
          </span>
        </div>

        <div className={styles.footer}>
          <div className={styles.divider} />
          <button className={styles.showMore}>
            <span className={styles.showMoreText}>Show More</span>
            <Image
              src="/assets/booking-confirmation-mweb/icon-arrow-down.svg"
              alt="expand"
              width={16}
              height={16}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
