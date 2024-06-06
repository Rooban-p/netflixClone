import React from 'react';
import './HomeSlide3.css';
import img31 from '../../Assets/movie_img/img31.jpg';
import img32 from '../../Assets/movie_img/img32.webp';
import img33 from '../../Assets/movie_img/img33.jpg';
import img34 from '../../Assets/movie_img/img34.jpg';
import img35 from '../../Assets/movie_img/img35.webp';
import img36 from '../../Assets/movie_img/img36.jpg';
import img37 from '../../Assets/movie_img/img37.webp';
import img38 from '../../Assets/movie_img/img38.jpg';
import img39 from '../../Assets/movie_img/img39.jpg';
import img40 from '../../Assets/movie_img/img40.webp';
import img41 from '../../Assets/movie_img/img41.webp';
import img42 from '../../Assets/movie_img/img42.jpg';
import img43 from '../../Assets/movie_img/img43.webp';
import img44 from '../../Assets/movie_img/img44.jpg';
import img45 from '../../Assets/movie_img/img45.webp';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slide = () => {
  
  const images = [img31, img32, img33, img34, img35, img36, img37, img38, img39, img40, img41, img42, img43, img44, img45];

  return (
    <div className='body3'>
      <h3 className='movie_content3'>Movies & Tv Shoes Dubbed in Tamil</h3>
      <Swiper
        className="body"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={5}
        slidesPerView={5}
        navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className={`movie${index + 1}`}>
              <div className={`movie_main${index + 1}`}>
                <div className={`movie_div${index + 1}`}>
                  <img className={`movie_img${index + 1}`} src={image} alt={`Movie ${index + 1}`} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    
  );
}

export default Slide;
