import styles from "./SpecialOffers.module.scss";

const GRADIENT = "linear-gradient(to bottom, transparent 52%, #000000 72%)";

const offers = [
  {
    id: 1,
    variant: "dark",
    panelBg: "blue",
    image: "/assets/booking-confirmation-mweb/special-offers/img-d42845.png",
    chipLabel: "New",
    offerText: "Text",
    offerTitle: "Get 5% Off",
    offerSubtitle: "Hand baggage",
    brandName: "Mokobara",
  },
  {
    id: 2,
    variant: "dark",
    panelBg: "lightBlue",
    image: "/assets/booking-confirmation-mweb/special-offers/img-e7cc43.png",
    chipLabel: "Label",
    offerText: "Text",
    offerTitle: "Get 20% off",
    offerSubtitle: "Luggage baggage",
    brandName: "Mokobara",
  },
  {
    id: 3,
    variant: "light",
    panelBg: "blue",
    image: "/assets/booking-confirmation-mweb/special-offers/img-d42845.png",
    chipLabel: "New",
    offerText: "Text",
    offerTitle: "Get 20% off",
    offerSubtitle: "upto ₹200",
    brandName: "Retail",
  },
  {
    id: 4,
    variant: "light",
    panelBg: "lightBlue",
    image: "/assets/booking-confirmation-mweb/special-offers/img-847400.png",
    chipLabel: "Label",
    offerText: "Text",
    offerTitle: "Get 20% off",
    offerSubtitle: "upto ₹200",
    brandName: "Gift voucher",
  },
];

export default function SpecialOffersMweb() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Check out our special offers</h2>

      <div className={styles.cardList}>
        {offers.map((offer) => (
          <div
            key={offer.id}
            className={`${styles.card} ${offer.variant === "dark" ? styles.cardDark : styles.cardLight}`}
          >
            <div
              className={`${styles.cardPanel} ${offer.variant === "dark" ? styles.cardPanelDark : styles.cardPanelLight} ${offer.panelBg === "blue" ? styles.panelBlue : styles.panelLightBlue}`}
              style={{ backgroundImage: `${GRADIENT}, url(${offer.image})` }}
            >
              <span
                className={`${styles.chip} ${offer.variant === "dark" ? styles.chipDark : styles.chipLight}`}
              >
                {offer.chipLabel}
              </span>

              <div className={styles.textBlock}>
                <span
                  className={`${styles.offerText} ${offer.panelBg === "blue" ? styles.offerTextLight : styles.offerTextDark}`}
                >
                  {offer.offerText}
                </span>
                <span
                  className={`${styles.offerTitle} ${offer.variant === "dark" ? styles.offerTitleSm : styles.offerTitleLg}`}
                >
                  {offer.offerTitle}
                </span>
                <span className={styles.offerSubtitle}>{offer.offerSubtitle}</span>
              </div>
            </div>

            <span
              className={`${styles.brandName} ${offer.variant === "dark" ? styles.brandDark : styles.brandLight}`}
            >
              {offer.brandName}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
