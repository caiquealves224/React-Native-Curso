import React from 'react';
import { View , Text} from 'react-native';
import Padrao from '../Estilo/Padrao';

function parOuImpar(num){
    return num % 2 == 0
            ? <Text style={Padrao.ex}>Par</Text>
            : <Text style={Padrao.ex}>Impar</Text>
}

export default props => 
    <View>
        {parOuImpar(props.numero)}
        {/* {
            props.numero % 2 == 0
            ? <Text style={Padrao.ex}>Par</Text>
            : <Text style={Padrao.ex}>Impar</Text>
        } */}
    </View>