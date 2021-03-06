import React from 'react';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import Preguntas from './Components/Preguntas'
import Pagos from './Components/Pago'
import Bingo from './Components/Bingo'

const AppNavigator = createStackNavigator(
    {
        Preguntas: {
            screen: Preguntas,
        },
        Pagos:{
            screen: Pagos,
        },
        Bingo:{
            screen: Bingo,
        }
    },
    {
        initialRouteName: 'Preguntas',
    });

export default createAppContainer(AppNavigator);