"use client";

import { useState } from "react";
import styles from "./Disclaimer.module.scss";

export default function Disclaimer({
  disclaimer,
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className={styles.disclaimer} aria-label="Disclaimer">
      <p className={styles.poweredBy}>{disclaimer?.poweredByLabel}</p>

      <div className={styles.accordion}>
        <p className={styles.text}>
          <span
            className={expanded ? styles.bodyExpanded : styles.bodyCollapsed}
          >
            {disclaimer?.disclaimerText}
          </span>{" "}
          <button
            type="button"
            className={styles.readMore}
            onClick={() => setExpanded((open) => !open)}
            aria-expanded={expanded}
          >
            {expanded ? "Read Less" : "Read More"}
          </button>
        </p>
      </div>
    </section>
  );
}
