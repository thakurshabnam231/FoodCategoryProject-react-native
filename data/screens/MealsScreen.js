import {useEffect} from "react"
import {View,Text,StyleSheet,FlatList} from "react-native"
import { MEALS ,CATEGORIES} from "../dummy-data"
import MealItem from "../components/MealItem"

const MealsScreen=({route,navigation})=>{
   const catId= route.params.categoryId

   const displayedMeals=MEALS.filter((item)=>{
    return item.categoryIds.indexOf(catId)>=0
   })
  

useEffect(()=>{
    const categoryTitle=CATEGORIES.find((item)=>item.id===catId).title
    navigation.setOptions({
   title:categoryTitle
   })
},[catId,navigation])
   function renderMealsItem(itemData){
    const item=itemData.item
    const mealItemProps={
        id:item.id,
        title:item.title,
        imageUrl:item.imageUrl,
        affordability:item.affordability,
        duration:item.duration,
        complexity:item.complexity


    }
return <MealItem {...mealItemProps} />
   }
    return(
        <View style={styles.container}>
        <FlatList data={displayedMeals} keyExtractor={(item)=>item.id} renderItem={renderMealsItem}/>
        </View>
    )
}
export default MealsScreen
const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }
})