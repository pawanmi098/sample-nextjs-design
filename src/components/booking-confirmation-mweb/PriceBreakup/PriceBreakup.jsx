import styles from "./PriceBreakup.module.scss";

const priceData = {
  roomName: "1 x classic suite",
  basePrice: "(Base Price)",
  roomPrice: "₹ 5,000",
  discountLabel: "Discount Applied 6EHotels200",
  discountPrice: "- ₹ 200",
  priceAfterDiscountLabel: "Price After Discount",
  priceAfterDiscountValue: "₹ 4200.00",
  taxesLabel: "Hotel Taxes & Fees",
  taxesPrice: "₹ 200.00",
  totalAmount: "Total Amount",
  totalAmountValue: "₹ 5,400",
  payNowLabel: "Pay Now",
  payNowValue: "₹ 0.00",
  payNowNote:
    "*Pay in local currency at the hotel; Exchange rate at that time will apply for int'l bookings",
  payAtPropertyLabel: "Pay at property",
  payAtPropertyValue: "₹ 5400.00",
  bluchipsNote:
    "You could have earned 3000 IndiGo BluChips with this booking.",
};

export default function PriceBreakupMweb() {
  return (
    <article className={styles.card}>
      <h2 className={styles.title}>Bill Details</h2>

      <div className={styles.cardBody}>
        <section className={styles.priceItems}>
          <div className={styles.row}>
            <div className={styles.roomLabelGroup}>
              <span className={styles.labelBold}>{priceData.roomName}</span>
              <span className={styles.labelRegular}>{priceData.basePrice}</span>
            </div>
            <span className={styles.valueBold}>{priceData.roomPrice}</span>
          </div>
          <div className={styles.divider} role="separator" />
          <div className={styles.row}>
            <span className={styles.labelDiscount}>{priceData.discountLabel}</span>
            <span className={styles.valueDiscount}>{priceData.discountPrice}</span>
          </div>
          <div className={styles.divider} role="separator" />
          <div className={styles.row}>
            <span className={styles.labelSm}>{priceData.priceAfterDiscountLabel}</span>
            <span className={styles.valueSm}>{priceData.priceAfterDiscountValue}</span>
          </div>
          <div className={styles.row}>
            <span className={styles.labelSm}>{priceData.taxesLabel}</span>
            <span className={styles.valueSm}>{priceData.taxesPrice}</span>
          </div>
        </section>

        <section className={styles.totalSection}>
          <div className={styles.divider} role="separator" />
          <div className={styles.totalRow}>
            <span className={styles.totalLabel}>{priceData.totalAmount}</span>
            <span className={styles.totalValue}>{priceData.totalAmountValue}</span>
          </div>
          <div className={styles.paySection}>
            <div className={styles.payNowGroup}>
              <div className={styles.row}>
                <span className={styles.labelSm}>{priceData.payNowLabel}</span>
                <span className={styles.valueSm}>{priceData.payNowValue}</span>
              </div>
              <p className={styles.note}>{priceData.payNowNote}</p>
            </div>
            <div className={styles.row}>
              <span className={styles.labelSm}>{priceData.payAtPropertyLabel}</span>
              <span className={styles.valueSm}>{priceData.payAtPropertyValue}</span>
            </div>
          </div>
          <div className={styles.divider} role="separator" />
          <div className={styles.infoRow}>
            <InfoIcon className={styles.infoIcon} />
            <span className={styles.infoText}>{priceData.bluchipsNote}</span>
          </div>
        </section>
      </div>
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
