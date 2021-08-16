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
      <div className="container">
        <SectionTitle title="works" />
        <ul>
          {Works.map(work => {
            if (work.id <= 3) {
              return (
                <li key={work.id} className="swiper_slide">
                  <WorksItem title={work.title} id={work.id} />
                </li>
              );
            }
          })}
        </ul>
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
  li {
    width: 250px;
    height: 350px;
  }
`;
