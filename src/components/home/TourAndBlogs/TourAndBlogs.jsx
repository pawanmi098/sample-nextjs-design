"use client";

import { useId, useRef } from "react";
import Image from "next/image";
import styles from "./TourAndBlogs.module.scss";

export default function TourAndBlogs({ tourAndBlogs = {} }) {
  const { tours = {}, blogs = {} } = tourAndBlogs;

  return (
    <div className={styles.wrapper}>
      <ToursSection tours={tours} />
      <BlogsSection blogs={blogs} />
    </div>
  );
}

function ToursSection({ tours }) {
  const { destinations = [] } = tours;

  return (
    <section className={styles.toursSection}>
      <div className={styles.toursRail}>
        {destinations.map((dest) => (
          <TourCard key={dest.id} destination={dest} />
        ))}
      </div>
    </section>
  );
}

function TourCard({ destination }) {
  const { name, tag, imageSrc, imageAlt } = destination;

  return (
    <article className={styles.tourCard}>
      {imageSrc && (
        <Image
          className={styles.tourImage}
          src={imageSrc}
          alt={imageAlt || ""}
          fill
          sizes="(max-width: 768px) 160px, 220px"
        />
      )}
      <div className={styles.tourGradient} aria-hidden="true" />
      <div className={styles.tourTextWrap}>
        <span className={styles.tourName}>{name}</span>
        <span className={styles.tourTag}>{tag}</span>
      </div>
    </article>
  );
}

function BlogsSection({ blogs }) {
  const { sectionTitle = "", prevAriaLabel = "Previous", nextAriaLabel = "Next", articles = [] } = blogs;
  const headingId = useId();
  const railRef = useRef(null);

  const scroll = (dir) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector("[data-blog-card]");
    const cardWidth = card ? card.offsetWidth : 276;
    rail.scrollBy({ left: dir * (cardWidth + 14), behavior: "smooth" });
  };

  return (
    <section className={styles.blogsSection} aria-labelledby={headingId}>
      <div className={styles.blogsHeader}>
        <h2 id={headingId} className={styles.blogsHeading}>
          {sectionTitle}
        </h2>
        <div className={styles.blogsNavArrows}>
          <button
            type="button"
            className={styles.blogsArrowBtn}
            onClick={() => scroll(-1)}
            aria-label={prevAriaLabel}
          >
            <ChevronLeftIcon />
          </button>
          <button
            type="button"
            className={styles.blogsArrowBtn}
            onClick={() => scroll(1)}
            aria-label={nextAriaLabel}
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>

      <div className={styles.blogsRail} ref={railRef}>
        {articles.map((article) => (
          <BlogCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}

function BlogCard({ article }) {
  const { title, imageSrc, imageAlt } = article;

  return (
    <article className={styles.blogCard} data-blog-card>
      <div className={styles.blogImageWrap}>
        {imageSrc && (
          <Image
            className={styles.blogImage}
            src={imageSrc}
            alt={imageAlt || ""}
            fill
            sizes="(max-width: 768px) 200px, 276px"
          />
        )}
      </div>
      <p className={styles.blogTitle}>{title}</p>
    </article>
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
