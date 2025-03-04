import { View, Text, Image } from 'react-native';
import React from 'react';
import { ICONS } from '../utils/images/images';

const TransactionItem = ({
  name,
  date,
  image,
}: {
  name: string;
  date: string;
  image: string;
}) => {
  return (
    <View className="flex-row justify-between items-center bg-white p-5 rounded-lg mt-3">
      <View className="flex-row gap-5 items-center">
        <View>
          <Image source={{ uri: image }} style={{ width: 40, height: 40 }} />
        </View>
        <View>
          <Text className="text-xl text-black font-bold">{name}</Text>
          <Text className="text-lg text-[#AAAFB5]">{date}</Text>
        </View>
      </View>

      <Text className="text-2xl text-black font-bold">₹240.00</Text>
    </View>
  );
};

export default TransactionItem;
