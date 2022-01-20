import React, {useState, useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import Login from "../../login";
import Home from "../../home";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTheme } from "react-native-paper";
import Header from "../../components/Header";

const Stack = createStackNavigator();


const StackNavigation = () => {

    const [login, setLogin] = useState(false);

    const { colors } = useTheme();

    const headerOptions = {
        headerStyle: {
            backgroundColor: colors.primary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        }
    };

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('login')
            if(value !== null) {
                setLogin(value)
            }
        } catch(e) {
            // error reading value
        }
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
                <Stack.Screen name="Login" component={Login} options={headerOptions}/>
            </Stack.Navigator>
        </NavigationContainer>
    )

}



export default StackNavigation;
