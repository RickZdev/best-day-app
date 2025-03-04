import { Image, ImageProps, Text, View } from 'react-native';
import React from 'react';

const ActionButton = ({
  icon,
  label,
  textColor,
}: {
  icon: ImageProps;
  label: string;
  textColor?: string;
}) => {
  return (
    <View className="justify-center items-center gap-3">
      <Image source={icon} style={{ width: 35, height: 35 }} />
      <Text
        className="text-white font-bold text-md"
        style={{ color: textColor ? textColor : 'white' }}>
        {label}
      </Text>
    </View>
  );
};

export default ActionButton;
