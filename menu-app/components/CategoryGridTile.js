import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Platform,
  TouchableHighlight,
} from "react-native";

function CategoryGridTile(props) {
  return (
    <View style={styles.gridItem}>
      <TouchableHighlight style={{ flex: 1 }} onPress={props.onSelect}>
        <View
          style={{ ...styles.container, ...{ backgroundColor: props.color } }}
        >
          <Text style={styles.title}>{props.title} </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10,
    height: 150,
    borderRadius: 10,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    //ANDROID SHADOW
    elevation: 8,
  },
  container: {
    flex: 1,
    padding: 15,

    alignItems: "flex-end",
    justifyContent: "flex-end",

    // ISO SHADOW
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
});

export default CategoryGridTile;
