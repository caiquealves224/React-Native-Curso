import React from 'react'
import { Button, Alert, ToastAndroid, Plataform } from "react-native"

export default props => {
    const notificar = msg => {
        if(Plataform.OS === 'android'){
            ToastAndroid.show(msg, ToastAndroid.SHORT)
        } else {
            Alert.alert('Informação', msg)
        }
    }
    return (
        <Button title="plataforma" 
            onPress={this.notificar("Parabéns")}> </Button>
    );
}