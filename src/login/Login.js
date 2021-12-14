import React from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';


const Login = () => {

    return(
        <View style={styles.container}>
            <Icon style={styles.icon} name="graduation-cap" size={90} color="#000" />
            <TextInput
                label="Email"
            />
            <TextInput
                label="Pasword"
            />
            <Button mode="contained" onPress={() => console.log('Pressed')}>
                Login
            </Button>
        </View>
    )

}


export default Login;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eaeaea",
        paddingLeft: 24,
        paddingRight: 24
    },
    icon: {
        textAlign: 'center',
        marginTop: 25,
        marginBottom: 80
    }
});
