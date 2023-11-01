import React from 'react';
import { StyleSheet, Text, SafeAreaView, TextInput, View, TouchableOpacity, Image,ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground source={require('../Assets/backie.png')} resizeMode="cover" style={styles.container}>
      <View style={styles.textContainer}>
        <Image
          source={require('../Assets/yess.png')}
          style={styles.icon}
        />
        <View style={{flexDirection:'row'}}>
        <Text style={styles.textPart1}>Event</Text>
        <Text style={styles.textPart2}>Hub</Text>
        </View>
      </View>
      <Text style={styles.signUp}>Sign in</Text>

      <View style={styles.inputContainer}>
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
      </View>

      <View style={{flexDirection:'row',paddingLeft:10}}>
      <Icon name="toggle-on" size={30} color='blue'/>
      <Text style={{marginTop:5,paddingLeft:10,color:'black',fontSize:15,fontWeight:'600'}}>Remeber me?</Text>
      <TouchableOpacity style={{paddingLeft:60}} onPress={()=>navigation.navigate('FifthScreen')}>
      <Text style={{marginTop:5,paddingLeft:10,color:'black',fontSize:15,fontWeight:'600'}}>Forgot Password?</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Login</Text>
          <View style={styles.arrowContainer}>
            <Image source={require('../Assets/signuparrowoow.png')}/>
            
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.orContainer}>
        <Text style={styles.orText}>OR</Text>
      </View>



      <TouchableOpacity style={styles.facebookButton}>
        <Image source={require('../Assets/google.jpg')} style={styles.socialIcon} />
        <Text style={styles.googleText}>  Login With Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.facebookButton}>
        <Image source={require('../Assets/facebook.jpg')} style={styles.socialIcon} />
        <Text style={styles.googleText}>  Login With Facebook</Text>
      </TouchableOpacity>

      
      

      <View style={styles.lastline}>
        <Text style={{ color: '#120D26', fontSize: 15 }}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('ThirdScreen')}>
          <Text style={{ color: '#5669FF', fontSize: 15 }}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 15,
    
  },
  signUp: {
    color: '#120D26',
    fontSize: 24,
    fontFamily: 'Airbnb Cereal App',
    fontWeight: '700',
    paddingTop: 2,
    lineHeight:31.25
  },
  inputContainer: {
    width: '100%',
    marginTop: 10,
    paddingRight: 20,
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 0.75,
    borderColor: '#E4DFDF',
    borderRadius: 12,
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
    shadowOffset: { width: 0, height: 10 },
    
    shadowOpacity: 0.25,
    marginLeft:30,
    position: 'relative',
    paddingRight:2,
  },
  loginText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Airbnb Cereal App',
    fontWeight: '400',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  lastline: {
    flexDirection: 'row',
    paddingLeft: 80,
    paddingTop: 19,
  },
  textContainer: {
    
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:45,
    paddingBottom:10
  },
  textPart1: {
    color: 'black',
    fontSize: 35,
    fontFamily: 'Airbnb Cereal App',
    fontWeight: '400',
    lineHeight: 62.19,
  },
  textPart2: {
    color: 'black',
    fontSize: 35,
    fontFamily: 'Airbnb Cereal App',
    fontWeight: '400',
    lineHeight: 62.19,
  },
  icon: {
    width: 56,
    height: 59,
    marginHorizontal: 5,
  },
  orContainer: {
    marginTop: 25,
    marginLeft: 150,
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
    
    paddingLeft: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:10,
    marginLeft:30
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
});

export default LoginScreen;
