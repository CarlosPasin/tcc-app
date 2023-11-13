import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn } from "../../screens/SignIn";
import { Login } from "../../screens/Login";
import { DrawerScreens } from "./drawer";
import { Register } from "../../screens/Register";
import { Profile } from "../../screens/Profille";
import { CurrentTournament } from "../../screens/CurrentTournament";
import { CurrentMatch } from "../../screens/CurrentMatch";
import { CurrentRanking } from "../../screens/CurrentRanking";

const Stack = createNativeStackNavigator();
export function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Ranking" component={DrawerScreens} />
      <Stack.Screen name="CurrentTournament" component={CurrentTournament} />
      <Stack.Screen name="CurrentMatch" component={CurrentMatch} />
      <Stack.Screen name="CurrentRanking" component={CurrentRanking} />
    </Stack.Navigator>
  );
}
