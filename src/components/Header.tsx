import { View, Image } from 'react-native';
import React from 'react';
import * as SolidIcons from 'react-native-heroicons/solid';
import * as OutlineIcons from 'react-native-heroicons/outline';
import IMAGES from '../utils/images/images';

const Header = () => {
  return (
    <View className="flex-row justify-between">
      <SolidIcons.Bars3Icon color={'white'} size={34} />
      <View className="flex-row items-center gap-5">
        <View>
          <OutlineIcons.BellIcon color="white" size={34} />
          <View className="bg-red-600 w-3 h-3 rounded-full absolute right-1 top-1" />
        </View>
        <Image source={IMAGES.AVATAR} className="w-14 h-14" />
      </View>
    </View>
  );
};

export default Header;
