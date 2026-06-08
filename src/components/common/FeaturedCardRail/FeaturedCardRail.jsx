"use client";

import { useId } from "react";
import Image from "next/image";
import styles from "./FeaturedCardRail.module.scss";

export default function FeaturedCardRail({ featuredCardRail = {}, onItemClick }) {
  const { title = "", items = [], desktopColumns = 4 } = featuredCardRail;
  const headingId = useId();

  return (
    <section className={styles.section} aria-labelledby={headingId}>
      <h2 id={headingId} className={styles.heading}>
        {title}
      </h2>

      <div className={styles.rail} style={{ "--desktop-columns": desktopColumns }}>
        {items.map((item) => (
          <DestinationCard key={item.id} item={item} onItemClick={onItemClick} />
        ))}
      </div>
    </section>
  );
}

function DestinationCard({ item, onItemClick }) {
  const handleClick = () => {
    onItemClick?.(item);
  };

  const content = (
    <>
      <Image
        className={styles.cardImage}
        src={item.imageSrc}
        alt=""
        fill
        sizes="(max-width: 768px) 160px, 276px"
        aria-hidden="true"
      />
      <span className={styles.cardOverlay} aria-hidden="true" />
      <span className={styles.cardLabel}>{item.label}</span>
    </>
  );

  if (onItemClick) {
    return (
      <button
        type="button"
        className={styles.card}
        data-card
        onClick={handleClick}
        aria-label={item.label}
      >
        {content}
      </button>
    );
  }

  return (
    <article className={styles.card} data-card aria-label={item.label}>
      {content}
    </article>
  );
}
