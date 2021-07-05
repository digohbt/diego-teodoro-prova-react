import React from 'react'
import { View, Text, StyleSheet ,TextInput } from 'react-native'

export default (props) => {

    function atualiza ( text) {

        props.settState( props.nome = text)
    }
    return (
        <TextInput
        placeholder="nome"
        style={styles.input}
        onChangeText={ (text) =>  atualiza(text) }
        
      />
    )
}

const styles = StyleSheet.create({
    container: {

    },
    input : {
        backgroundColor:"#ccc",
        width:300
    }
})