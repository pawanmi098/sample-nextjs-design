import WishlistBookings from "@/components/home/WishlistBookings/WishlistBookings";
import HotelSearchPanel from "@/components/home/HotelSearchPanel/HotelSearchPanel";
import RecentSearches from "@/components/home/RecentSearches/RecentSearches";
import PromoCarousel from "@/components/home/PromoCarousel/PromoCarousel";
import Disclaimer from "@/components/common/Disclaimer/Disclaimer";
import WhyBookWithUs from "@/components/home/WhyBookWithUs/WhyBookWithUs";
import HandpickedHotelRail from "@/components/home/HandpickedHotelRail/HandpickedHotelRail";
import FeaturedCardRail from "@/components/common/FeaturedCardRail/FeaturedCardRail";
import TourAndBlogs from "@/components/home/TourAndBlogs/TourAndBlogs";
import homeContent from "@/data/homeContent.json";

import styles from "./page.module.scss";

export default function Home() {
  const wishlistBookingsContent =
    homeContent?.wishlistBookings;

  return (
    <main className={styles.pageContainer}>
      <div className={styles.wishlistTitle}>
        <h1 className={styles.hotelTitle}
        dangerouslySetInnerHTML={{
    __html: homeContent?.bookHotelTitle || "",
  }}>
        </h1>
        <WishlistBookings
          ariaLabel={wishlistBookingsContent?.ariaLabel}
          items={wishlistBookingsContent?.items}
        />
      </div>
       <HotelSearchPanel
          fields={homeContent?.searchHotelFields}
          searchInfoTitle={homeContent?.searchInfoTitle}
          searchFormContent={homeContent?.searchFormContent}
        />
        <RecentSearches
          recentSearchContent={homeContent?.recentSearchContent}
        />
        <PromoCarousel promoCarouselContent={homeContent?.promoCarouselContent} />
        <Disclaimer disclaimer={homeContent?.disclaimer} />
        <WhyBookWithUs bookWithUs={homeContent?.bookWithUs} />
        <div className={styles.handpickedWrap}>
          <HandpickedHotelRail handpickedHotels={homeContent?.handpickedHotels} />
        </div>
        <FeaturedCardRail featuredCardRail={homeContent?.featuredCardRail} />
        <div className={styles.tourBlogsWrap}>
          <TourAndBlogs tourAndBlogs={homeContent?.tourAndBlogs} />
        </div>
    </main>
  );
}
