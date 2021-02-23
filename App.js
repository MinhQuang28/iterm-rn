/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import scr1 from './screen1';
import scr2 from './screen2';
import {createStackNavigator} from '@react-navigation/stack';

import {NavigationContainer} from '@react-navigation/native';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={scr1}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={scr2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
