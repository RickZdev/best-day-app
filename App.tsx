import './gesture-handler';
import './global.css';

import { SafeAreaView, Text } from 'react-native';
import React from 'react';
import env from './src/config/env';

const App: React.FC = () => {
  console.log(env.API_KEY);

  return (
    <SafeAreaView className="flex-1 flex-row justify-center items-center bg-blue-400">
      <Text>Test App</Text>
    </SafeAreaView>
  );
};

export default App;
