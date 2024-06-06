import React from 'react';
import './HomeSlide2.css';
import img16 from '../../Assets/movie_img/img16.webp';
import img17 from '../../Assets/movie_img/img17.webp';
import img18 from '../../Assets/movie_img/img18.webp';
import img19 from '../../Assets/movie_img/img20.webp';
import img20 from '../../Assets/movie_img/img21.webp';
import img21 from '../../Assets/movie_img/img22.webp';
import img22 from '../../Assets/movie_img/img23.webp';
import img23 from '../../Assets/movie_img/img24.webp';
import img24 from '../../Assets/movie_img/img25.webp';
import img25 from '../../Assets/movie_img/img26.webp';
import img26 from '../../Assets/movie_img/img26.webp';
import img27 from '../../Assets/movie_img/img27.webp';
import img28 from '../../Assets/movie_img/img28.webp';
import img29 from '../../Assets/movie_img/img29.webp';
import img30 from '../../Assets/movie_img/img30.webp';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slide = () => {
  
  const images = [img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30];

  return (
    <div className='body2'>
      <h3 className='movie_content2'>Made in India</h3>
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
