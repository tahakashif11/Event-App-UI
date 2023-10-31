import React from 'react';
import { StyleSheet, Text, SafeAreaView, TextInput, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Image
          source={require('../Assets/yess.png')}
          style={styles.icon}
        />
        <Text style={styles.textPart1}>vent</Text>
        <Text style={styles.textPart2}>Hub</Text>
      </View>
      <Text style={styles.signUp}>Login</Text>

      <View style={styles.inputContainer}>
        <View style={styles.inputWithIcon}>
          <Icon name="envelope" size={20} color="#807A7A" style={styles.inputIcon} />
          <TextInput placeholder="Email" />
        </View>
        <View style={styles.inputWithIcon}>
          <Icon name="lock" size={20} color="#807A7A" style={styles.inputIcon} />
          <TextInput placeholder="Password" secureTextEntry={true} />
        </View>
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
        </TouchableOpacity>
      </View>
      <View style={styles.orContainer}>
        <Text style={styles.orText}>OR</Text>
      </View>

      <TouchableOpacity style={styles.facebookButton}>
        <Image source={require('../Assets/facebook.jpg')} style={styles.socialIcon} />
        <Text style={styles.googleText}>Login With Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.facebookButton}>
        <Image source={require('../Assets/google.jpg')} style={styles.socialIcon} />
        <Text style={styles.googleText}>Login With Google</Text>
      </TouchableOpacity>
      

      <View style={styles.lastline}>
        <Text style={{ color: '#120D26', fontSize: 15 }}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('ThirdScreen')}>
          <Text style={{ color: '#5669FF', fontSize: 15 }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 15,
    paddingBottom: 10,
  },
  signUp: {
    color: '#120D26',
    fontSize: 24,
    fontFamily: 'Airbnb Cereal App',
    fontWeight: '400',
    paddingTop: 10,
    textShadowColor: '#000',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 2,
  },
  inputContainer: {
    width: '100%',
    marginTop: 20,
    paddingRight: 20,
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
    width: '70%',
    height: 50,
    backgroundColor: '#5669FF',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#6F7DC8',
    shadowOffset: { width: 0, height: 10 },
    paddingRight: 35,
    shadowOpacity: 0.25,
    marginLeft: 60,
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
  lastline: {
    flexDirection: 'row',
    paddingLeft: 60,
    paddingTop: 29,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:79,
    paddingBottom:25
  },
  textPart1: {
    color: '#5669FF',
    fontSize: 45,
    fontFamily: 'Airbnb Cereal App',
    fontWeight: '700',
    lineHeight: 62.19,
  },
  textPart2: {
    color: '#00F8FF',
    fontSize: 45,
    fontFamily: 'Airbnb Cereal App',
    fontWeight: '700',
    lineHeight: 62.19,
  },
  icon: {
    width: 56,
    height: 59,
    marginHorizontal: 5,
  },
  orContainer: {
    marginTop: 15,
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
    width: '80%',
    height: 50,
    backgroundColor: ' #FFF9E9',
    boxShadow: '15px 0px 30px rgba(210.56, 212.14, 226.38, 0.25)',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E4DFDF',
    marginLeft: 40,
    marginTop: 13,
    marginRight: 60,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
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
});

export default LoginScreen;
