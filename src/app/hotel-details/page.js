import HotelNavBar from '@/components/hotel-details/HotelNavBar/HotelNavBar';
import HotelGalleryToggle from '@/components/hotel-details/HotelPhotosViewer/HotelGalleryToggle';
import AllAmenitiesToggle from '@/components/hotel-details/AllAmenitiesModal/AllAmenitiesToggle';
import RoomDetailsToggle from '@/components/hotel-details/RoomDetailsModal/RoomDetailsToggle';
import HotelMapView from '@/components/hotel-details/HotelMapView/HotelMapView';
import styles from './page.module.scss';

const HOTEL = {
  name: 'St Laurn Koregaon Park',
  location: 'Koregaon Park, Pune, Maharashtra, India',
  rating: 4.3,
  reviewCount: 1248,
  stars: 4,
};

const StarIcon = ({ filled }) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M7 1l1.545 3.13L12 4.635l-2.5 2.435.59 3.43L7 8.885l-3.09 1.615.59-3.43L2 4.635l3.455-.505L7 1z"
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth="1"
      strokeLinejoin="round"
    />
  </svg>
);

const LocationIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M7 1.5a3.5 3.5 0 00-3.5 3.5c0 2.188 2.5 5.656 3.5 6.916C8 10.656 10.5 7.188 10.5 5A3.5 3.5 0 007 1.5zm0 5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill="currentColor"/>
  </svg>
);

export default function HotelDetailsPage() {
  return (
    <main className={styles.page}>
      {/* Hotel Hero */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.hotelMeta}>
            <h1 className={styles.hotelName}>{HOTEL.name}</h1>
            <div className={styles.stars} aria-label={`${HOTEL.stars} star hotel`}>
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i} className={i < HOTEL.stars ? styles.starGold : styles.starEmpty}>
                  <StarIcon filled={i < HOTEL.stars} />
                </span>
              ))}
            </div>
            <div className={styles.locationRow}>
              <span className={styles.locationIcon}><LocationIcon /></span>
              <span className={styles.locationText}>{HOTEL.location}</span>
            </div>
            <div className={styles.ratingRow}>
              <span className={styles.ratingBadge}>{HOTEL.rating}</span>
              <span className={styles.ratingLabel}>Very Good</span>
              <span className={styles.reviewCount}>({HOTEL.reviewCount.toLocaleString()} reviews)</span>
            </div>
            <div className={styles.galleryTriggerRow}>
              <HotelGalleryToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Nav Bar */}
      <HotelNavBar />

      {/* Quick test button — opens Room Details modal */}
      <div style={{ padding: '16px 24px' }}>
        <RoomDetailsToggle room={{ type: 'Classic Room', size: '44 m²', bed: 'Double Bed', price: 15000 }} />
      </div>

      {/* Page Sections */}
      <div className={styles.sections}>

        <section id="overview" className={styles.section} aria-labelledby="overview-heading">
          <h2 id="overview-heading" className={styles.sectionHeading}>Overview</h2>
          <p className={styles.sectionBody}>
            St Laurn Koregaon Park is a contemporary 4-star hotel nestled in the vibrant heart of Pune's Koregaon Park neighbourhood.
            The property offers a harmonious blend of modern comforts and warm hospitality, making it an ideal choice for both leisure
            and business travellers. Surrounded by upscale dining, boutiques, and cultural hubs, guests enjoy easy access to the city's
            most sought-after experiences.
          </p>
          <div className={styles.amenityGrid}>
            {['Free Wi-Fi', 'Swimming Pool', 'Fitness Centre', 'Restaurant', 'Bar / Lounge', '24-hr Front Desk', 'Airport Shuttle', 'Parking'].map(a => (
              <span key={a} className={styles.amenityChip}>{a}</span>
            ))}
          </div>
          <div className={styles.amenitiesAction}>
            <AllAmenitiesToggle hotelName={HOTEL.name} />
          </div>
        </section>

        <section id="rooms" className={styles.section} aria-labelledby="rooms-heading">
          <h2 id="rooms-heading" className={styles.sectionHeading}>Rooms</h2>
          <div className={styles.roomGrid}>
            {[
              { type: 'Deluxe Room', size: '28 m²', bed: 'King Bed', price: 5499 },
              { type: 'Superior Room', size: '32 m²', bed: 'Twin Beds', price: 5999 },
              { type: 'Suite', size: '48 m²', bed: 'King Bed', price: 8999 },
              { type: 'Premium Suite', size: '62 m²', bed: 'King Bed', price: 12499 },
            ].map((room) => (
              <article key={room.type} className={styles.roomCard}>
                <div className={styles.roomImagePlaceholder} aria-hidden="true" />
                <div className={styles.roomInfo}>
                  <h3 className={styles.roomType}>{room.type}</h3>
                  <ul className={styles.roomMeta}>
                    <li>{room.size}</li>
                    <li>{room.bed}</li>
                  </ul>
                  <div className={styles.roomFooter}>
                    <div className={styles.roomPrice}>
                      <span className={styles.currency}>₹</span>
                      <span className={styles.amount}>{room.price.toLocaleString()}</span>
                      <span className={styles.perNight}>/night</span>
                    </div>
                    <RoomDetailsToggle room={room} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="location" className={styles.section} aria-labelledby="location-heading">
          <h2 id="location-heading" className={styles.sectionHeading}>Location</h2>
          <HotelMapView />
        </section>

        <section id="reviews" className={styles.section} aria-labelledby="reviews-heading">
          <h2 id="reviews-heading" className={styles.sectionHeading}>Reviews</h2>
          <div className={styles.ratingOverview}>
            <div className={styles.ratingBig}>{HOTEL.rating}</div>
            <div className={styles.ratingBreakdown}>
              <p className={styles.ratingLabel}>Very Good</p>
              <p className={styles.reviewCount}>{HOTEL.reviewCount.toLocaleString()} verified reviews</p>
            </div>
          </div>
          <div className={styles.reviewList}>
            {[
              { author: 'Rahul M.', rating: 5, text: 'Fantastic stay! The rooms were spotless and the staff incredibly helpful. Will definitely return.' },
              { author: 'Priya S.', rating: 4, text: 'Great location in Koregaon Park. Pool was clean and the breakfast spread was excellent.' },
              { author: 'Ankit V.', rating: 4, text: 'Good value for money. Check-in was seamless and the bed was super comfortable.' },
            ].map((r) => (
              <article key={r.author} className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                  <span className={styles.reviewAuthor}>{r.author}</span>
                  <span className={styles.reviewRating}>{r.rating} / 5</span>
                </div>
                <p className={styles.reviewText}>{r.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="policies" className={styles.section} aria-labelledby="policies-heading">
          <h2 id="policies-heading" className={styles.sectionHeading}>Policies</h2>
          <dl className={styles.policyList}>
            {[
              { term: 'Check-in', detail: 'From 2:00 PM' },
              { term: 'Check-out', detail: 'Until 12:00 PM (Noon)' },
              { term: 'Cancellation', detail: 'Free cancellation up to 24 hours before check-in. After that, one night charge applies.' },
              { term: 'Children', detail: 'Children of all ages are welcome. Children under 5 years stay free in existing beds.' },
              { term: 'Pets', detail: 'Pets are not allowed.' },
              { term: 'Payment', detail: 'Credit card, debit card, and net banking accepted. Cash accepted at the property.' },
            ].map(({ term, detail }) => (
              <div key={term} className={styles.policyRow}>
                <dt className={styles.policyTerm}>{term}</dt>
                <dd className={styles.policyDetail}>{detail}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="about" className={styles.section} aria-labelledby="about-heading">
          <h2 id="about-heading" className={styles.sectionHeading}>About</h2>
          <p className={styles.sectionBody}>
            Established in 2012, St Laurn Hotels & Resorts has grown to become one of Pune's most trusted hospitality brands.
            The Koregaon Park property reflects the group's commitment to delivering exceptional guest experiences through a blend
            of contemporary design and personalised service.
          </p>
          <p className={styles.sectionBody}>
            The hotel features 96 well-appointed rooms and suites, a rooftop pool, an all-day dining restaurant, a speciality
            restaurant, and a fully equipped business centre. Its central location makes it the preferred choice for corporate
            travellers visiting Pune's IT hubs as well as leisure guests exploring the city's culture and nightlife.
          </p>
          <dl className={styles.policyList}>
            {[
              { term: 'Property type', detail: 'Hotel' },
              { term: 'Total rooms', detail: '96' },
              { term: 'Languages spoken', detail: 'English, Hindi, Marathi' },
              { term: 'Year opened', detail: '2012' },
            ].map(({ term, detail }) => (
              <div key={term} className={styles.policyRow}>
                <dt className={styles.policyTerm}>{term}</dt>
                <dd className={styles.policyDetail}>{detail}</dd>
              </div>
            ))}
          </dl>
        </section>

      </div>
    </main>
  );
}
