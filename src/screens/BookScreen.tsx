import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import * as SolidIcons from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

const BookScreen = ({ route }: any) => {
  const { goBack } = useNavigation<any>();
  const data = route.params?.card;
  const secureUrl = data?.bookThumbnail?.replace('http://', 'https://');

  return (
    <View className="flex-1">
      <Image
        source={{ uri: secureUrl }}
        className="w-full h-full absolute"
        resizeMode="stretch"
      />
      <LinearGradient
        colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
        style={style.linearGradient}
      />

      <View className="px-10 flex-1">
        <TouchableOpacity
          onPress={() => goBack()}
          className="bg-[#498279] mt-20 h-16 w-16 rounded-xl justify-center items-center">
          <SolidIcons.ArrowLeftIcon color={'white'} size={24} />
        </TouchableOpacity>
      </View>

      <View className="w-[90%] self-center justify-center items-center max-h-[60%] h-[60%] mb-10">
        {/* action buttons */}
        <View className="flex-row gap-5 items-end justify-end absolute z-10 -top-7 right-7">
          <TouchableOpacity
            className="bg-[white] h-14 w-14 rounded-xl justify-center items-center"
            style={{
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}>
            <SolidIcons.HeartIcon color={'red'} size={24} />
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-row bg-[#F3FF47] h-14 w-24 rounded-xl justify-center items-center gap-2"
            style={{
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}>
            <SolidIcons.HandRaisedIcon color={'black'} size={24} />
            <Text className="text-black font-bold">Go</Text>
          </TouchableOpacity>
        </View>
        <LinearGradient
          colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.6)']}
          style={{
            position: 'absolute',
            bottom: 0,
            zIndex: 100,
            width: '100%',
            height: 250,
            borderBottomRightRadius: 30,
            borderBottomLeftRadius: 30,
          }}
        />

        <ScrollView
          className="py-10 bg-white rounded-[30px]"
          showsVerticalScrollIndicator={false}>
          <View className="px-7 gap-2">
            <Text className="text-lg text-black">21 January 2023</Text>
            <Text className="text-3xl font-bold">{data?.bookTitle}</Text>
            <Text className="text-lg text-black">{data?.bookAuthor}</Text>
          </View>

          <View className="flex-row justify-evenly items-center mt-5">
            <TouchableOpacity className="flex-row bg-[#F5EFE8] h-12 w-24 rounded-xl justify-center items-center gap-2">
              <SolidIcons.StarIcon color={'#79532A'} size={20} />
              <Text className="text-[#79532A] font-bold text-md">4.5</Text>
            </TouchableOpacity>

            <TouchableOpacity className="flex-row bg-[#F5EFE8] h-12 w-28 rounded-xl justify-center items-center gap-2">
              <SolidIcons.EyeIcon color={'#79532A'} size={20} />
              <Text className="text-[#79532A] font-bold text-md">450K</Text>
            </TouchableOpacity>

            <TouchableOpacity className="flex-row bg-[#F5EFE8] h-12 w-36 rounded-xl justify-center items-center gap-2">
              <SolidIcons.CalendarIcon color={'#79532A'} size={20} />
              <Text className="text-[#79532A] font-bold text-md">
                21 Jan 2023
              </Text>
            </TouchableOpacity>
          </View>

          <View className="px-7 mt-10 pb-5">
            <Text className="text-[#354249] text-lg leading-7 text-wrap">
              {data?.bookDescription}
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  linearGradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
});

export default BookScreen;
