import {View,Text, Pressable,Image,StyleSheet, Platform} from "react-native"
import { useNavigation } from "@react-navigation/native"
import MealDetails from "./MealsDetails"


const MealItem=({id,title,imageUrl,duration,complexity,affordability})=>{
    const navigation=useNavigation()
   

    function selectMealHandler(){
        navigation.navigate("MealDetails",{mealId:id})
    }
return (
   
<View style={styles.mealItem}>
<Pressable android_ripple={{color:'#ccc'}} onPress={selectMealHandler}>
<View>
<Image source={{uri:imageUrl}} style={styles.image}/>
<Text style={styles.title}>{title}</Text></View>
<MealDetails duration={duration}
complexity={complexity}
affordability={affordability}/>

</Pressable></View>
)
}
export default MealItem
const styles=StyleSheet.create({
    image:{
        width:"100%",
        height:200
    },
    mealItem:{
margin:16,
borderRadius:8,
overflow:Platform.OS==='android'?"hidden":'visible',
backgroundColor:"white",
shadowOpacity:0.25,
shadowColor:"black",
shadowOffset:{width:0,height:2},
shadowRadius:8,
elevation:4

    },
    title:{
        fontWeight:"bold",
        textAlign:"center",
        fontSize:18,
       
        margin:8
    },
   
})