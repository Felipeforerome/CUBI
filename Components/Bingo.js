import React, { Component } from 'react';
import {StyleSheet, Text, TextInput, Image, Button, View, ScrollView, Dimensions, Modal, TouchableHighlight} from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import perfiles from '../Assets/perfiles';

class Bingo extends Component{
    constructor(props) {
        super(props);
        var db_cubi = require('../Assets/DB_Cubi');
        this.state = {
            modalVisible: false,
            modalInfo:null,
            lugares: db_cubi,
            lugaresDelPerfil: null,
            fijos: false,
            posicionesBingo: null
        };
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    setModalInfo(lugar){
        this.setState({modalInfo: lugar},()=>{console.log(this.state.modalInfo)});
    }

    componentDidMount(){
        let thisComp = this
        const valorPerfil = thisComp.props.navigation.getParam('valorPerfil');
        const acompanantePerfil = thisComp.props.navigation.getParam('acompanantePerfil');
        const perfilReal = perfiles[valorPerfil]["Perfil"]
        let {lugares} = this.state
        let lugaresPerfil = []
        Object.keys(lugares).map(function (lugarKey) {
            let lugar = lugares[lugarKey]
            let acompanamiento = lugar["Acompañamiento"]
            let perfil1 = lugar["Perfil 1"]
            if(perfil1 === perfilReal && acompanantePerfil === acompanamiento){
                lugaresPerfil.push(lugar)
            }
        })
        thisComp.setState({
            lugaresDelPerfil: lugaresPerfil
        }, ()=>{console.log(this.state.lugaresDelPerfil)})
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
        if(this.state.lugaresDelPerfil !== null && !this.state.fijos){
            let posicionesBingo = thisComp.getRandom(this.state.lugaresDelPerfil,9)
            thisComp.setState({
                fijos: true,
                posicionesBingo: posicionesBingo
            })
        }

        return(
            <ScrollView>
                {thisComp.state.modalInfo !==null?
                    <Modal
                        animationType="fade"
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                        }}>
                        <View style={{
                            marginTop: 100,
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'space-evenly',
                            alignItems: 'center'
                        }}>
                            <Image
                                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Monserrate_Sanctuary.JPG/550px-Monserrate_Sanctuary.JPG'}}
                                style={bingoStyles.thumbnail}/>
                        <Text>{thisComp.state.modalInfo['Nombre']}</Text>
                        <Text>Hola</Text>
                        <TouchableHighlight
                            onPress={() => {
                                this.setModalVisible(!this.state.modalVisible);
                            }}>
                            <Text>Hide Modal</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}>
                    </View>
                    </Modal>:<Text/>}
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
                                        this.setModalInfo(thisComp.state.posicionesBingo[0]);
                                    }}
                                >
                                    <Image
                                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Monserrate_Sanctuary.JPG/550px-Monserrate_Sanctuary.JPG'}}
                                        style={bingoStyles.thumbnail}/>
                                </TouchableHighlight>
                            </View>
                            <View style={bingoStyles.square}>
                                <TouchableHighlight
                                    onPress={() => {
                                        this.setModalVisible(true);
                                        this.setModalInfo(thisComp.state.posicionesBingo[1]);
                                    }}
                                >
                                    <Image
                                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Monserrate_Sanctuary.JPG/550px-Monserrate_Sanctuary.JPG'}}
                                        style={bingoStyles.thumbnail}/>
                                </TouchableHighlight>
                            </View>
                            <View style={bingoStyles.square}>
                                <TouchableHighlight
                                    onPress={() => {
                                        this.setModalVisible(true);
                                        this.setModalInfo(thisComp.state.posicionesBingo[2]);
                                    }}
                                >
                                    <Image
                                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Monserrate_Sanctuary.JPG/550px-Monserrate_Sanctuary.JPG'}}
                                        style={bingoStyles.thumbnail}/>
                                </TouchableHighlight>
                            </View>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={bingoStyles.square}>
                                <TouchableHighlight
                                    onPress={() => {
                                        this.setModalVisible(true);
                                        this.setModalInfo(thisComp.state.posicionesBingo[3]);
                                    }}
                                >
                                    <Image
                                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Monserrate_Sanctuary.JPG/550px-Monserrate_Sanctuary.JPG'}}
                                        style={bingoStyles.thumbnail}/>
                                </TouchableHighlight>
                            </View>
                            <View style={bingoStyles.square}>
                                <TouchableHighlight
                                    onPress={() => {
                                        this.setModalVisible(true);
                                        this.setModalInfo(thisComp.state.posicionesBingo[4]);
                                    }}
                                >
                                    <Image
                                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Monserrate_Sanctuary.JPG/550px-Monserrate_Sanctuary.JPG'}}
                                        style={bingoStyles.thumbnail}/>
                                </TouchableHighlight>
                            </View>
                            <View style={bingoStyles.square}>
                                <TouchableHighlight
                                    onPress={() => {
                                        this.setModalVisible(true);
                                        this.setModalInfo(thisComp.state.posicionesBingo[5]);
                                    }}
                                >
                                    <Image
                                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Monserrate_Sanctuary.JPG/550px-Monserrate_Sanctuary.JPG'}}
                                        style={bingoStyles.thumbnail}/>
                                </TouchableHighlight>
                            </View>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={bingoStyles.square}>
                                <TouchableHighlight
                                    onPress={() => {
                                        this.setModalVisible(true);
                                        this.setModalInfo(thisComp.state.posicionesBingo[6]);
                                    }}
                                >
                                    <Image
                                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Monserrate_Sanctuary.JPG/550px-Monserrate_Sanctuary.JPG'}}
                                        style={bingoStyles.thumbnail}/>
                                </TouchableHighlight>
                            </View>
                            <View style={bingoStyles.square}>
                                <TouchableHighlight
                                    onPress={() => {
                                        this.setModalVisible(true);
                                        this.setModalInfo(thisComp.state.posicionesBingo[7]);
                                    }}
                                >
                                    <Image
                                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Monserrate_Sanctuary.JPG/550px-Monserrate_Sanctuary.JPG'}}
                                        style={bingoStyles.thumbnail}/>
                                </TouchableHighlight>
                            </View>
                            <View style={bingoStyles.square}>
                                <TouchableHighlight
                                    onPress={() => {
                                        this.setModalVisible(true);
                                        this.setModalInfo(thisComp.state.posicionesBingo[8]);
                                    }}
                                >
                                    <Image
                                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Monserrate_Sanctuary.JPG/550px-Monserrate_Sanctuary.JPG'}}
                                        style={bingoStyles.thumbnail}/>
                                </TouchableHighlight>
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