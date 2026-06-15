'use client';

import { useState } from 'react';
import styles from "./FindBooking.module.scss";
import data from "@/data/my-bookings.json";

const { findBooking, findBookingMweb } = data;

export default function FindBooking({ isMweb = false }) {
  const { sectionLabel, title, fields, ctaLabel } = isMweb ? findBookingMweb : findBooking;

  const [values, setValues] = useState({});
  const bothFilled = isMweb && fields.every((f) => values[f.id]?.trim());

  if (isMweb) {
    return (
      <div className={styles.mwebWrapper}>
        <div className={styles.mwebHeader}>
          <span className={styles.mwebSectionLabel}>{sectionLabel}</span>
          <h2 className={styles.mwebHeading}>
            <span className={styles.mwebHeadingPrefix}>{title.prefix}</span>
            <span className={styles.mwebHeadingAccent}>{title.accent}</span>
          </h2>
        </div>

        <div className={`${styles.mwebCard} ${bothFilled ? styles.mwebCardFilled : ''}`}>
          <div className={styles.mwebFields}>
            {fields.map((field) => (
              <div key={field.id} className={styles.mwebInputRow}>
                <input
                  className={styles.mwebInput}
                  type={field.type}
                  placeholder={field.placeholder}
                  aria-label={field.placeholder}
                  value={values[field.id] || ''}
                  onChange={(e) =>
                    setValues((prev) => ({ ...prev, [field.id]: e.target.value }))
                  }
                />
              </div>
            ))}
          </div>

          <button
            className={`${styles.mwebCta} ${bothFilled ? styles.mwebCtaFilled : ''}`}
            type="button"
          >
            <span className={`${styles.mwebCtaLabel} ${bothFilled ? styles.mwebCtaLabelFilled : ''}`}>
              {ctaLabel}
            </span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.sectionLabel}>{sectionLabel}</span>
          <h2 className={styles.heading}>
            <span className={styles.headingPrefix}>{title.prefix}</span>
            <span className={styles.headingAccent}>{title.accent}</span>
          </h2>
        </div>

        <div className={styles.fields}>
          {fields.map((field) => (
            <div key={field.id} className={styles.inputRow}>
              <input
                className={styles.input}
                type={field.type}
                placeholder={field.placeholder}
                aria-label={field.placeholder}
              />
            </div>
          ))}
        </div>
      </div>

      <button className={styles.cta} type="button">
        <span className={styles.ctaLabel}>{ctaLabel}</span>
      </button>
    </article>
  );
}
