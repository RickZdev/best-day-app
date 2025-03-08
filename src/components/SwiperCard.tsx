import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import BookType from '../utils/types/book';
import LinearGradient from 'react-native-linear-gradient';
import * as SolidIcons from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

type SwiperCardType = {
  card: BookType;
  handleSwipeRight: () => void;
  handleSwipeLeft: () => void;
};

const SwiperCard = ({
  card,
  handleSwipeRight,
  handleSwipeLeft,
}: SwiperCardType) => {
  const { navigate } = useNavigation<any>();
  const secureUrl = card?.bookThumbnail?.replace('http://', 'https://');

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigate('BookScreen', { card })}
      className="h-[550px] w-[370px] rounded-[30px] bg-white items-center">
      <View className="flex-1 mt-3">
        <Image
          source={{ uri: secureUrl }}
          className="w-[350px] h-[450px] rounded-[30px]"
          resizeMode="stretch"
        />

        <LinearGradient
          colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
          style={style.linearGradient}
        />

        <View className="justify-end items-start flex-1 bottom-0 absolute gap-2 px-7 pb-12">
          <Text className="text-2xl text-white font-bold">
            {card?.bookTitle}
          </Text>
          <Text className="text-lg text-white">{card?.bookAuthor}</Text>
        </View>
      </View>

      <View className="flex-row justify-evenly w-full mb-5">
        <TouchableOpacity
          onPress={handleSwipeLeft}
          className="bg-[#F5EFE8] h-16 w-16 rounded-xl justify-center items-center">
          <SolidIcons.XMarkIcon color={'#79532A'} size={24} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleSwipeRight}
          className="bg-[#F3FF47] h-16 w-16 rounded-xl justify-center items-center">
          <SolidIcons.ArrowUturnRightIcon color={'#02131B'} size={24} />
        </TouchableOpacity>

        <TouchableOpacity className="bg-[#F5EFE8] h-16 w-16 rounded-xl justify-center items-center">
          <SolidIcons.HeartIcon color={'#79532A'} size={24} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  linearGradient: {
    position: 'absolute',
    width: 350,
    height: 225,
    bottom: 13,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
});

export default SwiperCard;
