import { StyleSheet, Text, TouchableOpacity, View ,NativeModules} from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={{backgroundColor:"white",flex:1,justifyContent:"center",alignItems:"center"}} >
      <TouchableOpacity style={{ backgroundColor:"lightblue",width:"30%",height:"4%",justifyContent:"center",alignItems:"center"
      }} 
       onPress={() => NativeModules.ActivityStarter.navigateToLoginActivity()}
      // onPress={() => alert('knjhvgf')}

      >
        <Text style={{fontWeight:'800'}} >Button</Text>
      </TouchableOpacity>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})