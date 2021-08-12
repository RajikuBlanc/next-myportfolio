import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import MoreButton from '../atoms/MoreButton';
import Works from '../../src/data/worksdata';
import WorksItem from './WorksItem';
SwiperCore.use([Autoplay]);

export default function WorksBox() {
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
          {Works.map(work => {
            return (
              <SwiperSlide key={work.id}>
                <WorksItem title={work.title} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* More Button */}
        <MoreButton link="/works" />
      </div>
    </WorksItemStyle>
  );
}
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
    min-width: 100%;
    margin-bottom: 2rem;
    z-index: 1;
  }
  .swiper-slide {
    height: 243px;
  }
`;
