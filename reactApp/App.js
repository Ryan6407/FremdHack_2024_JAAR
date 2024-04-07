import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import UsernamePage from './UsernamePage';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <UsernamePage />
    </SafeAreaView>
  );
};

export default App;