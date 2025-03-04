import { View, Text } from 'react-native';
import React from 'react';

const Header = ({ name }: { name: string }) => {
  return (
    <View className="flex-row justify-between items-center">
      <View className="gap-1">
        <Text className="text-3xl text-black font-bold">Hi, {name}</Text>
        <Text className="text-2xl">Your available balance</Text>
      </View>
      <Text className="text-3xl text-black font-bold">₹4,590.00</Text>
    </View>
  );
};

export default Header;
