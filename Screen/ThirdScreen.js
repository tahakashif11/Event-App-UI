import React from 'react';
import { StyleSheet, Text, SafeAreaView, TextInput, View, TouchableOpacity, Image,ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
const ThirdScreen = ({Navigation}) => {
  const navigation = useNavigation();

  return (
    
    
    <ImageBackground source={require('../Assets/backie.png')} resizeMode="cover" style={styles.container}>
    <View style={styles.arrowtop}>
      <Image source={require('../Assets/arrow-left.png')}/>
      </View>
      <View style={styles.signUp}>
      <Image source={require('../Assets/signup.png')}/>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputWithIcon}>
        <Image source={require('../Assets/person.png')}/>
          <TextInput  placeholder='    Full Name' />
        </View>
        <View style={styles.inputWithIcon}>
          <Image source={require('../Assets/Message.png')}/>
          <TextInput  placeholder='   abc@email.com' />
        </View>
        <View style={styles.inputWithIcon}>
          <Image source={require('../Assets/Lock.png')}/>
          <TextInput  placeholder='    Your Password'/>
          <View style={{paddingLeft:120}}>  
        <Image source={require('../Assets/Hidden.png')}/>
        </View>
        </View >
        <View style={styles.inputWithIcon}>
        <Image source={require('../Assets/Lock.png')}/>
          <TextInput  placeholder='     Confirm Password'  />
        <View style={{paddingLeft:100}}>  
        <Image source={require('../Assets/Hidden.png')}/>
        </View>
        </View>
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupText}>Sign Up</Text>
          <View style={styles.arrowContainer}>
            <Image source={require('../Assets/signuparrowoow.png')}/>
            
          </View>
        </TouchableOpacity>
     
      
      <View style={styles.orContainer}>
        <Text style={styles.orText}>OR</Text>
      </View>
      
      
      
      <View style={{paddingBottom:10 }}>
      <TouchableOpacity style={styles.facebookButton}>
        <Image source={require('../Assets/google.jpg')} style={styles.socialIcon} />
        <Text style={styles.googleText}>  Login With Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.facebookButton}>
        <Image source={require('../Assets/facebook.jpg')} style={styles.socialIcon} />
        <Text style={styles.googleText}>  Login With Facebook</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.lastline}>
        <Text style={{color:'#120D26',fontSize:15}}>Already have an account?</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('FourthScreen')}>
        <Text style={{color:'#5669FF',fontSize:15}}>  Sign In</Text>
        </TouchableOpacity>
      </View>
      </View>
      </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  container: {
    width:375,
    height:812,
    backgroundColor: 'white',
    paddingLeft: 21,
    paddingRight:29,

  },
  signUp: {
    color: '#120D26',
    fontSize: 24,
    fontFamily: 'Airbnb Cereal App',
    fontWeight: '400',
    
    textShadowColor: '#000',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 2,
    
  },
  inputContainer: {
    
    
    paddingRight:20,
    background: 'white', borderRadius: 12
  },
  inputWithIcon: {
    width: 317,
    height:56,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:19,
    borderWidth: 1,
    borderColor: '#E4DFDF',
    borderRadius: 19,
    paddingLeft: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 19,
    borderWidth: 1,
    borderColor: '#E4DFDF',
    marginRight: 10,
    marginTop: 20,
    marginBottom:19,
    
  },
  buttonContainer: {
  marginTop:20,
  marginLeft:26,
  
  
  
    
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
  signupText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Airbnb Cereal App',
    fontWeight: '400',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  orContainer: {
    marginTop:40,
    marginLeft: 120,
  },
  orText: {
    color: '#9D9898',
    fontSize: 16,
    fontFamily: 'Airbnb Cereal App',
    fontWeight: 'bold',
    lineHeight: 34,
  },
  facebookButton: {
    width: 273,
    height: 50,
    backgroundColor: 'white',
    
    borderRadius: 12,
    
    borderColor: '#E4DFDF',   
    marginRight: 60,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:10
  },
  socialIcon: {
    width: 29,
    height: 29,
    marginRight: 10,
  },
  googleText: {
    color: '#120D26',
    fontSize: 16,
    fontFamily: 'Airbnb Cereal App',
    fontWeight: '400',
    lineHeight: 25,
  },
  arrowContainer: {
    position: 'absolute',
    right: 20, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowLeft: {
    width: 30,
    height: 30,
    position: 'absolute',
    backgroundColor: '#3D56F0',
    borderRadius: 9999,
  },
  arrowstyle: {
    color: 'white',
    fontSize: 24,
  },
  lastline: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingTop: 0,
  },
  arrowtop:{
    paddingTop:11,
    paddingBottom:15,
  }
});
export default ThirdScreen;