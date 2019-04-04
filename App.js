import React from 'react';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import Preguntas from './Components/Preguntas'

const AppNavigator = createStackNavigator({
    Preguntas: {
        screen: Preguntas,
    }
}, {
    initialRouteName: 'Preguntas',
});

export default createAppContainer(AppNavigator);