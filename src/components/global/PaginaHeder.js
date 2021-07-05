import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { color } from 'react-native-reanimated'

export default (props) => {
    return (
        <View style={styles.container}>
            <Text> { props.titulo}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width:"100%",
        height:20,
        padding:20
    }
})