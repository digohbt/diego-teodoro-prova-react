import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon  from  'react-native-vector-icons/FontAwesome'
export default (props) => {
    return (
        <View style={styles.containerPrin}>
            <View style={styles.container}>
            <Icon  name={props.name} color={'#186CA0'} size={40} onPress={() => props.navigation.openDrawer()}  /> 
                <View style={styles.containersegundo} >
                    <Text style={ [styles.text, {color:props} ]} >
                        {props.numero}
                    </Text>
                    <Text>
                        {props.titulo}
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerPrin : {
        width:"100%",
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
    },
    container: {
        width:"90%",
        height:120,
        borderWidth :3,
        borderColor:"#fff",
        backgroundColor:'#fff',
        borderRadius:4,
        borderTopColor:"#1081E5",
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:"center",
        padding:20
        
        
    },
    containersegundo : {
     
    },
    text: {
        fontSize:30,
        fontWeight:'bold'
    }

})