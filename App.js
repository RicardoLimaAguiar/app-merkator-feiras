import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import * as Updates from 'expo-updates';
import {
  Roboto_100Thin,
  Roboto_700Bold,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";
if (__DEV__) {
  import("./ReactotronConfig");
}

import Routes from "./src/routes";
import ThemeProvider from "./src/providers/ThemeProvider";
// import { OneSignalProvider } from "./src/providers/OneSignalProvider";

function App() {

  useEffect(() => {
    async function updateApp(){
      const { isAvailable } = await Updates.checkForUpdateAsync();

      if(isAvailable){
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    }

    updateApp();
  }, [])

  const [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_700Bold,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider>
      <NavigationContainer>
        {/* <OneSignalProvider> */}
          <Routes />
        {/* </OneSignalProvider> */}
      </NavigationContainer>
    </ThemeProvider>
  );
}
export default App;
