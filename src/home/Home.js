import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Lecturers from "../lecturers";
import Degree from "../degree";


const Home = () => {

    const Drawer = createDrawerNavigator();

    return(
        <Drawer.Navigator initialRouteName="Lecturers">
            <Drawer.Screen name="Lecturers" component={Lecturers} />
            <Drawer.Screen name="Degree" component={Degree} />
        </Drawer.Navigator>
    )

}


export default Home;
