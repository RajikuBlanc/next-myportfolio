import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import MoreButton from '../../atoms/MoreButton';

SwiperCore.use([Autoplay]);

const WorksItemStyle = styled.li`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    font-size: 1.6rem;
    font-weight: bold;
    letter-spacing: 0.2em;
    margin-bottom: 1rem;
  }
  .swiper-container {
    max-width: 100%;
    margin-bottom: 2rem;
    z-index: 1;
  }
  .swiper-slide {
    height: 243px;
    border: 1px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default function WorksItem() {
  const title = 'Works';
  return (
    <WorksItemStyle>
      <h3>{title}</h3>
      {/* Swiper */}
      <div className="content">
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false
          }}
        >
          <SwiperSlide>slide1</SwiperSlide>
          <SwiperSlide>slide2</SwiperSlide>
          <SwiperSlide>slide3</SwiperSlide>
        </Swiper>
        {/* More Button */}
        <MoreButton link="/works" />
      </div>
    </WorksItemStyle>
  );
}
