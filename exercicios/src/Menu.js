import React from 'react';
import { createDrawerNavigator } from "react-navigation";

import Simples from './components/Simples';
import ParImpar from './components/ParImpar';
import Contador from './components/Contador';
import Plataforma from './components/Plataforma';
import ValidarProps from './components/ValidarProps'
import Evento from './components/Evento'

export default createDrawerNavigator({
    Evento : {
        screen : () => <Evento/>
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