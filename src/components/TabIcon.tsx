import { Image, ImageProps, View } from 'react-native';
import React from 'react';

type TabIconProps = {
  icon: ImageProps;
  size?: number;
  isFocused?: boolean;
};

const TabIcon = ({ size = 30, icon, isFocused }: TabIconProps) => {
  return isFocused ? (
    <View className="gap-2">
      <Image source={icon} style={{ width: size, height: size }} />
      <View className="bg-black h-1.5 w-1.5 rounded-full self-center" />
    </View>
  ) : (
    <Image source={icon} style={{ width: size, height: size }} />
  );
};

export default TabIcon;
