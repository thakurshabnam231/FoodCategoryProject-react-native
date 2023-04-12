import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import CategoriesScreen from './data/screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsScreen from "./data/screens/MealsScreen"
import MealsDetailScreen from './data/screens/MealsDetailScreen';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
    <StatusBar style="light" />
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerStyle:{backgroundColor:"#351401"},
    headerTintColor:"white",
    contentStyle:{backgroundColor:'#3f2f25'}}}>
      <Stack.Screen name="MealsCategories" component={CategoriesScreen} options={{title:"All Categories"}} />
      <Stack.Screen name="MealsOverview" component={MealsScreen} />
      <Stack.Screen name="MealDetails" component={MealsDetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>
   </>
   
  );
}

const styles = StyleSheet.create({
  container: {
  
  },
});
