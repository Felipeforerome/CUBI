import React, { Component } from 'react';
import {StyleSheet, Text, TextInput, Image, Button, View, ScrollView, Dimensions} from "react-native";
import perfiles from '../Assets/perfiles';

class Bingo extends Component{
    constructor(props) {
        super(props);
        var db_cubi = require('../Assets/DB_Cubi');
        this.state = {
            lugares: db_cubi,
            lugaresDelPerfil: null
        };
    }

    componentDidMount(){
        let thisComp = this
        const valorPerfil = thisComp.props.navigation.getParam('valorPerfil');
        const perfilReal = perfiles[valorPerfil]["Perfil"]
        console.log(perfilReal)
        let {lugares} = this.state
        let lugaresPerfil = []
        Object.keys(lugares).map(function (lugarKey) {
            let lugar = lugares[lugarKey]
            let perfil1 = lugar["Perfil 1"]
            let perfil2 = lugar["Perfil 2"]
            if(perfil1 === perfilReal){
                lugaresPerfil.push(lugar)
            }
        })
        thisComp.setState({
            lugaresDelPerfil: lugaresPerfil
        })
    }

    render(){
        let thisComp = this
        const valorPerfil = thisComp.props.navigation.getParam('valorPerfil');
        const styles = thisComp.props.navigation.getParam('estilo')
        console.log(this.state.lugaresDelPerfil)
        return(
            <ScrollView>
                <View style={styles.container}>
                    <Image
                        style = {styles.logo}
                        source={require('../Assets/CubiM.png')}
                    />
                </View>
                {this.state.lugaresDelPerfil !== null ?
                    <Text></Text>
                    :<Text>Hubo un error, vuelve a cargar la aplicación</Text> }
            </ScrollView>
        )
    }
}

export default Bingo