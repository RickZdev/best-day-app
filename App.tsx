import './gesture-handler';
import './global.css';

import React from 'react';
import { SafeAreaView } from 'react-native';
import AppStack from './src/navigations/AppStack';

const App: React.FC = () => {
  return (
    <SafeAreaView className="flex-1">
      <AppStack />
    </SafeAreaView>
  );
};

export default App;
