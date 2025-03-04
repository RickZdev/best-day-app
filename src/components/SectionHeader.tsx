import { View, Text } from 'react-native';
import React from 'react';

const SectionHeader = () => {
  return (
    <View className="flex-row justify-between items-center mt-10 mb-2">
      <Text className="font-bold text-black text-3xl">Recent Transaction</Text>
      <Text className="font-bold text-black text-2xl">See All</Text>
    </View>
  );
};

export default SectionHeader;
