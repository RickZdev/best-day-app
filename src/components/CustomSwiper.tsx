import React, { useRef } from 'react';
import BookType from '../utils/types/book';
import Swiper from 'react-native-deck-swiper';
import SwiperCard from './SwiperCard';

type CustomSwiperType = {
  data: Array<BookType>;
};

const CustomSwiper = ({ data }: CustomSwiperType) => {
  const swiperRef = useRef<Swiper<BookType>>(null);

  const handleSwipeRight = () => {
    swiperRef?.current?.swipeRight();
  };

  const handleSwipeLeft = () => {
    swiperRef?.current?.swipeLeft();
  };

  return (
    <Swiper
      ref={swiperRef}
      cards={data}
      infinite
      verticalSwipe={false}
      showSecondCard
      stackSize={5}
      renderCard={card => (
        <SwiperCard
          card={card}
          handleSwipeRight={handleSwipeRight}
          handleSwipeLeft={handleSwipeLeft}
        />
      )}
    />
  );
};

export default CustomSwiper;
