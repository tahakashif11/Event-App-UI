
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstScreen from './Screen/FirstScreen';
import SecondScreen from './Screen/SecondScreen';
import ThirdScreen from './Screen/ThirdScreen'
import FourthScreen from './Screen/FourthScreen';
import FifthScreen from './Screen/FifthScreen';
import SixthScreen from './Screen/SixthScreen';
import SeventhScreen from './Screen/SeventhScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FirstScreen" component={FirstScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ThirdScreen" component={ThirdScreen} options={{ headerShown: false }} />
        <Stack.Screen name="FourthScreen" component={FourthScreen} options={{ headerShown: false }} />
        <Stack.Screen name="FifthScreen" component={FifthScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SixthScreen" component={SixthScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SeventhScreen" component={SeventhScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;