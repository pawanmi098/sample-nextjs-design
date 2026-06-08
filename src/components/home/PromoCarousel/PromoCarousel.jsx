"use client";

import { useState } from "react";
import styles from "./PromoCarousel.module.scss";

const PromoCarousel = ({ promoCarouselContent }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className={styles.carousel} aria-label="Hotel offers">
      <div className={styles.imageWrap}>
        <img
          className={styles.image}
          src={promoCarouselContent[currentIndex].imageSrc}
          alt={promoCarouselContent[currentIndex].imageAlt}
        />

        <Stepper
          currentIndex={currentIndex}
          total={promoCarouselContent.length}
          className={styles.innerStepper}
          onStepClick={setCurrentIndex}
        />
      </div>
    </section>
  );
}

const Stepper = ({
  currentIndex,
  total,
  onStepClick,
  className = "",
}) => {
  return (
    <div
      className={`${styles.stepper} ${className}`}
      aria-label="Carousel navigation"
    >
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => onStepClick(index)}
          className={
            index === currentIndex
              ? styles.activeStep
              : styles.step
          }
        />
      ))}
    </div>
  );
}

export default PromoCarousel;