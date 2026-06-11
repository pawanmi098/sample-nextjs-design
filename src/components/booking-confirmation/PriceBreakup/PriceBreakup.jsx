import styles from "./PriceBreakup.module.scss";

const priceData = {
  roomName: "1 x classic suite",
  roomPrice: "₹ 5,000.00",
  extraBed: "+1 Extra bed(s)",
  extraBedPrice: "₹ 5,438",
  taxesLabel: "Hotel Taxes & Fees",
  taxesPrice: "₹ 600.00",
  totalRoomRateLabel: "Total room rate including taxes",
  totalRoomRatePrice: "₹ 5,600.00",
  discountLabel: "Discount Applied 6EHotels200",
  discountPrice: "- ₹ 200.00",
  totalAmount: "Total Amount",
  totalAmountValue: "₹ 5,400.00",
  payAtHotelLabel: "Pay at hotel",
  payAtHotelValue: "*₹ 5,400.00",
  payLocalLabel: "Pay at hotel (In Local currency)",
  payLocalValue: "THB 2000",
  payLocalNote:
    "*Pay in local currency at the hotel; Exchange rate at that time will apply",
  bluchipsNote:
    "You could have earned 3000 IndiGo bluchips with this booking.",
};

export default function PriceBreakup() {
  const {
    roomName,
    roomPrice,
    extraBed,
    extraBedPrice,
    taxesLabel,
    taxesPrice,
    totalRoomRateLabel,
    totalRoomRatePrice,
    discountLabel,
    discountPrice,
    totalAmount,
    totalAmountValue,
    payAtHotelLabel,
    payAtHotelValue,
    payLocalLabel,
    payLocalValue,
    payLocalNote,
    bluchipsNote,
  } = priceData;

  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <div className={styles.titleRow}>
          <h2 className={styles.title}>Price Breakup</h2>
        </div>
        <div className={styles.divider} role="separator" />
      </header>

      <section className={styles.priceItems}>
        <div className={styles.itemGroup}>
          <div className={styles.row}>
            <span className={styles.labelBold}>{roomName}</span>
            <span className={styles.valueBold}>{roomPrice}</span>
          </div>
          <div className={styles.row}>
            <span className={styles.labelRegular}>{extraBed}</span>
            <span className={styles.valueRegular}>{extraBedPrice}</span>
          </div>
        </div>
        <div className={styles.row}>
          <span className={styles.labelRegular}>{taxesLabel}</span>
          <span className={styles.valueRegular}>{taxesPrice}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.labelRegular}>{totalRoomRateLabel}</span>
          <span className={styles.valueRegular}>{totalRoomRatePrice}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.labelDiscount}>{discountLabel}</span>
          <span className={styles.valueDiscount}>{discountPrice}</span>
        </div>
      </section>

      <section className={styles.totalSection}>
        <div className={styles.divider} role="separator" />
        <div className={styles.totalRow}>
          <span className={styles.totalLabel}>{totalAmount}</span>
          <span className={styles.totalValue}>{totalAmountValue}</span>
        </div>
        <div className={styles.divider} role="separator" />
      </section>

      <section className={styles.payAtHotel}>
        <div className={styles.row}>
          <span className={styles.labelRegular}>{payAtHotelLabel}</span>
          <span className={styles.valueRegular}>{payAtHotelValue}</span>
        </div>
        <div className={styles.payLocalGroup}>
          <div className={styles.row}>
            <span className={styles.labelSm}>{payLocalLabel}</span>
            <span className={styles.valueRegular}>{payLocalValue}</span>
          </div>
          <p className={styles.note}>{payLocalNote}</p>
        </div>
      </section>

      <section className={styles.infoSection}>
        <div className={styles.divider} role="separator" />
        <div className={styles.infoRow}>
          <InfoIcon className={styles.infoIcon} />
          <span className={styles.infoText}>{bluchipsNote}</span>
        </div>
      </section>
    </article>
  );
}

function InfoIcon({ className }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M10 9v5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="10" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}
