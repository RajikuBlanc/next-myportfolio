import SectionTitle from '../atoms/SectionTitle';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import Works from '../../src/data/worksdata';
import WorksItem from '../molecules/WorksItem';
import ViewMoreButton from '../atoms/ViewMoreButton';
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
          delay: 6000,
          disableOnInteraction: false
        }}
      >
        {Works.map(work => {
          return (
            <SwiperSlide key={work.id} className="swiper_slide">
              <WorksItem title={work.title} id={work.id} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <ViewMoreButton link="/works" />
    </Works_section>
  );
}

const Works_section = styled.section`
  margin-bottom: 10rem;
  .swiper-container {
    margin-bottom: 3rem;
  }
  .swiper_slide {
    width: 250px;
    height: 350px;
  }
`;
