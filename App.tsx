import './gesture-handler';
import './global.css';

import { SafeAreaView, Text } from 'react-native';
import React from 'react';

const App: React.FC = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-primary-light">
      <Text>Test App</Text>
    </SafeAreaView>
  );
};

export default App;
