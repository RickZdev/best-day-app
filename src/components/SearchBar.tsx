import { View, TextInput } from 'react-native';
import React from 'react';
import * as SolidIcons from 'react-native-heroicons/solid';

const SearchBar = () => {
  return (
    <View className="mt-5">
      <SolidIcons.MagnifyingGlassIcon
        color={'white'}
        size={28}
        style={{ top: 15, left: 15 }}
      />

      <TextInput
        placeholder="Search here..."
        placeholderTextColor="white"
        className="bg-[#FFFFFF1A] rounded-2xl h-16 border-0 w-full absolute pl-16 text-xl"
      />
    </View>
  );
};

export default SearchBar;
