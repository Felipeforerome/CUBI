import React, { Component } from 'react';
import {StyleSheet, Text, TextInput, View, Button,ScrollView} from "react-native";

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
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
            </ScrollView>
        )
    }
}

export default Pago