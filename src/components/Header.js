import React from 'react'
import { View, Text, StyleSheet , TouchableOpacity , Image , TextInput } from 'react-native'
import Icon  from  'react-native-vector-icons/FontAwesome'
import foto from '../../assets/images/profileimg.jpg'

export default (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Icon  name='caret-right' color={'#186CA0'} size={40} onPress={() => props.navigation.openDrawer()}  /> 
            </TouchableOpacity>
            
            <View  style={styles.containerheder}  >
                <View  >
                    <Image style={styles.containerImg} source={foto} /> 
                </View>
                <TextInput  placeholder="Search here......" style={styles.containerinpt}  />  
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        padding:30,
        backgroundColor:"#fff"
    },
    containerImg :{
        width:50,
        height:50,
        borderRadius:50
    },
    containerinpt : {
        width: "70%",
        height:40,
        marginTop:20,
        backgroundColor: "#eee",
        padding:10

     
    },
    containerheder : {
        flex:1,
        justifyContent:'space-around',
        alignItems:'flex-end'
    }
})


{/* <TouchableOpacity>
                <Text onPress={ () => props.navigation.navigate('Home') }> logo </Text>
</TouchableOpacity> */}