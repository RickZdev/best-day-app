import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import { TAB_ICONS } from '../utils/images/images';
import TabIcon from '../components/TabIcon';
import InvoiceScreen from '../screens/InvoiceScreen';
import QRScreen from '../screens/QRScreen';
import NotificationScreen from '../screens/NotificationScreen';
import AccountScreen from '../screens/AccountScreen';
import { StyleSheet, View } from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <View className="flex-1 bg-white">
      <Tab.Navigator
        initialRouteName={'HomeTab'}
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBarStyle,
        }}>
        <Tab.Screen
          name="HomeTab"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon
                icon={
                  focused
                    ? TAB_ICONS.HOME_TAB_ACTIVE_ICON
                    : TAB_ICONS.HOME_TAB_INACTIVE_ICON
                }
                isFocused={focused}
              />
            ),
          }}
        />
        <Tab.Screen
          name="InvoiceTab"
          component={InvoiceScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon
                icon={
                  focused
                    ? TAB_ICONS.INVOICE_TAB_ACTIVE_ICON
                    : TAB_ICONS.INVOICE_TAB_INACTIVE_ICON
                }
                isFocused={focused}
              />
            ),
          }}
        />
        <Tab.Screen
          name="QRTab"
          component={QRScreen}
          options={{
            tabBarIcon: () => (
              <View className="bg-black p-4 rounded-full">
                <TabIcon icon={TAB_ICONS.QR_TAB_ACTIVE_ICON} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="NotificationTab"
          component={NotificationScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon
                icon={
                  focused
                    ? TAB_ICONS.NOTIFICATION_TAB_ACTIVE_ICON
                    : TAB_ICONS.NOTIFICATION_TAB_INACTIVE_ICON
                }
                isFocused={focused}
              />
            ),
          }}
        />
        <Tab.Screen
          name="AccountTab"
          component={AccountScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon
                icon={
                  focused
                    ? TAB_ICONS.ACCOUNT_TAB_ACTIVE_ICON
                    : TAB_ICONS.ACCOUNT_TAB_INACTIVE_ICON
                }
                isFocused={focused}
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
    height: 80,
    top: 25,
    borderTopWidth: 0,
  },
});

export default BottomTab;
