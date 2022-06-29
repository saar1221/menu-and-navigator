import React from "react";
import { View, StyleSheet, FlatList, Button } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation, route }) {
  const renderGridItem = itemData => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          navigation.navigate("CategoryMeals", {
            title: itemData.item.title,
            categoryId: itemData.item.id,
          });
        }}

        // onSelect={() => {
        //   props.navigation.navigate({
        //     routeName: "CategoryMeals",
        //     params: {
        //       categoryId: itemData.item.id,
        //     },
        //   });
        // }}
      />
    );
  };
  return (
    <View>
      <View style={styles.buttonContainer}></View>
      <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    backgroundColor: "green",
  },
});

export default CategoriesScreen;
