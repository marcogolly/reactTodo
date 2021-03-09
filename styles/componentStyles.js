import { StyleSheet } from "react-native";

const appStyles = StyleSheet.create({
    container:{
        backgroundColor:'#4D3B19'
    }
})

const viewStyles = StyleSheet.create({
    container: {
      backgroundColor:"#E5D4B3",
      borderColor:"#4D3B19",
      borderWidth:1
    }
})
const titleStyles = StyleSheet.create({
    container: {
        fontStyle:"italic",
        fontSize:25,
        fontWeight:"bold",
        color:"#4D3B19",

    }
})
const textStyles = StyleSheet.create({
    container: {
        fontStyle:"normal",
        fontSize:15,
        fontWeight:"500",
        color:"#4D3B19",

    }
})
const buttonStyles = {
    container: {
        padding: 5,
        color:'#86672D'
    }
}
const inputStyle=StyleSheet.create({
    container:{
    height: 40,
    alignSelf:'center',
    width:300,
    borderColor: '#4D3B19', 
    borderWidth: 1,
    marginBottom:10,
    borderRadius:10
}})

export default {view:viewStyles, title:titleStyles, button:buttonStyles, input: inputStyle, text:textStyles, app:appStyles};