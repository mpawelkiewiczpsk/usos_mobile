import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Lecturers from "../lecturers";
import Grade from "../grade";


const Home = () => {

    const Drawer = createDrawerNavigator();

    return(
        <Drawer.Navigator initialRouteName="Lecturers">
            <Drawer.Screen name="Lecturers" component={Lecturers} />
            <Drawer.Screen name="Grade" component={Grade} />
        </Drawer.Navigator>
    )

}


export default Home;
