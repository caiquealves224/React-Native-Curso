import React from 'react';
import { createDrawerNavigator } from "react-navigation";

import Simples from './components/Simples';
import ParImpar from './components/ParImpar';
import Contador from './components/Contador';

export default createDrawerNavigator({
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
}, {drawerWidth : 300 });