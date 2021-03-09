import React from 'react'
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import accounts from '../data/accounts'
import componentStyles from '../styles/componentStyles'
export default function Login({navigation}){
    const [id, setId] = React.useState('id');
    const [psw, setPsw] = React.useState('psw');
    const [newId, setNewId] = React.useState('id');
    const [newPsw, setNewPsw] = React.useState('psw');
    function onPressLogin(){
        if(accounts.login(id, psw))
            navigation.navigate("Home", {id:id, psw:psw})
        else
            Alert.alert("error", "username or password incorrect")
    }
    function onPressRegistration(){
        if(accounts.registration(newId, newPsw)){
            alert("account created")
            let res= accounts.addTodo(newId, "titolo nuovo","qui inserisco il testo, dove metto il todo per ricordarmi di cose");
            if (res)
                alert("todo added");
            else
                alert("todo not added");
        }
        else
            alert(" ")
    }
    return (
        <View >
            <View style={componentStyles.view.container}>
                <Text style={componentStyles.text.container}> inserisci nome utente </Text>
                <TextInput style={componentStyles.input.container} id="id" onChangeText={text => setId(text)}/>
                <Text style={componentStyles.text.container}> inserisci password </Text>
                <TextInput style={componentStyles.input.container} id="psw" onChangeText={text => setPsw(text)}/>
                <Button title="Home" color={componentStyles.button.container.color} onPress={()=>onPressLogin()} />
            </View>
            
            <View style={componentStyles.view.container}>
                <Text style={[componentStyles.text.container, {textAlign:'center'}]}> registrati qui </Text>
                <Text style={componentStyles.text.container}> inserisci nome utente </Text>
                <TextInput style={componentStyles.input.container} id="newId" onChangeText={text => setNewId(text)}/>
                <Text style={componentStyles.text.container}> inserisci password </Text>
                <TextInput style={componentStyles.input.container} id="newPsw" onChangeText={text => setNewPsw(text)}/>
                <Button title="Home" color={componentStyles.button.container.color} onPress={()=>onPressRegistration()} />
            </View>
        </View>
    )
}