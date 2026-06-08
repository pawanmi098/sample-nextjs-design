"use client";

import Image from "next/image";

import styles from "./WishlistBookings.module.scss";

export default function WishlistBookings({ ariaLabel, items = [] }) {
  const handleWishlistBookingsAction = (itemKey) => {
    // Hook point for future routing/analytics integration.
    console.log("WishlistBookings action:", itemKey);
  };

  return (
    <section className={styles.wishlistBookings} aria-label={ariaLabel}>
      {items?.map((item) => (
        <button
          key={item?.key}
          type="button"
          className={`${styles.actionPill}${item?.mwebHidden ? ` ${styles.mwebHidden}` : ""}`}
          onClick={() => handleWishlistBookingsAction(item?.key)}
          aria-label={item?.label}
        >
          <span className={styles.actionLabel} aria-hidden="true">
            {item?.label}
          </span>
          {item?.icon?.src ? (
            <span className={styles.iconWrap}>
              <Image
                src={item?.icon?.src}
                alt={item?.icon?.alt || ""}
                width={24}
                height={24}
              />
            </span>
          ) : null}
        </button>
      ))}
    </section>
  );
}
