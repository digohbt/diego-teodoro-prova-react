import React from 'react'
import { View, Text, StyleSheet , Button, ScrollView} from 'react-native'
import Constants from 'expo-constants'
import Header from '../components/Header'
import { StatusBar } from 'expo-status-bar';


import PaginaHeder from '../components/global/PaginaHeder';
import CartaoPrincipal from '../components/CartaoPrincipal';
import CardBar from '../components/CardBar';


export default (props) => {
    return (
        <>
          <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
       />

        <Header navigation={props.navigation} /> 
        <View style={styles.container}>
            <PaginaHeder  titulo=" Home / Dashboard"/> 
            <ScrollView>
                <CartaoPrincipal titulo="Total User" name="users" numero="25.k" cor="#1081E5"  /> 
                <CartaoPrincipal titulo="Total User" name="eye" numero="25.k" cor="#707070"  /> 
                <CartaoPrincipal titulo="Total User" name="folder-o" numero="25.k" cor="#E54A10"  /> 
                <CartaoPrincipal titulo="Total User" name="shopping-cart" numero="25.k" cor="#16E510"  /> 
            
                
                <CardBar titulo="bar chart"  sub=" Upadad 2 hours ago"/>
                <CardBar titulo="line chart"  sub=" Upadad 2 hours ago"/>
                

            </ScrollView>

        </View>
        </>
    )
}



const styles = StyleSheet.create({
    container: {
        flex :1 ,
        backgroundColor:'#E7E8E8',
       
    }
})

// titulo="Total User" name="users" numero="25.k"