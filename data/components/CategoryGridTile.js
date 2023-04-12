import { Pressable, View ,Text,StyleSheet} from "react-native"
import { useNavigation } from "@react-navigation/native"
const CategoryGridTile=({title,color,onPress})=>{
  const navigation=  useNavigation()
    return(
     <View style={[styles.gridItem,{backgroundColor:color}]}>
    <Pressable  android_ripple={{color:'#ccc'}}
     style={({pressed})=>[styles.button,pressed?styles.buttonPressed:null]}
     onPress={onPress
    }>
    <View style={styles.innerContainer}>
    <Text style={styles.title}>{title}</Text>
    </View></Pressable></View>
)}

export default CategoryGridTile
const styles=StyleSheet.create({
gridItem:{
    flex:1,
    margin:16,
    height:150,
    borderRadius:8,
    elevation:4,
    shadowOpacity:0.25,
    shadowColor:"black",
    shadowOffset:{width:0,height:2},
    shadowRadius:8,
    backgroundColor:"white",
    overflow:"hidden"
},
button:{
flex:1
},
buttonPressed:{
    opacity:0.5
},
title:{
    fontSize:18,
    fontWeight:"bold"
},
innerContainer:{
    flex:1,
    padding:16,
    justifyContent:"center",
    alignItems:"center"
}
})