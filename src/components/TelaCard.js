import React from 'react'
import { View, Text, StyleSheet  } from 'react-native'
import Icon  from  'react-native-vector-icons/FontAwesome'

import CardFotos from  '../components/global/CardFotos'

export default (props) => {
    return (
        <View style={styles.containerPrin}>
            <View style={styles.container}>
                <Text> Card Columns </Text>


            <View style={styles.container2}>
            <CardFotos />
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
        marginTop:20,

        padding:20
    },
    container2: {
        width:"90%",
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
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