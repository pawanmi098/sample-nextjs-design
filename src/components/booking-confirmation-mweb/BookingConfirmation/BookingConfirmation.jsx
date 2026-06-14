import Image from "next/image";
import styles from "./BookingConfirmation.module.scss";

const bookingData = {
  hotelName: "Hotel Fariyas Lonavla",
  imageSrc: "/assets/booking-confirmation/hotel-image.png",
  imageAlt: "Hotel Fariyas Lonavla",
  chipLabel: "25 - 28 Feb | 2 Guests | 2 Rooms",
  address: "Frichley Hills, Tungarli, Lonavala, Maharashtra.",
  contact: "080 6565 66567,  080 6565 66567",
};

export default function BookingConfirmationMweb() {
  const { hotelName, imageSrc, imageAlt, chipLabel, address, contact } = bookingData;

  return (
    <article className={styles.card}>
      <div className={styles.imageSection}>
        <Image
          className={styles.hotelImage}
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="100vw"
        />
        <div className={styles.overlay}>
          <div className={styles.confirmedBadge}>
            <CheckCircleIcon />
            <span className={styles.confirmedText}>Booking Confirmed</span>
          </div>
          <div className={styles.hotelMeta}>
            <span className={styles.hotelName}>{hotelName}</span>
            <div className={styles.chip}>
              <span className={styles.chipLabel}>{chipLabel}</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.infoPanel}>
        <div className={styles.addressGroup}>
          <p className={styles.address}>{address}</p>
          <a href="#map" className={styles.seeOnMap} aria-label="See hotel on map">
            <LocationIcon />
            <span>See On Map</span>
          </a>
        </div>
        <div className={styles.contactRow}>
          <ContactIcon />
          <span className={styles.contact}>{contact}</span>
        </div>
      </div>
    </article>
  );
}

function CheckCircleIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
      className={styles.checkIcon}
    >
      <circle cx="14" cy="14" r="14" fill="#7FD287" />
      <path
        d="M7 15l5 5 9-11"
        stroke="#25304B"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={styles.locationIcon}
    >
      <path
        d="M10 1.667A5.833 5.833 0 0 0 4.167 7.5c0 4.375 5.833 10.833 5.833 10.833S15.833 11.875 15.833 7.5A5.833 5.833 0 0 0 10 1.667zm0 7.916a2.083 2.083 0 1 1 0-4.166 2.083 2.083 0 0 1 0 4.166z"
        fill="currentColor"
      />
    </svg>
  );
}

function ContactIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={styles.contactIcon}
    >
      <path
        d="M14.65 11.35l-2.25-2.25a1.05 1.05 0 0 0-1.485 0l-1.05 1.05a10.77 10.77 0 0 1-3.765-3.765l1.05-1.05a1.05 1.05 0 0 0 0-1.485L4.9 1.6a1.05 1.05 0 0 0-1.485 0l-.742.742A3.65 3.65 0 0 0 1.65 5.16C2.6 9.475 6.525 13.4 10.84 14.35a3.65 3.65 0 0 0 3.218-1.023l.742-.742a1.05 1.05 0 0 0-.15-1.235z"
        fill="currentColor"
      />
    </svg>
  );
}
