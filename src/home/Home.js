import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Lecturers from "../lecturers";
import Opinions from "../opinions";
import Grade from "../grade";
import {useTheme} from "react-native-paper";
import Header from "../components/Header";

const Home = ({navigation}) => {

    const Drawer = createDrawerNavigator();
    const { colors } = useTheme();

    const headerOptions = {
        headerTitle: (props) => <Header {...props} navigation={navigation} />,
        headerStyle: {
            backgroundColor: colors.primary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        }
    };

    return(
        <Drawer.Navigator initialRouteName="Opinions">
            <Drawer.Screen name="Lecturers" component={Lecturers} options={headerOptions} />
            <Drawer.Screen name="Grade" component={Grade} options={headerOptions}/>
            <Drawer.Screen name="Opinions" component={Opinions} options={headerOptions}/>
        </Drawer.Navigator>
    )

}


export default Home;
