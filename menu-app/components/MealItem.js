import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Colors from "../constants/Colors";

function MealItem(props) {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: props.imageUrl }}
              style={styles.imageBg}
            >
              <View style={styles.titleContainer}>
                <Text numberOfLines={1} style={styles.title}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <Text>{props.duration}m</Text>
            <Text>{props.complexity}</Text>
            <Text>{props.affordability}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: Colors.primaryColor,
    marginBottom: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  imageBg: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  mealRow: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "85%",
  },
  mealDetail: {
    height: "15%",
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: 12,
    paddingVertical: 5,
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: "white",
  },
});

export default MealItem;
