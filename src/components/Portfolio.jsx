import headphones from '../images/Headphones.webp'
import beauty from '../images/beauty.webp'
import anabol from '../images/anabol.webp'
import shopTech from '../images/shop-tech.webp'
import interno from '../images/interno.webp'
import dogs from '../images/dogs.webp'
import service from '../images/service.webp'
import locus from '../images/locus.webp'
import restaurant from '../images/restaurant.webp'
import maya from '../images/maya.webp'
import school from '../images/school.webp'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper-bundle.css' // Базовый CSS Swiper
import 'swiper/css/navigation' // CSS для навигации

export const Portfolio = () => {
  return (
    <section className='portfolio' id='portfolio'>
      <h2 className='portfolio__title title title__animation'>Portfolio</h2>
      <div className='container'>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            320: { slidesPerView: 1, slidesPerGroup: 1 },
            480: { slidesPerView: 2, slidesPerGroup: 1, spaceBetween: 20 },
            780: { slidesPerView: 3, slidesPerGroup: 1 },
          }}
        >
          <SwiperSlide>
            <div className='portfolio__item'>
              <div className='portfolio__item-img'>
                <a
                  href='https://headphones.evgenyroslyakov.ru/'
                  target='_blank'
                >
                  <img src={beauty} alt='beauty' />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='portfolio__item'>
              <div className='portfolio__item-img'>
                <a
                  href='https://headphones.evgenyroslyakov.ru/'
                  target='_blank'
                >
                  <img src={headphones} alt='Example' />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='portfolio__item'>
              <div className='portfolio__item-img'>
                <a
                  href='https://headphones.evgenyroslyakov.ru/'
                  target='_blank'
                >
                  <img src={anabol} alt='anabol' />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='portfolio__item'>
              <div className='portfolio__item-img'>
                <a
                  href='https://headphones.evgenyroslyakov.ru/'
                  target='_blank'
                >
                  <img src={shopTech} alt='shopTech' />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='portfolio__item'>
              <div className='portfolio__item-img'>
                <a
                  href='https://headphones.evgenyroslyakov.ru/'
                  target='_blank'
                >
                  <img src={interno} alt='interno' />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='portfolio__item'>
              <div className='portfolio__item-img'>
                <a
                  href='https://headphones.evgenyroslyakov.ru/'
                  target='_blank'
                >
                  <img src={dogs} alt='dogs' />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='portfolio__item'>
              <div className='portfolio__item-img'>
                <a
                  href='https://headphones.evgenyroslyakov.ru/'
                  target='_blank'
                >
                  <img src={service} alt='service' />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='portfolio__item'>
              <div className='portfolio__item-img'>
                <a
                  href='https://headphones.evgenyroslyakov.ru/'
                  target='_blank'
                >
                  <img src={locus} alt='locus' />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='portfolio__item'>
              <div className='portfolio__item-img'>
                <a
                  href='https://headphones.evgenyroslyakov.ru/'
                  target='_blank'
                >
                  <img src={restaurant} alt='restaurant' />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='portfolio__item'>
              <div className='portfolio__item-img'>
                <a
                  href='https://headphones.evgenyroslyakov.ru/'
                  target='_blank'
                >
                  <img src={maya} alt='maya' />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='portfolio__item'>
              <div className='portfolio__item-img'>
                <a
                  href='https://headphones.evgenyroslyakov.ru/'
                  target='_blank'
                >
                  <img src={school} alt='school' />
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        {/* <div className='swiper__buttons swiper-button-left'>
          <img src={arrowLeft} alt='arrow-left' />
        </div>
        <div className='swiper__buttons swiper-button-right'>
          <img src={arrowRight} alt='arrow-right' />
        </div> */}
      </div>
    </section>
  )
}
