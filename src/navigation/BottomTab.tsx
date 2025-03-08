import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import * as SolidIcons from 'react-native-heroicons/solid';
import DirectionScreen from '../screens/DirectionScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const iconSize = 32;

  return (
    <View className="flex-1 bg-white">
      <Tab.Navigator
        initialRouteName={'HomeTab'}
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBarStyle,
          tabBarItemStyle: { top: 0, paddingTop: 20 },
        }}>
        <Tab.Screen
          name="HomeTab"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <SolidIcons.HomeIcon
                color={focused ? '#F3FF47' : '#313D47'}
                size={iconSize}
              />
            ),
          }}
        />
        <Tab.Screen
          name="DirectionScreen"
          component={DirectionScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <SolidIcons.MapPinIcon
                color={focused ? '#F3FF47' : '#313D47'}
                size={iconSize}
              />
            ),
          }}
        />
        <Tab.Screen
          name="FavoritesScreen"
          component={FavoritesScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <SolidIcons.HeartIcon
                color={focused ? '#F3FF47' : '#313D47'}
                size={iconSize}
              />
            ),
          }}
        />
        <Tab.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <SolidIcons.UserIcon
                color={focused ? '#F3FF47' : '#313D47'}
                size={iconSize}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    borderTopWidth: 0,
    backgroundColor: 'rgb(11, 25, 31)',
    paddingHorizontal: 20,
    height: 90,
  },
});

export default BottomTab;
