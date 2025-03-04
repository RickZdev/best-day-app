import { View, Text, Image } from 'react-native';
import React from 'react';
import { IMAGES } from '../utils/images/images';

const Banner = () => {
  return (
    <View className="flex-row items-center justify-between mt-8 bg-[#FCB3C5] px-6 py-1 rounded-lg">
      {/* display details */}
      <View className="w-1/2">
        <Text className="text-2xl text-black font-bold">50% OFF</Text>
        <Text className="text-lg text-black font-bold">
          Summer special deal
        </Text>
        <Text className="text-md text-black mt-3">
          Get discount for every transaction
        </Text>
      </View>

      {/* image banner */}
      <View>
        <Image source={IMAGES.PROMO_1} style={{ width: 200, height: 150 }} />
      </View>
    </View>
  );
};

export default Banner;
