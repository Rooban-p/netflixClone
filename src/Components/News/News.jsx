import React from 'react'
import Movie1 from '../Movie/Movie1';
import "./News.css"
import img3 from '../../Assets/movie_img/img3.webp';
import img4 from '../../Assets/movie_img/img4.webp';
import img5 from '../../Assets/movie_img/img5.webp';
import img6 from '../../Assets/movie_img/img6.webp';
import img7 from '../../Assets/movie_img/img7.webp';
import img8 from '../../Assets/movie_img/img8.webp';
import img9 from '../../Assets/movie_img/img9.webp';
import img10 from '../../Assets/movie_img/img10.webp';
import Video1 from "../../Assets/SampleVideos/sample.mp4"
import 'swiper/less/navigation';
import 'swiper/less/pagination';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const News = () => {
  return (
    <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={3}
    slidesPerView={4} 
    navigation
    // pagination={{ clickable: true }}
    // scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
    <SwiperSlide>
     
    <Movie1 handleCloseClick="close1" item="item1" img={img3} video={Video1}  match="98%" year="2024" season="1 Season" hd="HD" ua="U/A 16+" type="mature themes, substances, tobacco use, violence"
     today="#1 in TV Shows Today" movie=" S1:E1 Mallikajaan-The Queen of Heeramandi" 
     content="As Mallikajaan reigns over her courtesans, rebellion grows on the streets. Alamzeb has her first brush with love. Wali shares key information with Bibbo."
       cast="Cast:Manisha Korila, SonikshaSinha, Aditi Rao  Hydari,more" 
      genres="Genres:Romantic TV Dramas, Political TV Shows, TV Dramas"
       abt="This Show is:Emotional,Romantic"
       main="main1" main_img="main_img1" movie_img="movie_img1'"
       video_div="video_div1" clse="close" click_main="click_main1" videoo="video1" play="play1" 
       cont_main="cont_main1" video_cont="video_cont1" main_match="main_match1" matchh="match1" hdd="hd"
       main_ua="main_ua" uaa="ua" episode1="episode1" castt="cast"/>

    </SwiperSlide>
    <SwiperSlide>
     
     <Movie1 handleCloseClick="close2"   item="item2"  img={img4} video={Video1}  match="98%" year="2024" season="1 Season" hd="HD" ua="U/A 16+" type="mature themes, substances, tobacco use, violence"
      today="#1 in TV Shows Today" movie=" S1:E1 Mallikajaan-The Queen of Heeramandi" 
      content="As Mallikajaan reigns over her courtesans, rebellion grows on the streets. Alamzeb has her first brush with love. Wali shares key information with Bibbo."
      cast="Cast:Manisha Korila, SonikshaSinha, Aditi Rao  Hydari,more" 
       genres="Genres:Romantic TV Dramas, Political TV Shows, TV Dramas"
        abt="This Show is:Emotional,Romantic"
        main="main2" main_img="main_img2" movie_img="movie_img2'"
        video_div="video_div2" clse="closee2" click_main="click_main2" videoo="video2" play="play1" 
        cont_main="cont_main2" video_cont="video_cont2" main_match="main_match2" matchh="match2" hdd="hd2"
        main_ua="main_ua2" uaa="ua2" episode1="episode2" castt="cast2"/>
 
     </SwiperSlide>
     <SwiperSlide>
     
     <Movie1 handleCloseClick="close3"  item="item3" img={img5} video={Video1}  match="98%" year="2024" season="1 Season" hd="HD" ua="U/A 16+" type="mature themes, substances, tobacco use, violence"
      today="#1 in TV Shows Today" movie=" S1:E1 Mallikajaan-The Queen of Heeramandi" 
      content="As Mallikajaan reigns over her courtesans, rebellion grows on the streets. Alamzeb has her first brush with love. Wali shares key information with Bibbo."
      cast="Cast:Manisha Korila, SonikshaSinha, Aditi Rao  Hydari,more" 
       genres="Genres:Romantic TV Dramas, Political TV Shows, TV Dramas"
        abt="This Show is:Emotional,Romantic"
        main="main1" main_img="main_img1" movie_img="movie_img1'"
        video_div="video_div1" clse="close" click_main="click_main1" videoo="video1" play="play1" 
        cont_main="cont_main1" video_cont="video_cont1" main_match="main_match1" matchh="match1" hdd="hd"
        main_ua="main_ua" uaa="ua" episode1="episode1" castt="cast"/>

        
 
     </SwiperSlide>
     <SwiperSlide>
     
     <Movie1 handleCloseClick="close3"  item="item4" img={img5} video={Video1}  match="98%" year="2024" season="1 Season" hd="HD" ua="U/A 16+" type="mature themes, substances, tobacco use, violence"
      today="#1 in TV Shows Today" movie=" S1:E1 Mallikajaan-The Queen of Heeramandi" 
      content="As Mallikajaan reigns over her courtesans, rebellion grows on the streets. Alamzeb has her first brush with love. Wali shares key information with Bibbo."
      cast="Cast:Manisha Korila, SonikshaSinha, Aditi Rao  Hydari,more" 
       genres="Genres:Romantic TV Dramas, Political TV Shows, TV Dramas"
        abt="This Show is:Emotional,Romantic"
        main="main1" main_img="main_img1" movie_img="movie_img1'"
        video_div="video_div1" clse="close" click_main="click_main1" videoo="video1" play="play1" 
        cont_main="cont_main1" video_cont="video_cont1" main_match="main_match1" matchh="match1" hdd="hd"
        main_ua="main_ua" uaa="ua" episode1="episode1" castt="cast"/>

        
 
     </SwiperSlide>
     <SwiperSlide>
     
     <Movie1 handleCloseClick="close3"  item="item4" img={img5} video={Video1}  match="98%" year="2024" season="1 Season" hd="HD" ua="U/A 16+" type="mature themes, substances, tobacco use, violence"
      today="#1 in TV Shows Today" movie=" S1:E1 Mallikajaan-The Queen of Heeramandi" 
      content="As Mallikajaan reigns over her courtesans, rebellion grows on the streets. Alamzeb has her first brush with love. Wali shares key information with Bibbo."
      cast="Cast:Manisha Korila, SonikshaSinha, Aditi Rao  Hydari,more" 
       genres="Genres:Romantic TV Dramas, Political TV Shows, TV Dramas"
        abt="This Show is:Emotional,Romantic"
        main="main1" main_img="main_img1" movie_img="movie_img1'"
        video_div="video_div1" clse="close" click_main="click_main1" videoo="video1" play="play1" 
        cont_main="cont_main1" video_cont="video_cont1" main_match="main_match1" matchh="match1" hdd="hd"
        main_ua="main_ua" uaa="ua" episode1="episode1" castt="cast"/>

        
 
     </SwiperSlide>

    
    
    
  </Swiper>
  )
}

export default News