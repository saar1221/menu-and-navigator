import React, { useState, useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

function FavoritesScreen({ navigation, route }) {
  return (
    <View style={styles.screen}>
      <Text> FavoritesScreen</Text>
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

export default FavoritesScreen;
