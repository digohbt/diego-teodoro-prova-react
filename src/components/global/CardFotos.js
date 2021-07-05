import React from 'react'
import { View, Text, StyleSheet ,Image } from 'react-native'
import Header from '../Header'

export default (props) => {
    return (
        <View style={styles.container}>
            <View  >
                <Image style={styles.containerImg} source={require('../../../assets/images/cart.jpg')} /> 
            </View>
            <View  style={styles.containertext} >
                <Text>O conceito de texto pode variar a depender da perspectiva teórica adotada para estudá-lo. A palavra texto, ao longo da história, foi ganhando diferentes sentidos, de modo que novas construções foram compreendidas como tal.
                    </Text> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerImg: {
        width:350,
        height:200
        
    },
    containertext :{
        justifyContent:'center',
        alignItems:'center'
    }
})