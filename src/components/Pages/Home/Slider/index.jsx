/* eslint-disable import/no-unresolved */
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import { homeSlides } from '@assets/constants';
import Button from '@comp/UI/Button';
import Image from '@comp/UI/Image';
import SectionWrapper from '@comp/HOC/SectionWrapper';
import styles from './Slider.module.scss';

import './SwiperHome.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

const Slide = ({ subtitle, title, text, src, productId }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.SliderInner}>
      <div className={styles.Content}>
        <h3 className={styles.Subtitle}>{subtitle}</h3>
        <h2 className={styles.Title}>{title}</h2>
        <p className={styles.Text}>{text}</p>
        <Button onClick={() => navigate(`/product/${productId}`)}>
          КУПИТЬ
        </Button>
      </div>
      <div className={styles.ImageWrapper}>
        <Image className={styles.Image} src={src} alt='slide' />
      </div>
    </div>
  );
};

const Slider = () => (
  <Swiper
    modules={[Navigation, Pagination]}
    slidesPerView={1}
    pagination={{ clickable: true }}
    className={styles.Swiper}
    allowTouchMove
    autoplay={{
      delay: 5000,
    }}
  >
    {homeSlides.map((slide) => (
      <SwiperSlide key={slide.productId}>
        <Slide
          subtitle={slide.subtitle}
          title={slide.title}
          text={slide.text}
          src={slide.src}
          productId={slide.productId}
        />
      </SwiperSlide>
    ))}
  </Swiper>
);
export default SectionWrapper(Slider);
