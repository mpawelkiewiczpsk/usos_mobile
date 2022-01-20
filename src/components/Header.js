import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useTheme, Text} from "react-native-paper";
import { StyleSheet, View, TouchableOpacity } from "react-native";

const Header = ({children, navigation}) => {

    const { colors } = useTheme();

    const logout = () => {
        navigation.navigate("Login");
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{children}</Text>
            <TouchableOpacity onPress={logout}>
                <Icon name="sign-out-alt" size={24} color="#fff" />
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 22
    }
})


export default Header;
