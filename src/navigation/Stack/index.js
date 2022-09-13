import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Auth
import {Login, Signup, Forgot} from '../../container/Auth/index';
import SplashScreen from '../../container/Spash';
import Intro from '../../container/Intro';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen component={SplashScreen} name="SplashScreen" />
      <Stack.Screen component={Intro} name="Intro" />
    </Stack.Navigator>
  );
};

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default StackNavigator;
