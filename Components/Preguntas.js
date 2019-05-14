import React, { Component } from 'react';
import {Dimensions, Alert, Text, View, Button, ScrollView, Image, StyleSheet} from "react-native";
import preguntasArchivo from '../Assets/preguntas';
import SegmentedControlTab from "react-native-segmented-control-tab";

class Preguntas extends Component{

    constructor(props) {
        super(props)
        this.state = {
            selectedIndex: 0,
            preguntas: preguntasArchivo
        }
    }

    calcularPerfil=()=>{
        let valor = 0.00
        let average = 0.00
        let numPreguntas = 0.00
        let thisComp = this
        let acompanante = "Solo"
        if(thisComp.state['¿Viaja sólo, en familia o en grupo?Resp']==2){
            acompanante = "Familiar "
        }
        else if(thisComp.state['¿Viaja sólo, en familia o en grupo?Resp']==3){
            acompanante = "Amigos"
        }
        Object.keys(this.state).map(function (key) {
            if(key.includes('Resp') && !key.includes('¿Viaja sólo, en familia o en grupo?')){
                let valorTemp = thisComp.state[key]
                valor = valor + valorTemp
                numPreguntas = numPreguntas + 1
            }
        })
        average = Math.round(valor/numPreguntas)
        if(numPreguntas>=1){
            thisComp.props.navigation.navigate('Pagos',{
                valorPerfil: average,
                acompanantePerfil: acompanante,
                estilo: styles
            })
        }else{
            Alert.alert("Oh no!", "Hace falta que respondas "+(1-numPreguntas)+ " preguntas", )
        }
    }

    render(){
        const preguntas = this.state.preguntas
        let numPreg = 0
        let puntaje = 0
        let contestadas = 0
        var thisComp = this;

        return(
            <ScrollView>
                <View style={styles.container}>
                    <Image
                        style = {styles.logo}
                        source={require('../Assets/CubiM.png')}
                    />
                </View>
                {
                    Object.keys(preguntas).map(function (key) {
                        var pregunta = preguntas[key]
                        return(
                            <View>
                                <Text style={{fontSize: 17}}>{pregunta["Pregunta"]}</Text>
                                <Button
                                    onPress={() => {
                                        thisComp.setState({
                                            [pregunta["Pregunta"]]: "1",
                                            [pregunta["Pregunta"]+'Resp']: 1
                                        })
                                    }}
                                    color = {(thisComp.state[pregunta["Pregunta"]] === undefined ? "" : thisComp.state[pregunta["Pregunta"]] === "1" ? "red" :"")}
                                    title={pregunta["Respuesta 1"]}
                                />
                                <Button
                                    onPress={() => {
                                        thisComp.setState({
                                            [pregunta["Pregunta"]]: "2",
                                            [pregunta["Pregunta"]+'Resp']: 2
                                        })
                                    }}
                                    color = {(thisComp.state[pregunta["Pregunta"]] === undefined ? "" : thisComp.state[pregunta["Pregunta"]] === "2" ? "red" :"")}
                                    title={pregunta["Respuesta 2"]}/>
                                <Button
                                    onPress={() => {
                                        thisComp.setState({
                                            [pregunta["Pregunta"]]: "3",
                                            [pregunta["Pregunta"]+'Resp']: 3
                                        })
                                    }}
                                    color = {(thisComp.state[pregunta["Pregunta"]] === undefined ? "" : thisComp.state[pregunta["Pregunta"]] === "3" ? "red" :"")}
                                    title={pregunta["Respuesta 3"]}/>
                                {( pregunta["Respuesta 4"] != ""?
                                <Button
                                    onPress={() => {
                                        thisComp.setState({
                                            [pregunta["Pregunta"]]: "4",
                                            [pregunta["Pregunta"]+'Resp']: 4
                                        })
                                    }}
                                    color = {(thisComp.state[pregunta["Pregunta"]] === undefined ? "" : thisComp.state[pregunta["Pregunta"]] === "4" ? "red" :"")}
                                    title={pregunta["Respuesta 4"]}/> :null)}
                                {( pregunta["Respuesta 5"] != ""?
                                    <Button
                                    onPress={() => {
                                        thisComp.setState({
                                            [pregunta["Pregunta"]]: "5",
                                            [pregunta["Pregunta"]+'Resp']: 5
                                        })
                                    }}
                                    color = {(thisComp.state[pregunta["Pregunta"]] === undefined ? "" : thisComp.state[pregunta["Pregunta"]] === "5" ? "red" :"")}
                                    title={pregunta["Respuesta 5"]}/>:null)}
                                <View
                                    style={{
                                        borderBottomColor: 'black',
                                        borderBottomWidth: 1,
                                    }}
                                />
                            </View>
                        )
                    })
                }
                <Button title={"Listo"}
                        onPress={this.calcularPerfil}/>
            </ScrollView>
        )
    }
}

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16)*0.5;
const imageWidth = dimensions.width*0.5;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: { height: imageHeight, width: imageWidth },
});

export default Preguntas