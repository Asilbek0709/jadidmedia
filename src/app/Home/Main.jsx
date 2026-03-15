"use client"

import { Swiper, SwiperSlide} from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation";
import "swiper/css/pagination";
import ConfInfo from "../components/ConfInfo";
import Marquee from "../components/Marquue";
import Link from "next/link";

export default function Main() {
  return(
    <>
      <section className="homePage">
        <Swiper 
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          loop={true}
          pagination={{clickable: true}}
          spaceBetween={50}
          slidesPerView={"auto"}  
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          className="heroSwiper"
        >
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/slide1.jpg')"}}>
                    <div className="overlay">
                        <Link className='hover-link' href={'/'}></Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/slide2.jpg')"}}>
                    <div className="overlay">
                        <Link className='hover-link' href={'/'}></Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/slide6.jpg')"}}>
                    <div className="overlay">
                        <Link className='hover-link' href={'/'}></Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/slide7.jpg')"}}>
                    <div className="overlay">
                        <Link className='hover-link' href={'/'}></Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/slide8.jpg')"}}>
                    <div className="overlay">
                        <Link className='hover-link' href={'/'}></Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/slide9.jpg')"}}>
                    <div className="overlay">
                        <Link className='hover-link' href={'/'}></Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/slide10.jpg')"}}>
                    <div className="overlay">
                        <Link className='hover-link' href={'/'}></Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/slide11.jpg')"}}>
                    <div className="overlay">
                        <Link className='hover-link' href={'/'}></Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/slide12.jpg')"}}>
                    <div className="overlay">
                        <Link className='hover-link' href={'/'}></Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/slide13.jpg')"}}>
                    <div className="overlay">
                        <Link className='hover-link' href={'/'}></Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/slide14.jpg')"}}>
                    <div className="overlay">
                        <Link className='hover-link' href={'/'}></Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/slide15.jpg')"}}>
                    <div className="overlay">
                        <Link className='hover-link' href={'/'}></Link>             
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
        <ConfInfo/>
        <Marquee/>
      </section>
    </>
    )
}