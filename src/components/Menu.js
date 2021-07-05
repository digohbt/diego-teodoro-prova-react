import React from 'react'
import { View, Text, StyleSheet , TouchableOpacity, ScrollView} from 'react-native'
import { DrawerItems } from 'react-navigation-drawer'

export default (props) => {
    return (
       <ScrollView>
           <View style={styles.container}>
               <Text> bem vindo !!!!!</Text>
              
           </View>
           <DrawerItems  {...props}/>
       </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      marginTop:30
    }
})