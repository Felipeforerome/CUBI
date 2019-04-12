import React, { Component } from 'react';
import {StyleSheet, Text, View, Button,ScrollView} from "react-native";
import preguntasArchivo from '../Assets/preguntas';
import SegmentedControlTab from "react-native-segmented-control-tab";

class Pago extends Component{
    constructor(props) {
        super(props);
        this.state = { text: 'Useless Placeholder' };
    }
    render(){
        const { navigation } = this.props;
        const valorPerfil = navigation.getParam('valorPerfil');
        return(
            <ScrollView>

            </ScrollView>
        )
    }
}

export default Pago