import './gesture-handler';
import './global.css';

import { View } from 'react-native';
import React from 'react';
import AppStack from './src/navigation/AppStack';

const App: React.FC = () => {
  return (
    <View className="flex-1">
      <AppStack />
    </View>
  );
};

export default App;
