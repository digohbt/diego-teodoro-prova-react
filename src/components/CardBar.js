import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon  from  'react-native-vector-icons/FontAwesome'
export default (props) => {
    return (
        <View style={styles.containerPrin}>
            <View style={styles.container}>
                <View style={styles.header} >
                    <Text  style={styles.text}  > {props.titulo}</Text>
                </View> 
                <View style={styles.footer} >
                    <Text  style={styles.text2} >{props.sub}</Text>
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
        
        backgroundColor:'#fff',
        borderRadius:4,
        justifyContent:'space-between',
        alignItems:"center",
        padding:20
    },
    text: {
        fontSize:20,
        color:"#8261BF"
    },
    header: {
        color:'#7B7A7C',
        fontSize:20,
        marginBottom:250,
        borderEndWidth:1,
        borderTopColor:"#ccc"
    }

})