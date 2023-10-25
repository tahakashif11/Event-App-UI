

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstScreen from './Screen/FirstScreen';
import SecondScreen from './Screen/SecondScreen';
import ThirdScreen from './Screen/ThirdScreen'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FirstScreen" component={FirstScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ThirdScreen" component={ThirdScreen} options={{ headerShown: false }} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;