import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/Home';
import Login from '../screens/Login';
import CreateTodo from '../screens/CreateTodo';

const screens={
    Login:{
        screen:Login,
        navigationOptions: {
            title: 'Login',
            headerTintColor: '#ffffff',
            headerStyle: {
                backgroundColor: '#86672D',
                borderBottomColor: '#4D3B19',
                borderBottomWidth: 3,
            }
        }
    },
    Home:{
        screen:Home,
        navigationOptions: {
            title: 'Home',
            headerTintColor: '#ffffff',
            headerStyle: {
                backgroundColor: '#86672D',
                borderBottomColor: '#4D3B19',
                borderBottomWidth: 3,
            }
        }
    },
    CreateTodo:{
        screen:CreateTodo,
        navigationOptions: {
            title: 'create Todo',
            headerTintColor: '#ffffff',
            headerStyle: {
            backgroundColor: '#86672D',
            borderBottomColor: '#4D3B19',
            borderBottomWidth: 3,
            }
        }
    },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
