import React from 'react'
import {StyleSheet, Button, Text, View } from 'react-native'
import componentStyles from '../styles/componentStyles'
import accounts from '../data/accounts'
export default function Home({ navigation}){
    function onPress(text){
        navigation.navigate(text, {id:navigation.getParam("id"),text, psw:navigation.getParam("psw")})
    }
    
    let todo = accounts.getTodo(navigation.getParam("id"))
    function todoList() {
        
        return todo.map((data) => {
            return (
                <View key={data.id} style={componentStyles.view.container}>
                <Text style={componentStyles.title.container}>{data.title}</Text>
                <Text style={componentStyles.text.container}>{data.text}</Text>
            </View>
          )
        })
        
    }
    console.log(todoList())
    return (
        <View>
            <View style={[componentStyles.view.container,{alignItems:'center'}]}>
                <Text style ={componentStyles.title.container}>Welcome back, {navigation.getParam("id")}! </Text>
                <Text style ={componentStyles.title.container}> How are you? </Text>
                <View style ={{justifyContent:"flex-start", display:"flex", flexDirection:"row"}}>
                    <Button title="login" color={componentStyles.button.container.color} onPress={()=>onPress("Login")} />
                    <Button title="CreateTodo" color={componentStyles.button.container.color} onPress={()=>onPress("CreateTodo")} />
                    <Button title="home" color={componentStyles.button.container.color} onPress={()=>onPress("Home")} />
                </View>
            </View>
            <View style={{padding:5}}>
                {todoList()}
            </View>
        </View>
    )
}