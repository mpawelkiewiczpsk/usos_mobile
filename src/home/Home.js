import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Lecturers from "../lecturers";


const Home = () => {

    const Drawer = createDrawerNavigator();

    return(
        <Drawer.Navigator initialRouteName="Lecturers">
            <Drawer.Screen name="Lecturers" component={Lecturers} />
        </Drawer.Navigator>
    )

}


export default Home;
