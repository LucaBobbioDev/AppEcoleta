import React from 'react'; 

import {NavigationContainer} from '@react-navigation/native'; 
import {createStackNavigator} from '@react-navigation/stack'; 

import Login from './pages/Login';
import Home from './pages/home'; 
import Points from './pages/Points'; 
import Detail from './pages/Detail'; 
import Register from './pages/Register';

const AppStack = createStackNavigator(); 

export default function Routes(){ 
    return( 
        <NavigationContainer> 
            <AppStack.Navigator headerMode="none" initialRouteName='Login' screenOptions={{ 
                cardStyle:{backgroundColor:'#F0F0F5'} 
            }}>  
                <AppStack.Screen name="Home" component={Home} /> 
                <AppStack.Screen name="Points" component={Points} /> 
                <AppStack.Screen name="Detail" component={Detail} /> 
                <AppStack.Screen name="Register" component={Register} />
                <AppStack.Screen name="Login" component={Login} />
            </AppStack.Navigator> 
        </NavigationContainer> 
    ); 
}