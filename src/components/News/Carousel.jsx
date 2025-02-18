import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardNews from './CardNews';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Carousel = ({ news }) => {
  return (
    <Swiper
      className='w-[90vw] lg:w-5xl 2xl:w-7xl'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      navigation={true}
      pagination={{ clickable: true }}
      breakpoints={{
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {news.map((article, index) => (
        <SwiperSlide key={index}>
          <CardNews
            title={article.title}
            link={article.link}
            pubDate={article.pubDate}
            image={article.image}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
