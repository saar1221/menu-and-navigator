import React, { useState, useLayoutEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const CategoryMealScreen = ({ navigation, route }) => {
  const [titleMenuBar] = useState(route.params.title);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: titleMenuBar === "" ? "No title" : titleMenuBar,
    });
  }, [navigation, titleMenuBar]);

  function renderMealItem(itemMeal) {
    return (
      <MealItem
        title={itemMeal.item.title}
        onSelectedItem={() => {}}
        duration={itemMeal.item.duration}
        complexity={itemMeal.item.complexity.toUpperCase()}
        affordability={itemMeal.item.affordability}
        imageUrl={itemMeal.item.imageUrl}
        onSelectMeal={() => {
          navigation.navigate("MealDetail", {
            mealId: itemMeal.item.id,
            title: itemMeal.item.title,
          });
        }}
      />
    );
  }

  const categoyId = route.params.categoryId;

  const desplayMeals = MEALS.filter(meal => {
    return meal.categoryIds.indexOf(categoyId) >= 0;
  });

  return (
    <View style={styles.screen}>
      <FlatList
        data={desplayMeals}
        renderItem={renderMealItem}
        keyExtractor={(item, index) => {
          return item.id;
        }}
        style={{ width: "100%" }}
      />
    </View>
  );
};

CategoryMealScreen.navigationOptions = navigationData => {
  console.log(
    navigationData.route.params.categoryId + " testttttttttttttttttt"
  );
  const categoyId = navigationData.route.params.categoryId;

  const selectCategory = CATEGORIES.find(categoy => categoy.id === categoyId);

  return {
    headerTitle: selectCategory.title,
  };
};
const styles = StyleSheet.create({
  screen: {
    margin: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealScreen;
