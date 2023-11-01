import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from '../../screens/SignIn';
import { Login } from '../../screens/Login';
import { DrawerScreens } from './drawer';

const Stack = createNativeStackNavigator();
export function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Ranking" component={DrawerScreens} />
    </Stack.Navigator>
  );
}