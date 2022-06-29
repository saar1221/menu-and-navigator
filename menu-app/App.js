import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
// import { enableScreens } from "react-native-screens";

import MealsNavigator from "./navigation/MealsNavigator";
import { NavigationContainer } from "@react-navigation/native";

// enableScreens();
const fetchFounts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFounts}
        onFinish={() => {
          setFontLoaded(true);
        }}
        onError={err => {
          console.log(err);
        }}
      />
    );
  }

  return (
    // <View>
    //   <Text>asdasd</Text>
    // </View>
    <NavigationContainer>
      <MealsNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
