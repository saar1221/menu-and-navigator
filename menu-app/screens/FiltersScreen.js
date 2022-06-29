import React from "react";
import { View, Text, StyleSheet } from "react-native";

function FilterScrren({ navigation, route }) {
  return (
    <View style={styles.screen}>
      <Text> FilterScrren</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FilterScrren;
