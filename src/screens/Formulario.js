import React from 'react'
import { View, Text, StyleSheet , Button, ScrollView} from 'react-native'
import Constants from 'expo-constants'
import Header from '../components/Header'
import { StatusBar } from 'expo-status-bar';


import PaginaHeder from '../components/global/PaginaHeder';
import CardForm from '../components/global/CardForm';


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
            <PaginaHeder  titulo=" Home / Forms"/> 
            <ScrollView>
            <CardForm>
                
            </CardForm>
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
