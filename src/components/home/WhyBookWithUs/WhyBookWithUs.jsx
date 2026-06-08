"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import styles from "./WhyBookWithUs.module.scss";

export default function WhyBookWithUs({ bookWithUs }) {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className={styles.section} aria-labelledby="why-book-heading">
      <h2 id="why-book-heading" className={styles.heading} dangerouslySetInnerHTML={{ __html: bookWithUs?.bookWithUsTitle || "" }}>
      </h2>

      <div className={styles.card}>
        <div className={styles.desktopBenefits} role="list">
          {bookWithUs?.benefits.map((benefit, index) => (
            <Fragment key={benefit.id}>
              <BenefitItem benefit={benefit} />
              {index < bookWithUs?.benefits.length - 1 ? (
                <span className={styles.divider} aria-hidden="true" />
              ) : null}
            </Fragment>
          ))}
        </div>

        <div className={styles.mobileCarousel}>
          <div className={styles.mobileViewport}>
            <div
              className={styles.mobileTrack}
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {bookWithUs?.benefits.map((benefit) => (
                <div key={benefit.id} className={styles.mobileSlide}>
                  <BenefitItem benefit={benefit} compact />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.stepper} role="tablist" aria-label="Why book benefits">
            {bookWithUs?.benefits.map((benefit, index) => (
              <button
                key={benefit.id}
                type="button"
                role="tab"
                className={index === activeSlide ? styles.stepActive : styles.step}
                aria-selected={index === activeSlide}
                aria-label={`${benefit.title}, slide ${index + 1} of ${bookWithUs?.benefits.length}`}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitItem({ benefit, compact = false }) {
  return (
    <article className={compact ? styles.benefitCompact : styles.benefit}>
      <div className={styles.iconWrap}>
        <Image
          className={styles.icon}
          src={benefit.iconSrc}
          alt=""
          width={45}
          height={45}
          aria-hidden="true"
        />
      </div>
      <div className={styles.copy}>
        <h3 className={styles.title}>{benefit.title}</h3>
        <p className={styles.description}>{benefit.description}</p>
      </div>
    </article>
  );
}
