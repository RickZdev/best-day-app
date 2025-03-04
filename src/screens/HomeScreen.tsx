import { View, Text, Image, ScrollView, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ICONS, IMAGES } from '../utils/images/images';
import Header from '../components/Header';
import ActionButton from '../components/ActionButton';
import Banner from '../components/Banner';
import SectionHeader from '../components/SectionHeader';
import axios from 'axios';
import TransactionItem from '../components/TransactionItem';

const HomeScreen = () => {
  const [valorantAgents, setValorantAgents] = useState(null);

  useEffect(() => {
    const getValorantAgents = async () => {
      const fetchValorantAgents = await axios.get(
        'https://valorant-api.com/v1/agents',
      );

      const response = fetchValorantAgents.data.data.map((item: any) => {
        return {
          id: item.uuid,
          name: item.displayName,
          data: item.releaseDate.toString(),
          image: item.fullPortrait,
        };
      });
      setValorantAgents(response);
    };

    getValorantAgents();
  }, []);

  return (
    <ScrollView className="flex-1 px-8">
      {/* logo */}
      <Image
        source={IMAGES.EASYPAY_LOGO}
        style={{ width: 160, height: 100 }}
        resizeMode="contain"
      />

      {/* header */}
      <Header name="Samantha" />

      {/* action button container */}
      <View className="bg-black mt-10 rounded-lg p-4 px-6 py-6 gap-10 flex-row items-center justify-around">
        <ActionButton icon={ICONS.TOP_UP_ICON} label="Top Up" />
        <ActionButton icon={ICONS.SEND_ICON} label="Send" />
        <ActionButton icon={ICONS.WITHDRAW_ICON} label="Withdraw" />
      </View>

      <View className="mt-10 bg-white p-4 rounded-lg gap-8 ">
        <View className="flex-row items-center  justify-around">
          <ActionButton
            icon={ICONS.INTERNET_ICON}
            label="Internet"
            textColor="#595F67"
          />

          <ActionButton
            icon={ICONS.WATER_ICON}
            label="Water"
            textColor="#595F67"
          />

          <ActionButton
            icon={ICONS.ELECTRICITY_ICON}
            label="Electricity"
            textColor="#595F67"
          />

          <ActionButton
            icon={ICONS.TV_CABLE_ICON}
            label="TV Cable"
            textColor="#595F67"
          />
        </View>

        <View className="flex-row items-center justify-around">
          <ActionButton
            icon={ICONS.VEHICLE_ICON}
            label="Vehicle"
            textColor="#595F67"
          />

          <ActionButton
            icon={ICONS.RENT_ICON}
            label="Rent"
            textColor="#595F67"
          />

          <ActionButton
            icon={ICONS.INVEST_ICON}
            label="Invest"
            textColor="#595F67"
          />

          <ActionButton
            icon={ICONS.MORE_ICON}
            label="More"
            textColor="#595F67"
          />
        </View>
      </View>

      {/* banner */}
      <Banner />

      <View className="mb-5">
        {/* section header */}
        <SectionHeader />

        <FlatList
          data={valorantAgents}
          keyExtractor={item => item.uuid}
          renderItem={({ item }) => (
            <TransactionItem
              name={item.name}
              date={item.date}
              image={item.image}
            />
          )}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
