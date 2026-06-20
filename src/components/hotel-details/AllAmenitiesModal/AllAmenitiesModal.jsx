'use client';
import styles from './AllAmenitiesModal.module.scss';

const WifiIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M2 8.5C5.2 5.3 8.4 4 12 4s6.8 1.3 10 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M5 11.5c1.9-1.9 4.3-3 7-3s5.1 1.1 7 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M8.5 14.5c1-1 2.2-1.5 3.5-1.5s2.5.5 3.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="12" cy="18" r="1.2" fill="currentColor"/>
  </svg>
);

const PoolIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M9 15V10a3 3 0 016 0v1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 16c2 0 3-1.5 5-1.5s3 1.5 5 1.5 3-1.5 5-1.5 3 1.5 5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M2 20c2 0 3-1.5 5-1.5s3 1.5 5 1.5 3-1.5 5-1.5 3 1.5 5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const FitnessIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="2" y="10" width="3" height="4" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="19" y="10" width="3" height="4" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="5" y="8" width="3" height="8" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="16" y="8" width="3" height="8" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const RestaurantIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M7 3v5a3 3 0 006 0V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="10" y1="3" x2="10" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M17 3v18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M14 3c0 0 3 2 3 6s-3 6-3 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const BarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 4h14l-5 8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="9" y1="20" x2="15" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M9 12h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const FrontDeskIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="11" r="7" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 7v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 21h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const ShuttleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="2" y="7" width="20" height="11" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M6 7V5a1 1 0 011-1h10a1 1 0 011 1v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="7" cy="20" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="17" cy="20" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="9" y1="11" x2="15" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const ParkingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M9 17V7h4a3 3 0 010 6H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MiniBarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="4" y="6" width="16" height="15" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="4" y1="13" x2="20" y2="13" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="12" y1="3" x2="12" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="10" y1="16" x2="10" y2="20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="14" y1="8" x2="14" y2="12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

const RoomServiceIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 17h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M5 17c0-3.87 3.13-7 7-7s7 3.13 7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="12" y1="3" x2="12" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="9" y1="21" x2="15" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const SpaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 20c0 0-8-5-8-11a8 8 0 0116 0c0 6-8 11-8 11z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M12 9v7M9 12h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const BriefcaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="2" y="8" width="20" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M16 8V6a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="2" y1="14" x2="22" y2="14" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const AcIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <line x1="12" y1="3" x2="12" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M5 7l7 5 7-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 17l7-5 7 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const AMENITIES = [
  { id: 'wifi',      label: 'Free Wi-Fi',       Icon: WifiIcon },
  { id: 'pool',      label: 'Swimming Pool',    Icon: PoolIcon },
  { id: 'fitness',   label: 'Fitness Centre',   Icon: FitnessIcon },
  { id: 'restaurant',label: 'Restaurant',       Icon: RestaurantIcon },
  { id: 'bar',       label: 'Bar / Lounge',     Icon: BarIcon },
  { id: 'frontdesk', label: '24-hr Front Desk', Icon: FrontDeskIcon },
  { id: 'shuttle',   label: 'Airport Shuttle',  Icon: ShuttleIcon },
  { id: 'parking',   label: 'Parking',          Icon: ParkingIcon },
  { id: 'minibar',   label: 'Mini Bar',         Icon: MiniBarIcon },
  { id: 'roomsvc',   label: 'Room Service',     Icon: RoomServiceIcon },
  { id: 'spa',       label: 'Spa',              Icon: SpaIcon },
  { id: 'business',  label: 'Business Centre',  Icon: BriefcaseIcon },
  { id: 'ac',        label: 'Air Conditioning', Icon: AcIcon },
];

const AllAmenitiesModal = ({ hotelName, onClose }) => (
  <div className={styles.backdrop} onClick={onClose} role="dialog" aria-modal="true" aria-label="All amenities">
    <div className={styles.card} onClick={(e) => e.stopPropagation()}>
      <div className={styles.header}>
        <h2 className={styles.title}>Amenities at {hotelName}</h2>
        <button className={styles.closeBtn} type="button" onClick={onClose} aria-label="Close amenities">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
      <div className={styles.divider} aria-hidden="true" />
      <ul className={styles.grid}>
        {AMENITIES.map(({ id, label, Icon }) => (
          <li key={id} className={styles.item}>
            <span className={styles.iconBox} aria-hidden="true">
              <Icon />
            </span>
            <span className={styles.label}>{label}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default AllAmenitiesModal;
