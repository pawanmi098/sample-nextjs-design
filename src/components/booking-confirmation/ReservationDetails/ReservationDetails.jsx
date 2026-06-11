import styles from "./ReservationDetails.module.scss";

const reservation = {
  bookingStatus: "Confirmed",
  bookingId: "RDBS78755340000780",
  hotelConfirmationId: "RDBS78755340000780",
  checkIn: { date: "24 Mar 2023,", time: "11:30 am" },
  checkOut: { date: "26 Mar 2023,", time: "11:30 am" },
  nights: "2 Nights",
  roomType: "Classic suite",
  noOfRooms: "1 Room(s)",
  inclusions: [
    { icon: "bed", label: "Double Bed or 2 Single Beds" },
    { icon: "cancel", label: "Non-refundable" },
    { icon: "no-meal", label: "No meals included" },
  ],
  noOfGuests: "2 Adults + 1 Child",
  guestName: "Aditya pratap singh",
  mobileNo: "+91 8851147236",
  emailId: "adityaps1315@gmail.com",
};

export default function ReservationDetails() {
  const {
    bookingStatus,
    bookingId,
    hotelConfirmationId,
    checkIn,
    checkOut,
    nights,
    roomType,
    noOfRooms,
    inclusions,
    noOfGuests,
    guestName,
    mobileNo,
    emailId,
  } = reservation;

  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>Reservation Details</h2>
      </div>

      <div className={styles.divider} />

      <div className={styles.body}>
        <div className={styles.statusGroup}>
          <div className={styles.statusItem}>
            <span className={styles.labelLg}>Booking Status</span>
            <span className={styles.confirmedBadge}>{bookingStatus}</span>
          </div>
          <div className={styles.idRow}>
            <div className={styles.idItem}>
              <span className={styles.labelLg}>Booking ID</span>
              <span className={styles.valueBold}>{bookingId}</span>
            </div>
            <div className={styles.idItem}>
              <span className={styles.labelLg}>Hotel Confirmation ID</span>
              <span className={styles.valueBold}>{hotelConfirmationId}</span>
            </div>
          </div>
        </div>

        <div className={styles.dividerThin} />

        <div className={styles.payNotice}>
          <div className={styles.payRow}>
            <InfoIcon className={styles.infoIcon} />
            <span className={styles.payText}>This is a Pay at property booking</span>
          </div>
          <p className={styles.payDisclaimer}>
            *Pay in local currency at the hotel; Exchange rate at that time will apply for international cards.
          </p>
        </div>

        <div className={styles.datesGroup}>
          <div className={styles.datesRow}>
            <div className={styles.dateItem}>
              <span className={styles.label}>Check In Date and Time</span>
              <div className={styles.dateValue}>
                <span className={styles.valueBold}>{checkIn.date}</span>
                <span className={styles.valueBold}>{checkIn.time}</span>
              </div>
            </div>
            <div className={styles.dateItem}>
              <span className={styles.label}>Check Out Date and Time</span>
              <div className={styles.dateValue}>
                <span className={styles.valueBold}>{checkOut.date}</span>
                <span className={styles.valueBold}>{checkOut.time}</span>
              </div>
            </div>
            <div className={styles.dateItem}>
              <span className={styles.label}>No. of Nights</span>
              <span className={styles.valueBold}>{nights}</span>
            </div>
          </div>
          <div className={styles.dividerThin} />
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionHeading}>Room Details</h3>
          <div className={styles.roomRow}>
            <div className={styles.roomItem}>
              <span className={styles.label}>Room Type</span>
              <span className={styles.valueRegular}>{roomType}</span>
            </div>
            <div className={styles.roomItem}>
              <span className={styles.label}>No. of Rooms</span>
              <span className={styles.valueRegular}>{noOfRooms}</span>
            </div>
          </div>
          <div className={styles.inclusionsGroup}>
            <span className={styles.label}>Inclusions</span>
            <div className={styles.inclusionList}>
              {inclusions.map(({ icon, label }) => (
                <div key={label} className={styles.inclusionItem}>
                  <InclusionIcon type={icon} />
                  <span className={styles.inclusionLabel}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.dividerThin} />

        <div className={styles.section}>
          <h3 className={styles.sectionHeading}>Guest Details</h3>
          <div className={styles.guestItem}>
            <span className={styles.label}>No. of Guests</span>
            <span className={styles.valueRegular}>{noOfGuests}</span>
          </div>
          <div className={styles.guestRow}>
            <div className={styles.guestItem}>
              <span className={styles.label}>Guest Full Name</span>
              <span className={styles.valueRegular}>{guestName}</span>
            </div>
            <div className={styles.guestItem}>
              <span className={styles.label}>Mobile No.</span>
              <span className={styles.valueRegular}>{mobileNo}</span>
            </div>
            <div className={styles.guestItem}>
              <span className={styles.label}>Email ID</span>
              <span className={styles.valueRegular}>{emailId}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function InfoIcon({ className }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M8 7v4.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="8" cy="5" r="0.8" fill="currentColor" />
    </svg>
  );
}

function InclusionIcon({ type }) {
  if (type === "bed") {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={styles.inclusionIcon}
      >
        <rect width="24" height="24" fill="white" rx="2" />
        <path
          d="M4 17v-5h16v5M4 17v2M20 17v2M4 12V7"
          stroke="#D7D7D7"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <rect x="7" y="9" width="4" height="3" rx="0.5" stroke="#D7D7D7" strokeWidth="1.2" />
        <rect x="13" y="9" width="4" height="3" rx="0.5" stroke="#D7D7D7" strokeWidth="1.2" />
      </svg>
    );
  }
  if (type === "cancel") {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={styles.inclusionIcon}
      >
        <rect width="24" height="24" fill="white" rx="2" />
        <circle cx="12" cy="12" r="6" stroke="#D7D7D7" strokeWidth="1.2" />
        <path
          d="M9.5 9.5l5 5M14.5 9.5l-5 5"
          stroke="#D7D7D7"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <circle cx="18" cy="6" r="2.5" fill="#F24822" />
      </svg>
    );
  }
  if (type === "no-meal") {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={styles.inclusionIcon}
      >
        <rect width="24" height="24" fill="white" rx="2" />
        <path
          d="M9 5v4a2 2 0 002 2h0a2 2 0 002-2V5M11 11v8M16 5v14"
          stroke="#D7D7D7"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <circle cx="18" cy="6" r="2.5" fill="#FC5555" />
      </svg>
    );
  }
  return null;
}
