import Image from "next/image";
import styles from "./ManageBooking.module.scss";
import data from "@/data/my-bookings.json";

const { manageBooking } = data;

export default function ManageBooking() {
  const { heading, accordionItems } = manageBooking;

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>{heading}</h2>
      <div className={styles.accordionList}>
        {accordionItems.map((item) => (
          <div key={item.id} className={styles.accordionItem}>
            <div className={styles.accordionRow}>
              <div className={styles.iconCircle}>
                <Image
                  src="/assets/my-bookings/icon-change-flight.svg"
                  alt={item.iconAlt}
                  width={20}
                  height={20}
                />
              </div>
              <div className={styles.textContent}>
                <div className={styles.titleRow}>
                  <span className={styles.itemTitle}>{item.title}</span>
                  <Image
                    src="/assets/my-bookings/icon-accordion-right.svg"
                    alt="expand"
                    width={16}
                    height={16}
                  />
                </div>
                <span className={styles.description}>{item.description}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
