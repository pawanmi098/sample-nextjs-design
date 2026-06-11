import Image from "next/image";
import styles from "./BookingConfirmation.module.scss";

const bookingData = {
  hotelName: "Fariyas Resort Lonavala",
  imageSrc: "/assets/booking-confirmation/hotel-image.png",
  imageAlt: "Fariyas Resort Lonavala",
  chipLabel: "25 - 28 Feb | 2 Guests | 2 Rooms",
  address: "Frichley Hills, Tungarli, Lonavala, Lorem Ipsum Maharashtra, 412302",
  contact: "Contact - 080 6565 66567,  080 6565 66567",
};

export default function BookingConfirmation() {
  const { hotelName, imageSrc, imageAlt, chipLabel, address, contact } = bookingData;

  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <Image
          className={styles.hotelImage}
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 262px"
        />
      </div>

      <div className={styles.infoPanel}>
        <header className={styles.header}>
          <h1 className={styles.hotelName}>{hotelName}</h1>
        </header>

        <div className={styles.body}>
          <div className={styles.topGroup}>
            <div className={styles.chip}>
              <span className={styles.chipLabel}>{chipLabel}</span>
            </div>

            <div className={styles.addressGroup}>
              <p className={styles.address}>{address}</p>
              <a href="#map" className={styles.seeOnMap} aria-label="See hotel on map">
                <LocationIcon />
                <span>See On Map</span>
              </a>
            </div>
          </div>

          <p className={styles.contact}>{contact}</p>
        </div>
      </div>
    </article>
  );
}

function LocationIcon() {
  return (
    <svg
      width="20"
      height="20"
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
