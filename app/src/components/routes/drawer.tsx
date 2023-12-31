import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ranking } from "../../screens/Ranking";
import { TournamentScreen } from "../../screens/Tournament";
import { SignIn } from "../../screens/SignIn";

const { Navigator, Screen } = createDrawerNavigator();
export const DrawerScreens = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Ranking" component={Ranking}></Screen>
      <Screen name="Campeonato" component={TournamentScreen}></Screen>
      <Screen name="Sair" component={SignIn}></Screen>
    </Navigator>
  );
};