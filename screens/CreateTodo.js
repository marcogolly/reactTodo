import React from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import accounts from '../data/accounts';
import componentStyles from '../styles/componentStyles'

export default function CreateTodoScreen({navigation}){
    const [title, setTitle] = React.useState('title');
    const [text, setText] = React.useState('text');
    let id = navigation.getParam("id")
    let psw = navigation.getParam("psw")
    try{
    if(!accounts.login(id,psw)){
        navigation.navigate("Login");
    }}catch(error){alert("ciao"); navigation.navigate("Login");}

    function onPressCreate(){
        accounts.addTodo(id, title, text);
        navigation.navigate("Home", {id: id,psw: psw})
    }
    return (
        <View>
        <Text style={componentStyles.title.container}> Create Todo </Text>
            <View style={componentStyles.view.container}>
                <Text style={componentStyles.text.container}>titolo</Text>

                <TextInput style={componentStyles.input.container} id="title" onChangeText={text => setTitle(text)}/>

                <Text style={componentStyles.text.container}> testo</Text>
                <TextInput style={[componentStyles.input.container,{height:"40%", width:"80%",padding:3, textAlignVertical:'top'}]} numberOfLines={30} multiline id="text" onChangeText={text => setText(text)}/>                
                <Button color={componentStyles.button.container.color} title="crea todo" onPress={()=>onPressCreate()} />
            </View>
        </View>

    )
}