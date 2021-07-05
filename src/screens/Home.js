import React from 'react'
import { View, Text, StyleSheet , Button} from 'react-native'
import Constants from 'expo-constants'
import Header from '../components/Header'

export default (props) => {
    return (
        <>
        <Header navigation={props.navigation} /> 
        <View style={styles.container}>
            <Text></Text>
            {/* <Button title="it para produto"  onPress={ () => props.navigation.navigte('Produtos')} / > 
            <Button title="it para home"   onPress={ () => props.navigation.navigte('Categoria')}  / >  */}
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex :1 ,
        paddingTop:Constants.statusBarHeight
    }
})