import React from 'react';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import Preguntas from './Components/Preguntas'
import Pagos from './Components/Pago'

const AppNavigator = createStackNavigator(
    {
        Preguntas: {
            screen: Preguntas,
        },
        Pagos:{
            screen: Pagos,
        }
    },
    {
        initialRouteName: 'Preguntas',
    });

export default createAppContainer(AppNavigator);