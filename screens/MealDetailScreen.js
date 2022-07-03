import React, { useState, useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomeHeaderButton from "../components/CustomeHeaderButton";

const MealDetailScreen = ({ navigation, route }) => {
  const [titleMenuBarMeal] = useState(route.params.title);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: titleMenuBarMeal === "" ? "Meal" : titleMenuBarMeal,
    });
  }, [navigation, titleMenuBarMeal]);

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find(meal => {
    return meal.id === mealId;
  });

  return (
    <View style={styles.screen}>
      <Text> MealDetailScreen {selectedMeal.title}</Text>
    </View>
  );
};

// MealDetailScreen.navigationOptions = navigationData => {
//   const mealId = navigationData.navigation.getParam("mealId");
//   const selectedMeal = MEALS.find(meal => {
//     return meal.id === mealId;
//   });

//   return {

//     headerTitle: selectedMeal.title,
//     headerRight: (
//       <HeaderButtons HeaderButtonComponent={CustomeHeaderButton}>
//         <Item
//           title="favorite"
//           iconName="ios-heart-sharp"
//           onPress={() => {
//             console.log("click add to favorite");
//           }}
//         />
//       </HeaderButtons>
//     ),
//   };
// };
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScreen;
