import React, {useState} from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button, Snackbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Login = ({navigation}) => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [visible, setVisible] = React.useState(false);

    const onToggleSnackBar = () => setVisible(!visible);

    const onDismissSnackBar = () => setVisible(false);

    const checkLogin = () => {
        if(login && password && (login === password)){
            storeData().then(() => {
                navigation.navigate('Home')
            })

        }else{
            setVisible(true);
        }
    }

    const storeData = async () => {
        try {
            await AsyncStorage.setItem('login', 'true')
        } catch (e) {
            // saving error
        }
    }





    return(
        <View style={styles.container}>
            <Snackbar
                visible={visible}
                onDismiss={onDismissSnackBar}
                style={{backgroundColor: 'red'}}>
                Login or password is incorrect
            </Snackbar>
            <View style={{paddingLeft: 24,paddingRight: 24}}>
            <Icon style={styles.icon} name="graduation-cap" size={90} color="#000" />
            <TextInput
                label="Email"
                style={{marginBottom: 15}}
                value={login}
                onChangeText={setLogin}
            />
            <TextInput
                label="Pasword"
                style={{marginBottom: 15}}
                value={password}
                onChangeText={setPassword}
            />
            <Button mode="contained" onPress={() => checkLogin()}>
                Login
            </Button>
            </View>
        </View>
    )

}


export default Login;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eaeaea"
    },
    icon: {
        textAlign: 'center',
        marginTop: 25,
        marginBottom: 80
    }
});
