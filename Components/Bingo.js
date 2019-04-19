import React, { Component } from 'react';
import {StyleSheet, Text, TextInput, Image, Button, View, ScrollView, Dimensions, Modal, TouchableHighlight} from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
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

    getRandom=(arr, n)=> {
        var result = new Array(n),
            len = Object.keys(arr).length,
            taken = new Array(len);
        if (n > len)
            throw new RangeError("getRandom: more elements taken than available");
        while (n--) {
            var x = Math.floor(Math.random() * len);
            result[n] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
    }

    render(){
        let thisComp = this
        const valorPerfil = thisComp.props.navigation.getParam('valorPerfil');
        const styles = thisComp.props.navigation.getParam('estilo')
        if(this.state.lugaresDelPerfil !== null){
            let posicionesBingo = thisComp.getRandom(this.state.lugaresDelPerfil,9)
        }
        return(
            <ScrollView>
                <View style={styles.container}>
                    <Image
                        style = {styles.logo}
                        source={require('../Assets/CubiM.png')}
                    />
                </View>
                {this.state.lugaresDelPerfil !== null ?
                    <View>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{height: squareWidth/2, backgroundColor: 'white'}} />
                        </View>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={bingoStyles.square}>
                                <TouchableHighlight
                                    onPress={() => {
                                        this.setModalVisible(true);
                                    }}
                                >
                                    <Image
                                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Monserrate_Sanctuary.JPG/550px-Monserrate_Sanctuary.JPG'}}
                                        style={bingoStyles.thumbnail}/>
                                </TouchableHighlight>
                            </View>
                            <View style={bingoStyles.square}>
                                <Image
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Monserrate_Sanctuary.JPG/550px-Monserrate_Sanctuary.JPG'}}
                                    style={bingoStyles.thumbnail}/>
                            </View>
                            <View style={bingoStyles.square}>
                                <Image
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Monserrate_Sanctuary.JPG/550px-Monserrate_Sanctuary.JPG'}}
                                    style={bingoStyles.thumbnail}/>
                            </View>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={bingoStyles.square}>
                                <Image
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Monserrate_Sanctuary.JPG/550px-Monserrate_Sanctuary.JPG'}}
                                    style={bingoStyles.thumbnail}/>
                            </View>
                            <View style={bingoStyles.square}>
                                <Image
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Monserrate_Sanctuary.JPG/550px-Monserrate_Sanctuary.JPG'}}
                                    style={bingoStyles.thumbnail}/>
                            </View>
                            <View style={bingoStyles.square}>
                                <Image
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Monserrate_Sanctuary.JPG/550px-Monserrate_Sanctuary.JPG'}}
                                    style={bingoStyles.thumbnail}/>
                            </View>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={bingoStyles.square}>
                                <Image
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Monserrate_Sanctuary.JPG/550px-Monserrate_Sanctuary.JPG'}}
                                    style={bingoStyles.thumbnail}/>
                            </View>
                            <View style={bingoStyles.square}>
                                <Image
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Monserrate_Sanctuary.JPG/550px-Monserrate_Sanctuary.JPG'}}
                                    style={bingoStyles.thumbnail}/>
                            </View>
                            <View style={bingoStyles.square}>
                                <Image
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Monserrate_Sanctuary.JPG/550px-Monserrate_Sanctuary.JPG'}}
                                    style={bingoStyles.thumbnail}/>
                            </View>
                        </View>
                    </View>
                    :<Text>Hubo un error, vuelve a cargar la aplicación</Text> }
            </ScrollView>
        )
    }
}


const dimensions = Dimensions.get('window');
const squareWidth = dimensions.width/3;

const bingoStyles= StyleSheet.create({
    square:{
        width: squareWidth,
        height: squareWidth,
        justifyContent: 'center',
        alignItems: 'center'},
    thumbnail:{
        width: squareWidth*0.8,
        height: squareWidth*0.8,
        borderRadius: squareWidth*0.8/ 2
    }
})

export default Bingo