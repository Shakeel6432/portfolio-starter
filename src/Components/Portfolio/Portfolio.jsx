import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import "swiper/css";
import { themeContext } from "../../Context";
import { useContext } from "react";

export default function Portfolio() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="Portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <motion.img 
            src={Sidebar} 
            alt="" 
            whileHover={{ y: -10 }} 
          />
        </SwiperSlide>
        <SwiperSlide>
          <motion.img 
            src={Ecommerce} 
            alt="" 
            whileHover={{ y: -10 }} 
          />
        </SwiperSlide>
        <SwiperSlide>
          <motion.img 
            src={MusicApp} 
            alt="" 
            whileHover={{ y: -10 }} 
          />
        </SwiperSlide>
        <SwiperSlide>
          <motion.img 
            src={HOC} 
            alt="" 
            whileHover={{ y: -10 }} 
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

