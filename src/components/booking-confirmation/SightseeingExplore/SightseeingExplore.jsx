import Image from "next/image";
import styles from "./SightseeingExplore.module.scss";

const cards = [
  {
    id: 1,
    location: "New Delhi",
    reviews: 124,
    title: "Taj Mahal & Agra Private Day Tour from Delhi with 5* Lunch",
    price: "₹2950",
  },
  {
    id: 2,
    location: "New Delhi",
    reviews: 124,
    title: "Taj Mahal & Agra Private Day Tour from Delhi with 5* Lunch",
    price: "₹2950",
  },
  {
    id: 3,
    location: "New Delhi",
    reviews: 124,
    title: "Taj Mahal & Agra Private Day Tour from Delhi with 5* Lunch",
    price: "₹2950",
  },
];

export default function SightseeingExplore() {
  return (
    <section className={styles.outer}>
      <div className={styles.header}>
        <div className={styles.textGroup}>
          <p className={styles.sectionTitle}>
            Explore sightseeing for your Delhi stay
          </p>
          <p className={styles.subtitle}>
            Get 20% off on booking with CODE: HOTELDEAL
          </p>
        </div>
        <div className={styles.navButtons}>
          <button type="button" className={styles.navBtn} aria-label="Previous">
            <ChevronLeftIcon />
          </button>
          <button type="button" className={styles.navBtn} aria-label="Next">
            <ChevronRightFilledIcon />
          </button>
        </div>
      </div>

      <div className={styles.cardsRow}>
        {cards.map((card) => (
          <div key={card.id} className={styles.card}>
            <div className={styles.imageWrap}>
              <div className={styles.imageInner}>
                <Image
                  src="/assets/booking-confirmation/sightseeing-dest-bg.jpg"
                  alt={card.title}
                  fill
                  className={styles.destImage}
                  sizes="233px"
                />
                <div className={styles.gradientOverlay} />
                <div className={styles.imageInfo}>
                  <div className={styles.locationRow}>
                    <LocationPinIcon />
                    <span className={styles.locationText}>{card.location}</span>
                  </div>
                  <div className={styles.ratingRow}>
                    <div className={styles.stars}>
                      <StarFilledIcon />
                      <StarFilledIcon />
                      <StarFilledIcon />
                      <StarFilledIcon />
                      <StarHalfIcon />
                    </div>
                    <span className={styles.reviewCount}>{card.reviews}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.cardInfo}>
              <p className={styles.cardTitle}>{card.title}</p>
              <div className={styles.divider} />
              <div className={styles.cardBottom}>
                <span className={styles.priceText}>
                  starts at&nbsp;{card.price}
                </span>
                <button type="button" className={styles.bookBtn}>
                  Book
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button type="button" className={styles.exploreBtn}>
        Explore Sightseeing
      </button>
    </section>
  );
}

function ChevronLeftIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M15 18l-6-6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRightFilledIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="currentColor" fillOpacity="0.15" />
      <path
        d="M9 18l6-6-6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationPinIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path
        d="M6 1a3.5 3.5 0 0 0-3.5 3.5C2.5 7.125 6 10.5 6 10.5S9.5 7.125 9.5 4.5A3.5 3.5 0 0 0 6 1zm0 4.75a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
        fill="currentColor"
      />
    </svg>
  );
}

function StarFilledIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path
        d="M6 1l1.545 3.13L11 4.635l-2.5 2.435.59 3.43L6 8.77l-3.09 1.73.59-3.43L1 4.635l3.455-.505L6 1z"
        fill="#FFBD12"
      />
    </svg>
  );
}

function StarHalfIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path
        d="M6 1l1.545 3.13L11 4.635l-2.5 2.435.59 3.43L6 8.77V1z"
        fill="#FFBD12"
      />
      <path
        d="M6 1L4.455 4.13 1 4.635l2.5 2.435-.59 3.43L6 8.77V1z"
        fill="#FFBD1240"
      />
    </svg>
  );
}
