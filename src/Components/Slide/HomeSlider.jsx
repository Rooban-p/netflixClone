import React from 'react';
import './HomeSlider.css';
import img1 from '../../Assets/movie_img/img1.jpg';
import img2 from '../../Assets/movie_img/img2.webp';
import img3 from '../../Assets/movie_img/img3.webp';
import img4 from '../../Assets/movie_img/img4.webp';
import img5 from '../../Assets/movie_img/img5.webp';
import img6 from '../../Assets/movie_img/img6.webp';
import img7 from '../../Assets/movie_img/img7.webp';
import img8 from '../../Assets/movie_img/img8.webp';
import img9 from '../../Assets/movie_img/img9.webp';
import img10 from '../../Assets/movie_img/img10.webp';
import img11 from '../../Assets/movie_img/img11.webp';
import img12 from '../../Assets/movie_img/img12.webp';
import img13 from '../../Assets/movie_img/img13.jpg';
import img14 from '../../Assets/movie_img/img14.webp';
import img15 from '../../Assets/movie_img/img15.webp';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slide = () => {
  
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15];

  return (
    <div className='body'>
      <h3 className='movie_content'>Continue Watching for Kishore</h3>
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
