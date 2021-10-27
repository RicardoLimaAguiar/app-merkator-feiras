import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialIcons as Icon } from "@expo/vector-icons";
import { withTheme } from "styled-components";

const MainStack = createStackNavigator();

import PagePreload from "./pages/Preload";
import PageHome from "./pages/Home";
import PageExhibitor from "./pages/Exhibitor";
import PageExhibitorDetail from "./pages/ExhibitorDetail";
import PageMapLevel from "./pages/MapLevel";
import PageTransfer from "./pages/Transfer";
import PageFavoritres from "./pages/Favorites";
import PageNotesExhibitor from "./pages/NotesExhibitor";
import PageNewsDetail from "./pages/NewsDetails";
import PageNews from "./pages/News";

const Routes = ({ theme, ...props }) => (
  <MainStack.Navigator
    {...props}
    screenOptions={({ navigation }) => ({
      headerTitleAlign: "center",
      headerStyle: {
        backgroundColor: theme.colors.primary,
        height: 90,
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
      headerLeft: () => (
        <Icon
          name={"arrow-back"}
          size={28}
          color="#FFFFFF"
          onPress={() => {
            navigation.goBack();
          }}
          style={{ width: 100, height: 30, marginLeft: 20 }}
        />
      ),
      headerRight: () => (
        <Icon
          name={"home"}
          size={28}
          color="#FFF"
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={{ width: 100, height: 30, paddingLeft: 45 }}
        />
      ),
      headerTintColor: "#FFFFFF",
    })}
  >
    <MainStack.Screen
      name="Preload"
      component={PagePreload}
      options={{
        headerShown: false,
      }}
    />
    <MainStack.Screen
      name="Home"
      component={PageHome}
      options={{
        headerShown: false,
      }}
    />
    <MainStack.Screen
      name="Exhibitor"
      component={PageExhibitor}
      options={{
        headerShown: false,
      }}
    />
    <MainStack.Screen
      name="ExhibitorDetail"
      component={PageExhibitorDetail}
      options={{
        headerShown: false,
      }}
    />
    <MainStack.Screen
      name="News"
      component={PageNews}
      options={{
        headerShown: false,
      }}
    />
    <MainStack.Screen
      name="NewsDatail"
      component={PageNewsDetail}
      options={{
        headerShown: false,
      }}
    />
    <MainStack.Screen
      name="MapLevel"
      component={PageMapLevel}
      options={{
        headerTitle: "Planta Baixa",
      }}
    />
    <MainStack.Screen
      name="Transfer"
      component={PageTransfer}
      options={{
        headerShown: false,
      }}
    />
    <MainStack.Screen
      name="Favorites"
      component={PageFavoritres}
      options={{
        headerShown: false,
      }}
    />
    <MainStack.Screen
      name="NotesExhibitor"
      component={PageNotesExhibitor}
      options={{
        headerShown: false,
      }}
    />
  </MainStack.Navigator>
);

export default withTheme(Routes);
