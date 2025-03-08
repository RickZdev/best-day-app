import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import IMAGES from '../utils/images/images';
import categories from '../common/categories';
import categoryData from '../common/categories_data';
import CustomSwiper from '../components/CustomSwiper';
import useHomeScreen from '../hooks/useHomeScreen';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

const HomeScreen = () => {
  const { books, selectedCategory, handleSelectedCategoryPress } =
    useHomeScreen();

  return (
    // container
    <View className="flex-1 -left-1">
      {/* backdrop */}
      <Image source={IMAGES.BACKDROP} className={'w-[102%] h-full absolute'} />

      {/* wrapper */}
      <View className="mt-20 px-5">
        {/* header */}
        <Header />

        {/* search bar */}
        <SearchBar />

        {/* categories */}
        <View className="mt-14 -mx-10">
          <FlatList
            data={categoryData}
            keyExtractor={item => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => handleSelectedCategoryPress(item.id)}
                className="py-4 rounded-full"
                style={{
                  backgroundColor:
                    selectedCategory === item.id ? '#F3FF47' : 'transparent',
                  marginLeft: item.id === 0 ? 40 : 0,
                  marginRight: item.id === categories.length - 1 ? 40 : 0,
                  paddingHorizontal: selectedCategory === item.id ? 30 : 10,
                }}>
                <Text
                  className="text-md"
                  style={{
                    color: selectedCategory === item.id ? 'black' : 'white',
                    fontWeight:
                      selectedCategory === item.id ? 'bold' : 'regular',
                    display: 'flex',
                  }}>
                  {item.category}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* card */}
        <View className="flex-1 right-1 bottom-10">
          <CustomSwiper data={books} />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
