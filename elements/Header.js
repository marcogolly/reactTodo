import React from 'react'
import PropTypes from 'prop-types'
import { Text, Button, Alert, View } from 'react-native'

const header =() =>{
    function onPress(n){
        console.log(n)
        Alert.alert("you pressed the button "+ n.toString() );
    }
    return(
        <View style={{
            justifyContent:'space-around',
            flexDirection: 'row',
            flexWrap: 'wrap',
            backgroundColor: 'black',
            padding:5,
            display: 'flex',
            alignContent:'center',
          }}> 
            <Button title="hi" style={{color:"white",padding:5}} onPress={()=>onPress(1)} />
            <Button title="hi" style={{color:"white",padding:5}} onPress={()=>onPress(2)}/> 
            <Button title="hi" style={{color:"white",padding:5}} onPress={()=>onPress(3)}/> 

        </View>
        
    )
}
export default header