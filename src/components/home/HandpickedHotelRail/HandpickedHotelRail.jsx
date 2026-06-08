"use client";

import { useId, useRef } from "react";
import Image from "next/image";
import styles from "./HandpickedHotelRail.module.scss";

export default function HandpickedHotelRail({ handpickedHotels = {} }) {
  const { sectionTitle = "", prevAriaLabel = "Previous", nextAriaLabel = "Next", hotels = [] } = handpickedHotels;
  const headingId = useId();
  const railRef = useRef(null);

  const scroll = (dir) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector("[data-card]");
    const cardWidth = card ? card.offsetWidth : 276;
    rail.scrollBy({ left: dir * (cardWidth + 16), behavior: "smooth" });
  };

  return (
    <section className={styles.section} aria-labelledby={headingId}>
      <div className={styles.header}>
        <h2 id={headingId} className={styles.heading}>
          {sectionTitle}
        </h2>
        <div className={styles.navArrows}>
          <button
            type="button"
            className={styles.arrowBtn}
            onClick={() => scroll(-1)}
            aria-label={prevAriaLabel}
          >
            <ChevronLeftIcon />
          </button>
          <button
            type="button"
            className={styles.arrowBtn}
            onClick={() => scroll(1)}
            aria-label={nextAriaLabel}
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>

      <div className={styles.rail} ref={railRef}>
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </section>
  );
}

function HotelCard({ hotel }) {
  const { hotelName, hotelStars, rating, reviewCount, priceLabel, price, imageSrc, imageAlt } = hotel;

  return (
    <article className={styles.card} data-card>
      <div className={styles.imageWrap}>
        {imageSrc && (
          <Image
            className={styles.hotelImage}
            src={imageSrc}
            alt={imageAlt || ""}
            fill
            sizes="(max-width: 768px) 220px, 276px"
          />
        )}
        <div className={styles.ratingBadge}>
          <span className={styles.ratingScore}>{rating}</span>
          <span className={styles.ratingReviews}>({reviewCount})</span>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.hotelInfo}>
          <p className={styles.hotelName}>{hotelName}</p>
          <div
            className={styles.stars}
            role="img"
            aria-label={`${hotelStars} star hotel`}
          >
            {Array.from({ length: 5 }, (_, i) => (
              <StarIcon key={i} active={i < hotelStars} />
            ))}
          </div>
        </div>
        <span className={styles.divider} aria-hidden="true" />
        <div className={styles.priceBlock}>
          <span className={styles.priceLabel}>{priceLabel}</span>
          <span className={styles.price}>{price}</span>
        </div>
      </div>
    </article>
  );
}

function StarIcon({ active }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      aria-hidden="true"
      className={active ? styles.starActive : styles.starInactive}
    >
      <path
        d="M6 1l1.236 2.504 2.764.402-2 1.95.472 2.752L6 7.25 3.528 8.608 4 5.856 2 3.906l2.764-.402L6 1z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M15 18l-6-6 6-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9 18l6-6-6-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
