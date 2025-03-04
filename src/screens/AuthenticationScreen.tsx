import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { IMAGES } from '../utils/images/images';
import { useNavigation } from '@react-navigation/native';

const AuthenticationScreen = () => {
  const { navigate } = useNavigation<any>();
  return (
    <View className="flex-1 bg-white">
      <View className="flex-[1.5] bg-[#F9EFE5]">
        <View className="justify-center items-center">
          <Image
            source={IMAGES.EASYPAY_LOGO}
            style={{ width: 150, height: 70 }}
            resizeMode="contain"
          />
        </View>

        <View className="flex-row justify-center items-center flex-1">
          <Image
            source={IMAGES.ONBOARDING_1}
            style={{
              width: 190,
              height: 170,
              position: 'absolute',
              left: 35,
              top: 25,
            }}
            resizeMode="contain"
          />

          <Image
            source={IMAGES.ONBOARDING_2}
            style={{
              width: 180,
              height: 230,
              position: 'absolute',
              right: 50,
              top: -10,
            }}
            resizeMode="contain"
          />
        </View>

        <View className="justify-center items-center pb-10">
          <Image
            source={IMAGES.ONBOARDING_3}
            style={{ width: 500, height: 210 }}
            resizeMode="contain"
          />
        </View>
      </View>

      <View className="flex-1 px-5 gap-10">
        <View className="flex-1 justify-center items-center mt-10 gap-6">
          {/* dots */}
          <View className="flex-row justify-center items-center gap-3">
            <View className=" bg-[#D0D3D8] w-3 h-3 border-2 rounded-sm" />
            <View className=" bg-[#D0D3D8] w-3 h-3  rounded-sm" />
            <View className=" bg-[#D0D3D8] w-3 h-3 rounded-sm" />
          </View>

          <View className="justify-center items-center gap-3">
            <Text className="text-[35px] text-black font-bold">
              Easy Online Payment
            </Text>
            <Text className="text-[#595F67] text-center text-[17px] px-8">
              Make your payment experience more better today. No additional
              admin fee
            </Text>
          </View>
        </View>

        <View className="justify-center items-center gap-4 pb-5">
          <TouchableOpacity
            onPress={() => navigate('BottomTab')}
            className="bg-black w-full py-4 rounded-lg">
            <Text className="text-white text-xl text-center font-bold">
              Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-white w-full py-4 rounded-lg border-2 border-black">
            <Text className="text-black text-xl text-center font-bold">
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AuthenticationScreen;
