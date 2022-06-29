import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

import Colors from "../constants/Colors";
import MyTab from "./MyTab";

function MealsNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: Colors.primaryColor },
      }}
    >
      <Stack.Screen
        name="Categories"
        component={MyTab}
        options={{
          title: "Categories",
        }}

        // options={{
        //   // headerTitle: props => <LogoTitle {...props} />,
        //   headerRight: () => (
        //     <Button
        //       onPress={() => alert("This is a button!")}
        //       title="Info"
        //       color="black"
        //     />
        //   ),
        // }}
      />

      <Stack.Screen name="CategoryMeals" component={CategoryMealScreen} />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={{
          headerRight: () => (
            <MaterialCommunityIcons
              name="heart"
              color={"red"}
              size={25}
              onPress={() => {
                console.log("this muther faker click");
              }}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default MealsNavigator;

// export default MealsNavigator;

// const MealsNavigator = createStackNavigator(
//   {
//     Categories: {
//       screen: CategoriesScreen,

//       navigationOptions: {
//         headerTitle: "Categories",
//       },
//     },
//     CategoryMeals: {
//       screen: CategoryMealScreen,
//     },
//     MealDetail: MealDetailScreen,
//     Favorits: FavoritesScreen,
//   },
//   {
//     mode: "modal",
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor:
//           Platform.OS === "android" ? Colors.primaryColor : "white",
//       },
//       headerTintColor:
//         Platform.OS === "android" ? "white" : Colors.primaryColor,
//     },
//   }
// );

// // const MealsFavTabNavigator = createBottomTabNavigator({
// //   Meals: MealsNavigator,
// //   Favorits: FavoritesScreen,
// // });

// export default createAppContainer(MealsNavigator);
