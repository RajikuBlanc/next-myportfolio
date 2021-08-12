import SectionTitle from '../atoms/SectionTitle';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import Works from '../../src/data/worksdata';
SwiperCore.use([Autoplay]);

export default function WorksSection() {
  return (
    <Works_section>
      <SectionTitle title="works" />
      <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
      >
        {Works.map(work => {
          return (
            <SwiperSlide key={work.id} className="swiper_slide">
              {work.title}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Works_section>
  );
}

const Works_section = styled.section`
  margin-bottom: 10rem;
  .swiper_slide {
    width: 250px;
    height: 350px;
    border: 1px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
