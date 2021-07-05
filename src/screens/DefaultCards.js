import React from 'react'
import { View, Text, StyleSheet , Button, ScrollView} from 'react-native'
import Constants from 'expo-constants'
import Header from '../components/Header'
import PaginaHeder from '../components/global/PaginaHeder'
import TelaCard from '../components/TelaCard'

import { StatusBar } from 'expo-status-bar';
export default (props) => {
    return (
        <>
        <StatusBar
            barStyle='dark-content'
            backgroundColor='transparent'
            translucent
       />
        <View style={styles.container}>
             <Header navigation={props.navigation} /> 
             <PaginaHeder  titulo=" Home / Elements/ Cards"/> 

             <ScrollView>
                    <TelaCard />
                    <TelaCard />
                    <TelaCard />
                    <TelaCard />
                    <TelaCard />
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