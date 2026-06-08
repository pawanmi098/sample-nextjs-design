"use client";

import styles from "./InfoBanner.module.scss";

const InfoBanner = ({ children }) => {
  return (
    <div className={styles.infoBanner}>
      <div className={styles.title} dangerouslySetInnerHTML={{ __html: children || "" }}></div>
    </div>
  );
};

export default InfoBanner;