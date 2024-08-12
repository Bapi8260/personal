
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './project.css';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const Project=()=>{
    useEffect(()=>{
      Aos.init({
        duration: 800,
      });
     },[])
  return (
    <div className='pro'>
      <span  data-aos="zoom-out-left">Projects....</span>
      <div className='inpro'  data-aos="zoom-out-right">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        pagination={{clickable:true,}}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className='myswiper'
        
      >
          <SwiperSlide><div className='con'><img src='	https://uicookies.com/wp-content/uploads/2020/04/mecare-hospital-website-template.png'></img><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatum inventore sequi omnis doloribus ab harum natus possimus ducimus velit!</p></div></SwiperSlide>
        <SwiperSlide><div className='con'><img src=' 	https://colorlib.com/wp/wp-content/uploads/sites/2/ezy-ecommerce-website-template.jpg' ></img><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatum inventore sequi omnis doloribus ab harum natus possimus ducimus velit!</p></div></SwiperSlide>
        <SwiperSlide><div className='con'><img src='	https://ucoztemplates.com/_sh/1/174_1.jpg'></img><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatum inventore sequi omnis doloribus ab harum natus possimus ducimus velit!</p></div></SwiperSlide>
        <SwiperSlide><div className='con'><img src='	https://uicookies.com/wp-content/uploads/2020/04/Easy.jpg'></img><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatum inventore sequi omnis doloribus ab harum natus possimus ducimus velit!</p></div></SwiperSlide>
        <SwiperSlide><div className='con'><img src='	https://vuejsexamples.com/content/images/2021/06/Simple-Quiz.jpg'></img><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatum inventore sequi omnis doloribus ab harum natus possimus ducimus velit!</p></div></SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
}
export default Project;
