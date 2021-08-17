import SectionTitle from '../atoms/SectionTitle';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import Works from '../../src/data/worksdata';
import WorksItem from '../molecules/WorksItem';
import ViewMoreButton from '../atoms/ViewMoreButton';
import { Medias } from '../../styles/Media';
SwiperCore.use([Autoplay]);

export default function WorksSection() {
  return (
    <Works_section>
      <div className="container">
        <SectionTitle title="works" />
        <Swiper spaceBetween={30} centeredSlides={true} freeMode={true}>
          {Works.map(work => {
            if (work.id <= 3) {
              return (
                <SwiperSlide key={work.id}>
                  <WorksItem title={work.title} id={work.id} />
                </SwiperSlide>
              );
            }
          })}
        </Swiper>
        <ViewMoreButton link="/works" />
      </div>
    </Works_section>
  );
}

const Works_section = styled.section`
  margin-bottom: 10rem;
  ul {
    width: 100%;
    display: flex;
    gap: 3rem;
    margin-bottom: 5rem;
    justify-content: center;
  }
  .swiper-wrapper {
    margin-bottom: 3rem;
  }
  .swiper-slide {
    min-width: 250px;
    max-width: 250px;
    width: 100%;
    height: 350px;
  }
`;
