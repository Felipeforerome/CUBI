import React, { Component } from 'react';
import {StyleSheet, Text, View, Button,ScrollView} from "react-native";
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

    contestada=()=>{
        let thisComp = this
        console.log(thisComp.state)
    }

    calcularPerfil=()=>{
        let valor = 0.00
        let average = 0.00
        let numPreguntas = 0.00
        let thisComp = this
        Object.keys(this.state).map(function (key) {
            if(key.includes('Resp')){
                let valorTemp = thisComp.state[key]
                valor = valor + valorTemp
                numPreguntas = numPreguntas + 1
            }
        })
        average = Math.round(valor/numPreguntas)
    }

    render(){
        const preguntas = this.state.preguntas
        let numPreg = 0
        let puntaje = 0
        let contestadas = 0
        var thisComp = this;

        return(
            <ScrollView>
                <Button title={"Listo"}
                        onPress={this.calcularPerfil}/>
                {
                    Object.keys(preguntas).map(function (key) {
                        var pregunta = preguntas[key]
                        return(
                            <View>
                                <Text>{pregunta["Pregunta"]}</Text>
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
                                <Button
                                    onPress={() => {
                                        thisComp.setState({
                                            [pregunta["Pregunta"]]: "4",
                                            [pregunta["Pregunta"]+'Resp']: 4
                                        })
                                    }}
                                    color = {(thisComp.state[pregunta["Pregunta"]] === undefined ? "" : thisComp.state[pregunta["Pregunta"]] === "4" ? "red" :"")}
                                    title={pregunta["Respuesta 4"]}/>
                                <Button
                                    onPress={() => {
                                        thisComp.setState({
                                            [pregunta["Pregunta"]]: "5",
                                            [pregunta["Pregunta"]+'Resp']: 5
                                        })
                                    }}
                                    color = {(thisComp.state[pregunta["Pregunta"]] === undefined ? "" : thisComp.state[pregunta["Pregunta"]] === "5" ? "red" :"")}
                                    title={pregunta["Respuesta 5"]}/>
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
            </ScrollView>
        )
    }
}

export default Preguntas