import React, { Component } from 'react';
import {TextInput, Image, Button, View, ScrollView} from "react-native";

class Pago extends Component{
    constructor(props) {
        super(props);
        this.state = {
            textNombreApellido: 'Nombres y Apellidos',
            textCorreo: 'Correo Eletrónico',
            textIdentificacion: 'Identificación',
            textNumTarjeta: 'Número de Tarjeta',
            textFecha: 'Fecha Caducidad',
        };
    }
    calcularBingo=()=>{
        let thisComp = this
        const average = thisComp.props.navigation.getParam('valorPerfil');
        const estilo = thisComp.props.navigation.getParam('estilo')
        thisComp.props.navigation.navigate('Bingo',{
            valorPerfil: average,
            estilo: estilo
        })
    }

    render(){
        const { navigation } = this.props;
        const valorPerfil = navigation.getParam('valorPerfil');
        const styles = navigation.getParam('estilo')
        return(
            <ScrollView>
                <View style={styles.container}>
                    <Image
                        style = {styles.logo}
                        source={require('../Assets/CubiM.png')}
                    />
                </View>
                <TextInput
                    style={{height: 40, marginHorizontal:'10%', marginBottom:'2.5%', marginTop: '25%', borderColor:'gray', borderWidth: 1}}
                    onChangeText={(textNombreApellido) => this.setState({textNombreApellido})}
                    value={this.state.textNombreApellido}
                />
                <TextInput
                    style={{height: 40, marginHorizontal:'10%', marginBottom:'2.5%', borderColor:'gray', borderWidth: 1}}
                    onChangeText={(textCorreo) => this.setState({textCorreo})}
                    value={this.state.textCorreo}
                />
                <TextInput
                    style={{height: 40, marginHorizontal:'10%', marginBottom:'2.5%', borderColor:'gray', borderWidth: 1}}
                    onChangeText={(textIdentificacion) => this.setState({textIdentificacion})}
                    value={this.state.textIdentificacion}
                />
                <TextInput
                    style={{height: 40, marginHorizontal:'10%', marginBottom:'2.5%', borderColor:'gray', borderWidth: 1}}
                    onChangeText={(textNumTarjeta) => this.setState({textNumTarjeta})}
                    value={this.state.textNumTarjeta}
                />
                <TextInput
                    style={{height: 40, marginHorizontal:'10%', marginBottom:'2.5%', borderColor:'gray', borderWidth: 1}}
                    onChangeText={(textFecha) => this.setState({textFecha})}
                    value={this.state.textFecha}
                />
                <Button title={"Pagar"}
                        onPress={this.calcularBingo}/>
            </ScrollView>
        )
    }
}



export default Pago