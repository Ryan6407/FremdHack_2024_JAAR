import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UsernamePage from './UsernamePage';
import LoadingScreen from './LoadingScreen';
import AnalyticsScreen from './AnalyticsScreen';
import TweetPage from './addTweet';
import OurAIScreen from './OurAI';
import AnalyzeText from './AIHelperFunctions';

const Stack = createNativeStackNavigator();

const App = () => {

  console.log("check");

  AnalyzeText(["test1", "test2", "test3"]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="UsernamePage"
          component={UsernamePage}
          options={{ title: ' ' }}
        />
        <Stack.Screen
          name="LoadingScreen"
          component={LoadingScreen}
          options={{ title: ' ' }}
        />
        <Stack.Screen
          name="AnalyticsScreen"
          component={AnalyticsScreen}
          options={{ title: ' ' }}
        />
        <Stack.Screen
          name="AddTweet"
          component={TweetPage}
          options={{ title: ' ' }}
        />
        <Stack.Screen
          name="OurAI"
          component={OurAIScreen}
          options={{ title: ' ' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
