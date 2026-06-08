import styles from "./RecentSearches.module.scss";

const defaultSearches = [
  {
    title: "Mumbai India",
    subtitle: "07 - 08 May 2025, 2 Guest",
  },
  {
    title: "Mumbai India",
    subtitle: "07 - 08 May 2025, 2 Guest",
  },
  {
    title: "Mumbai India",
    subtitle: "07 - 08 May 2025, 2 Guest",
  },
];

export default function RecentSearches({ searches = defaultSearches, recentSearchContent }) {
  const indigoArrow = recentSearchContent?.iconList?.indigoArrow;

  return (
    <section className={styles.recentSearches} aria-label="Recent searches">
      <h2 className={styles.heading}>{recentSearchContent?.recentSearches}</h2>

      <div className={styles.cards}>
        <button className={styles.bookingCard} type="button">
          <div className={styles.bookingCopy}>
            <span className={styles.cardTitle}>{recentSearchContent?.myBookings}</span>
            <span className={`${styles.cardSubtitle} ${styles.mwebSubtitle}`}>
              {recentSearchContent?.findYourStayLabel}
            </span>
            <span className={`${styles.cardSubtitle} ${styles.desktopSubtitle}`}>
              {recentSearchContent?.manageHotelLabel}
            </span>
          </div>
          <span className={styles.bookingIcon} aria-hidden="true">
            <img src={indigoArrow?.src} alt={indigoArrow?.alt || ""} width={40} height={40} />
          </span>
        </button>

        {searches.map((search, index) => (
          <button className={styles.searchCard} type="button" key={`${search.title}-${index}`}>
            <LocationIcon />
            <span className={styles.searchCopy}>
              <span className={styles.cardTitle}>{search.title}</span>
              <span className={styles.cardSubtitle}>{search.subtitle}</span>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

function LocationIcon() {
  return (
    <svg className={styles.locationIcon} viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      <path
        d="M10 1.75a6.25 6.25 0 0 0-6.25 6.25c0 4.69 6.25 10.25 6.25 10.25s6.25-5.56 6.25-10.25A6.25 6.25 0 0 0 10 1.75Zm0 8.55a2.35 2.35 0 1 1 0-4.7 2.35 2.35 0 0 1 0 4.7Z"
        fill="currentColor"
      />
    </svg>
  );
}
