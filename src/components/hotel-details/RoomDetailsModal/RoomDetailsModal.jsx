'use client';
import { useState } from 'react';
import styles from './RoomDetailsModal.module.scss';

// ── Icons ──────────────────────────────────────────────────────────────────────

const CloseIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M1.5 1.5l11 11M12.5 1.5l-11 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const ChevronLeftIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M12 15l-5-5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M8 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const AreaIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <rect x="1" y="1" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1.2"/>
    <rect x="3" y="3" width="3" height="3" fill="currentColor" opacity="0.5"/>
    <rect x="8" y="3" width="3" height="3" fill="currentColor" opacity="0.5"/>
    <rect x="3" y="8" width="3" height="3" fill="currentColor" opacity="0.5"/>
    <rect x="8" y="8" width="3" height="3" fill="currentColor" opacity="0.5"/>
  </svg>
);

const GuestIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <circle cx="7" cy="4.5" r="2.5" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M2 12c0-2.76 2.24-5 5-5s5 2.24 5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

const BedIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <rect x="1" y="7" width="12" height="5" rx="1" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M1 12V5a1 1 0 011-1h10a1 1 0 011 1v7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <rect x="3" y="6" width="3.5" height="2.5" rx="0.5" stroke="currentColor" strokeWidth="1"/>
    <rect x="7.5" y="6" width="3.5" height="2.5" rx="0.5" stroke="currentColor" strokeWidth="1"/>
  </svg>
);

const TvIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <rect x="1" y="2" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M4.5 12h5M7 10v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

const NewspaperIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <rect x="1" y="2" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="1.2"/>
    <rect x="10" y="4" width="3" height="8" rx="0.5" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M3 5h6M3 7h6M3 9h4" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
  </svg>
);

const TelephoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2 2h3l1.5 3.5L5 7a8 8 0 004 4l1.5-1.5L14 11v3c-6.6 0-12-5.4-12-12z" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DiningIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <rect x="2" y="8" width="10" height="4" rx="1" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M5 8V5M7 8V3M9 8V5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

const CancelledIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <circle cx="7" cy="7" r="5.5" stroke="#c3272e" strokeWidth="1.2"/>
    <path d="M4.5 4.5l5 5M9.5 4.5l-5 5" stroke="#c3272e" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

const FreeCancelIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <circle cx="7" cy="7" r="5.5" stroke="#7FD287" strokeWidth="1.2"/>
    <path d="M4.5 7l2 2 3-3" stroke="#7FD287" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MayApplyIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <circle cx="7" cy="7" r="5.5" stroke="#A97D0E" strokeWidth="1.2"/>
    <path d="M7 4v3.5M7 9.5v1" stroke="#A97D0E" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

const NoMealIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M7 2v10M4 3.5c0 1.93 1.34 3.5 3 3.5s3-1.57 3-3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M2 2l10 10" stroke="#c3272e" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

const MealIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M7 2v10M4 3.5c0 1.93 1.34 3.5 3 3.5s3-1.57 3-3.5" stroke="#7FD287" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

// ── Data ───────────────────────────────────────────────────────────────────────

const ROOM_AMENITIES = [
  { id: 'tv',        label: 'Flat-screen TV', Icon: TvIcon },
  { id: 'newspaper', label: 'Newspaper',      Icon: NewspaperIcon },
  { id: 'telephone', label: 'Telephone',      Icon: TelephoneIcon },
  { id: 'dining',    label: 'Dining table',   Icon: DiningIcon },
];

const RATE_PLANS = [
  {
    id: 'room-only',
    name: 'Room only',
    cancellation: { Icon: CancelledIcon, text: 'Non-Refundable' },
    meal: { Icon: NoMealIcon, text: 'No Meals Included' },
    price: '₹ 15,000',
    originalPrice: '₹ 14,000',
    earn: '+ Earn 6,200 IndiGo BluChips',
  },
  {
    id: 'with-breakfast',
    name: 'Room with breakfast',
    cancellation: { Icon: FreeCancelIcon, text: 'Fully Refundable by 20th Sep, 23 6pm' },
    meal: { Icon: MealIcon, text: 'Free Meals Included' },
    price: '₹ 15,000',
    originalPrice: '₹ 14,000',
    earn: '+ Earn 6,200 IndiGo BluChips',
  },
  {
    id: 'all-meals',
    name: 'Room with breakfast + Lunch dinner',
    cancellation: { Icon: MayApplyIcon, text: 'Cancellation may apply' },
    meal: { Icon: MealIcon, text: 'Free Meals Included' },
    price: '₹ 15,000',
    originalPrice: '₹ 14,000',
    earn: '+ Earn 6,200 IndiGo BluChips',
  },
];

// ── Component ──────────────────────────────────────────────────────────────────

const RoomDetailsModal = ({ room, onClose }) => {
  const [selectedPlan, setSelectedPlan] = useState(0);
  const [imgIndex, setImgIndex] = useState(0);
  const totalImages = 3;

  const prevImg = () => setImgIndex((i) => (i - 1 + totalImages) % totalImages);
  const nextImg = () => setImgIndex((i) => (i + 1) % totalImages);

  return (
    <div className={styles.backdrop} onClick={onClose} role="dialog" aria-modal="true" aria-label="Room details">
      <div className={styles.panel} onClick={(e) => e.stopPropagation()}>

        {/* ── Header ── */}
        <div className={styles.header}>
          <div className={styles.headerRow}>
            <span className={styles.roomLabel}>{room?.type ?? 'Classic Room'}</span>
            <button className={styles.closeBtn} type="button" onClick={onClose} aria-label="Close">
              <CloseIcon />
            </button>
          </div>
          <div className={styles.headerDivider} aria-hidden="true" />
        </div>

        {/* ── Body ── */}
        <div className={styles.body}>

          {/* Room Image Carousel */}
          <div className={styles.imageSection}>
            <div className={styles.imageWrapper} aria-label={`Room photo ${imgIndex + 1} of ${totalImages}`}>
              <div className={styles.imagePlaceholder} />
            </div>
            <button className={`${styles.arrowBtn} ${styles.arrowPrev}`} type="button" onClick={prevImg} aria-label="Previous photo">
              <ChevronLeftIcon />
            </button>
            <button className={`${styles.arrowBtn} ${styles.arrowNext}`} type="button" onClick={nextImg} aria-label="Next photo">
              <ChevronRightIcon />
            </button>
          </div>

          {/* Room Info */}
          <div className={styles.roomInfo}>

            {/* Room Details + Amenities */}
            <div className={styles.detailsAmenities}>

              {/* Room Details */}
              <div className={styles.detailsSection}>
                <h3 className={styles.sectionHeading}>Room Details</h3>
                <div className={styles.detailsRow}>
                  <div className={styles.detailItem}>
                    <span className={styles.detailIcon}><AreaIcon /></span>
                    <span className={styles.detailText}>44 m² /473 sq. ft.</span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.detailIcon}><GuestIcon /></span>
                    <span className={styles.detailText}>Maximum 3 Guest</span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.detailIcon}><BedIcon /></span>
                    <span className={styles.detailText}>Double Bed</span>
                  </div>
                </div>
              </div>

              {/* Room Amenities */}
              <div className={styles.amenitiesSection}>
                <h3 className={styles.sectionHeading}>Room Amenities</h3>
                <div className={styles.amenitiesRow}>
                  {ROOM_AMENITIES.map(({ id, label, Icon }) => (
                    <div key={id} className={styles.amenityItem}>
                      <span className={styles.amenityIcon}><Icon /></span>
                      <span className={styles.detailText}>{label}</span>
                    </div>
                  ))}
                </div>
                <div className={styles.amenitiesRow}>
                  {ROOM_AMENITIES.map(({ id, label, Icon }) => (
                    <div key={`${id}-2`} className={styles.amenityItem}>
                      <span className={styles.amenityIcon}><Icon /></span>
                      <span className={styles.detailText}>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Rate Plans */}
            <div className={styles.ratePlansSection}>
              <h3 className={styles.sectionHeading}>Rate Plan</h3>
              <div className={styles.planCards}>
                {RATE_PLANS.map((plan, idx) => (
                  <div
                    key={plan.id}
                    className={`${styles.planCard} ${idx === selectedPlan ? styles.planCardActive : ''}`}
                    onClick={() => setSelectedPlan(idx)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setSelectedPlan(idx)}
                    aria-pressed={idx === selectedPlan}
                  >
                    <div className={styles.planContent}>
                      <div className={styles.planTop}>
                        <span className={styles.planName}>{plan.name}</span>

                        <div className={styles.planFeatures}>
                          <div className={styles.featureRow}>
                            <span className={styles.featureIcon}><plan.cancellation.Icon /></span>
                            <span className={styles.featureText}>{plan.cancellation.text}</span>
                          </div>
                          <div className={styles.featureRow}>
                            <span className={styles.featureIcon}><plan.meal.Icon /></span>
                            <span className={styles.featureText}>{plan.meal.text}</span>
                          </div>
                        </div>

                        <div className={styles.planDivider} aria-hidden="true" />

                        <div className={styles.pricing}>
                          <span className={styles.priceMain}>{plan.price}</span>
                          <div className={styles.priceRow}>
                            <span className={styles.priceStrike}>{plan.originalPrice}</span>
                            <span className={styles.perNight}>/night</span>
                          </div>
                          <div className={styles.earnChip}>{plan.earn}</div>
                        </div>
                      </div>

                      <button
                        className={styles.reserveBtn}
                        type="button"
                        onClick={(e) => { e.stopPropagation(); setSelectedPlan(idx); }}
                      >
                        Reserve Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailsModal;
