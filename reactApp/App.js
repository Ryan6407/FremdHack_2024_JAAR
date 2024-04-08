import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UsernamePage from './UsernamePage';
import LoadingScreen from './LoadingScreen';
import AnalyticsScreen from './AnalyticsScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="UsernamePage"
          component={UsernamePage}
          options={{ title: 'Username Page' }}
        />
        <Stack.Screen
          name="LoadingScreen"
          component={LoadingScreen}
          options={{ title: 'Loading Screen' }}
        />
        <Stack.Screen
          name="AnalyticsScreen"
          component={AnalyticsScreen}
          options={{ title: 'Analytics Screen' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
