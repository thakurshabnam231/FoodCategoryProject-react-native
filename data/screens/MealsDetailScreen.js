import { useLayoutEffect } from "react"
import {Text,Image,View,StyleSheet,ScrollView,Button} from "react-native"
import { MEALS } from "../dummy-data"
import MealDetails from "../components/MealsDetails"
import SubTitle from "../components/MealDetail/SubTitle"
import List from "../components/MealDetail/List"
import IconButton from "../components/IconButton"


const MealsDetailScreen=({route,navigation})=>{
    const mealId=route.params.mealId

    const selectedMeal=MEALS.find((meal)=>meal.id===mealId)

    function handleButtonPress(){
console.log("presssed")
    }
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:()=>{
                return <IconButton  icon="star" color="white" onPress={handleButtonPress}/>
            }
        })
    },[navigation,handleButtonPress])
    return (
        <ScrollView>
        <Image source={{uri:selectedMeal.imageUrl}} style={styles.image}/>
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails duration={selectedMeal.duration}
         complexity={selectedMeal.complexity}
         affordability={selectedMeal.affordability}
         textStyle={styles.detailText}/>
         <View style={styles.listOuterContainer}>
         <View style={styles.listContainer}>
         <SubTitle>Ingredients</SubTitle>
         <List data={selectedMeal.ingredients}/>
          <SubTitle>Steps</SubTitle>
          <List data={selectedMeal.steps}/></View></View>
       
     
       </ScrollView>
    )
}
export default MealsDetailScreen
const styles=StyleSheet.create({
image:{
    height:250,
    width:"100%"
},
title:{
    fontWeight:"bold",
    fontSize:20,
    textAlign:"center",
    margin:8,
    color:"white"
},
detailText:{
    color:"white"
},
listContainer:{
    width:'80%'
},
listOuterContainer:{
    alignItems:"center"
}

  
})