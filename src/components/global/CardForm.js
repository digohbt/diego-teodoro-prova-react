import React, { Component } from 'react'
import { View, Text, StyleSheet , TextInput} from 'react-native'
import Input from '../Input'

const initialState = {
    nome:""
}
export default class classname extends Component {

    state = {...initialState}

    render() {
        return (
            <View style={styles.container}>
                
                {/* <Input settState={this.setState}   nome={this.nome}/> */}

                <TextInput
                    placeholder="nome"
                    style={styles.input}
                    onChangeText={ (text) =>  this.setState(this.nome) } />
                    <Text style={ {color :'#E7E8E8'}}> {this.state.nome} </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {

    },
    input : {
        backgroundColor:"#ccc",
        width:300
    },
    
})