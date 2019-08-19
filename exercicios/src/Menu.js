import React from 'react';
import { createDrawerNavigator } from "react-navigation";

import Simples from './components/Simples';
import ParImpar from './components/ParImpar';
import Contador from './components/Contador';
import Plataforma from './components/Plataforma';
import ValidarProps from './components/ValidarProps';
import { TextoSincronizado }  from './components/ComunicacaoIndireta'

export default createDrawerNavigator({
    TextoSincronizado : {
        screen: () => TextoSincronizado,
        navigationOptions : { title : 'Texto Sincronizado' }
    },
    ValidarProps : {
        screen : () => <ValidarProps  ano={18}/>
    },
    Plataforma : {
        screen : Plataforma
    },

    Contador: {
        screen:  () => <Contador numero={6}/>
    },

    ParImpar: {
        screen : () => <ParImpar numero={100}/>,
        navigationOptions : { title : 'Par Impar'}
    },

    Simples : {
        screen : () => <Simples texto="Texto qualquer" /> 
    }
}, { drawerWidth : 300 });