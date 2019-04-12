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

    render(){
        const preguntas = this.state.preguntas
        let numPreg
        let puntaje
        let contestadas = 2
        var thisComp = this;

        return(
            <ScrollView>
                {
                    Object.keys(preguntas).map(function (key) {
                        var pregunta = preguntas[key]
                        return(
                            <View>
                                <Text>{pregunta["Pregunta"]}</Text>
                                <Button
                                    onPress={() => {
                                        thisComp.setState({
                                            [pregunta["Pregunta"]]: "1"
                                        })
                                    }}
                                    color = {(thisComp.state[pregunta["Pregunta"]] === undefined ? "" : thisComp.state[pregunta["Pregunta"]] === "1" ? "red" :"")}
                                    title={pregunta["Respuesta 1"]}
                                />
                                <Button
                                    onPress={() => {
                                        thisComp.setState({
                                            [pregunta["Pregunta"]]: "2"
                                        })
                                    }}
                                    color = {(thisComp.state[pregunta["Pregunta"]] === undefined ? "" : thisComp.state[pregunta["Pregunta"]] === "2" ? "red" :"")}
                                    title={pregunta["Respuesta 2"]}/>
                                <Button
                                    onPress={() => {
                                        thisComp.setState({
                                            [pregunta["Pregunta"]]: "3"
                                        })
                                    }}
                                    color = {(thisComp.state[pregunta["Pregunta"]] === undefined ? "" : thisComp.state[pregunta["Pregunta"]] === "3" ? "red" :"")}
                                    title={pregunta["Respuesta 3"]}/>
                                <Button
                                    onPress={() => {
                                        thisComp.setState({
                                            [pregunta["Pregunta"]]: "4"
                                        })
                                    }}
                                    color = {(thisComp.state[pregunta["Pregunta"]] === undefined ? "" : thisComp.state[pregunta["Pregunta"]] === "4" ? "red" :"")}
                                    title={pregunta["Respuesta 4"]}/>
                                <Button
                                    onPress={() => {
                                        thisComp.setState({
                                            [pregunta["Pregunta"]]: "5"
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
                <Button title={"Listo"}
                        onPress={console.log(this.state)}/>
            </ScrollView>
        )
    }
}

export default Preguntas