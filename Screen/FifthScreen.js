import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
const FifthScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <View style={styles.arrowtop}>
      <Image source={require('../Assets/arrow-left.png')}/>
      </View>
      <View  style={styles.vericontaintext}>
      <Text style={styles.veri}>
      Resset Password
      </Text>
      <Text style={styles.number}>
      Please enter your email address to{'\n'} request a password reset
      </Text>
      </View>
      <View style={styles.inputContainer}>
      <View style={styles.inputWithIcon}>
      <Image source={require('../Assets/Message.png')}/>
      <TextInput  placeholder='   abc@email.com' />
    </View>
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loginButton} onPress={()=>navigation.navigate('SixthScreen')}>
          <Text style={styles.loginText}>SEND</Text>
          <View style={styles.arrowContainer}>
            <Image source={require('../Assets/signuparrowoow.png')}/>
            
          </View>
        </TouchableOpacity>
      </View>
        
      </View>
    </View>
  )
}

export default FifthScreen

const styles = StyleSheet.create({
    arrowtop:{
        paddingTop:15,  
    },
    veri:{
        color: '#120D26',
fontSize: 24,
fontFamily: 'Airbnb Cereal App',
fontWeight: '500',
paddingBottom:12


    },
    number:{
        color: '#120D26',
fontSize: 15,
fontFamily: 'Airbnb Cereal App',
fontWeight: '400',
lineHeight: 25,

    },
    container:{
        paddingLeft:15,
        marginTop:20,

    },
    vericontaintext:{
        paddingTop:10,
        paddingBottom:10
    },
    inputContainer: {
        
        width: '100%',
        marginTop: 20,
        paddingRight: 20,
        paddingBottom:30,
      },
      inputWithIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#E4DFDF',
        borderRadius: 19,
        paddingLeft: 10,
      },
      buttonContainer: {
        marginTop: 20,
      },
      loginButton: {
        width: 271,
    height: 58,
        backgroundColor: '#5669FF',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#6F7DC8',
       
        paddingRight: 20,
        shadowOpacity: 0.25,
        marginLeft: 27,
        position: 'relative',
      },
      loginText: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Airbnb Cereal App',
        fontWeight: '400',
        textTransform: 'uppercase',
        letterSpacing: 1,
      },
      arrowContainer: {
        position: 'absolute',
        right: 20, 
        justifyContent: 'center',
        alignItems: 'center',
      },
      signupButton: {
        width: 271,
        height: 58,
        backgroundColor: '#5669FF',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#6F7DC8',
        shadowOffset: { width: 0, height: 10 },
        
        shadowOpacity: 0.25,
        
        position: 'relative',
        paddingRight:20,
      },
})