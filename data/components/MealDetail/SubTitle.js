import {View,Text,StyleSheet} from "react-native"
const SubTitle=({children})=>{
    return(
        <View style={styles.subContainer}>
        <Text style={styles.subTitle}>{children}</Text></View>
    )
}
export default SubTitle
const styles=StyleSheet.create({
    subContainer:{
        borderBottomColor:2,
        padding:8,
        margin:4,
        borderBottomWidth:2,
        borderBottomColor:"white",
        marginHorizontal:24,
        marginVertical:4
    
       },
       subTitle:{
        color:"#e2b497",
        fontSize:18,
        fontWeight:"bold",
    textAlign:"center",
    
       },
})