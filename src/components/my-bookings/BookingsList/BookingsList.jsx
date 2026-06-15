"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./BookingsList.module.scss";
import data from "@/data/my-bookings.json";

const { bookingsList } = data;

function MwebCard({ booking }) {
  const badgeClass =
    booking.status === "Cancelled"
      ? styles.mwebBadgeCancelled
      : styles.mwebBadgeConfirmed;

  return (
    <div className={styles.mwebCard}>
      <div className={styles.mwebCardTop}>
        <div className={styles.mwebHeaderRow}>
          <div className={styles.mwebLocation}>
            <Image
              src="/assets/my-bookings/icon-location.svg"
              alt=""
              width={16}
              height={16}
            />
            <span className={styles.mwebLocationText}>{booking.location}</span>
          </div>
          <div className={`${styles.mwebBadge} ${badgeClass}`}>
            <span className={styles.mwebBadgeDot} />
            <span className={styles.mwebBadgeLabel}>{booking.status}</span>
          </div>
        </div>

        <div className={styles.mwebHotelRow}>
          <div className={styles.mwebThumbnail}>
            <Image
              src={booking.hotelImage}
              alt={booking.hotelImageAlt}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={styles.mwebHotelInfo}>
            <p className={styles.mwebHotelName}>{booking.hotelName}</p>
            <div className={styles.mwebGuestRow}>
              <Image
                src="/assets/my-bookings/icon-passenger.svg"
                alt=""
                width={16}
                height={16}
              />
              <span className={styles.mwebGuestText}>
                {booking.guestDetails.summary}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.mwebDatesSection}>
        <div className={styles.mwebDateCol}>
          <span className={styles.mwebDateLabel}>Check - In</span>
          <span className={styles.mwebDateValue}>{booking.checkIn.date}</span>
          <span className={styles.mwebDateValue}>{booking.checkIn.time}</span>
        </div>
        <div className={styles.mwebDateDivider} />
        <div className={styles.mwebDateCol}>
          <span className={styles.mwebDateLabel}>Check - Out</span>
          <span className={styles.mwebDateValue}>{booking.checkOut.date}</span>
          <span className={styles.mwebDateValue}>{booking.checkOut.time}</span>
        </div>
      </div>

      {booking.loyaltyBanner && (
        <div className={styles.mwebLoyaltyBanner}>
          <span className={styles.mwebLoyaltyText}>{booking.loyaltyBanner}</span>
        </div>
      )}

      <div className={styles.mwebFooter}>
        <div className={styles.mwebBookingIdSection}>
          <div className={styles.mwebHorizDivider} />
          <span className={styles.mwebBookingId}>
            Booking ID - {booking.bookingId}
          </span>
          {booking.refundNotice && (
            <span className={styles.mwebRefundNotice}>{booking.refundNotice}</span>
          )}
        </div>
        <div className={styles.mwebActions}>
          <div className={styles.mwebIconGroup}>
            <button className={styles.mwebIconBtn} aria-label="Download booking">
              <Image
                src="/assets/my-bookings/icon-download.svg"
                alt=""
                width={28}
                height={28}
              />
            </button>
            <button className={styles.mwebIconBtn} aria-label="Share booking">
              <Image
                src="/assets/my-bookings/icon-share.svg"
                alt=""
                width={28}
                height={28}
              />
            </button>
          </div>
          <button className={styles.mwebCta}>View Booking</button>
        </div>
      </div>
    </div>
  );
}

export default function BookingsList({ isMweb = false }) {
  const [activeTab, setActiveTab] = useState(
    bookingsList.tabs.find((t) => t.active)?.id || "all"
  );

  if (isMweb) {
    return (
      <div className={styles.mwebList}>
        {bookingsList.bookings.map((booking) => (
          <MwebCard key={booking.id} booking={booking} />
        ))}
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        {bookingsList.tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className={styles.list}>
        {bookingsList.bookings.map((booking) => (
          <div key={booking.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.hotelRow}>
                <div className={styles.hotelImageWrapper}>
                  <Image
                    src={booking.hotelImage}
                    alt={booking.hotelImageAlt}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className={styles.hotelInfo}>
                  <p className={styles.hotelName}>{booking.hotelName}</p>
                  <div className={styles.metaRow}>
                    <div className={styles.locationGroup}>
                      <Image
                        src="/assets/my-bookings/icon-location.svg"
                        alt=""
                        width={16}
                        height={16}
                      />
                      <span className={styles.locationText}>{booking.location}</span>
                    </div>
                    <span className={styles.separator}>|</span>
                    <span className={styles.bookingId}>
                      Booking ID - {booking.bookingId}
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.cardActions}>
                <span className={styles.status}>{booking.status}</span>
                <div className={styles.iconRow}>
                  <button className={styles.iconBtn} aria-label="Download booking">
                    <Image
                      src="/assets/my-bookings/icon-download.svg"
                      alt=""
                      width={24}
                      height={24}
                    />
                  </button>
                  <button className={styles.iconBtn} aria-label="Share booking">
                    <Image
                      src="/assets/my-bookings/icon-share.svg"
                      alt=""
                      width={24}
                      height={24}
                    />
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.divider} />

            <div className={styles.cardFooter}>
              <div className={styles.tripDetails}>
                <div className={styles.detailGroup}>
                  <span className={styles.detailLabel}>Check - In</span>
                  <div className={styles.detailValues}>
                    <span className={styles.detailDate}>{booking.checkIn.date}</span>
                    <span className={styles.detailTime}>{booking.checkIn.time}</span>
                  </div>
                </div>
                <div className={styles.tripDivider} />
                <div className={styles.detailGroup}>
                  <span className={styles.detailLabel}>Check - Out</span>
                  <div className={styles.detailValues}>
                    <span className={styles.detailDate}>{booking.checkOut.date}</span>
                    <span className={styles.detailTime}>{booking.checkOut.time}</span>
                  </div>
                </div>
                <div className={styles.tripDivider} />
                <div className={styles.detailGroup}>
                  <span className={styles.detailLabel}>Guest Details</span>
                  <div className={styles.detailValues}>
                    <span className={styles.detailDate}>{booking.guestDetails.guests}</span>
                    <span className={styles.detailTime}>{booking.guestDetails.rooms}</span>
                  </div>
                </div>
              </div>
              <button className={styles.cta}>{booking.ctaLabel}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
