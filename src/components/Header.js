import React from 'react'
import { View, Text, StyleSheet , TouchableOpacity} from 'react-native'
import Icon  from  'react-native-vector-icons/FontAwesome'

export default (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Icon  name='bars' color={'red'} size={40} onPress={() => props.navigation.openDrawer()}  /> 
            </TouchableOpacity>
            <TouchableOpacity>
                <Text onPress={ () => props.navigation.navigate('Home') }> logo </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent:"center",
        padding:20,
        backgroundColor:"#ccc"
    }
})