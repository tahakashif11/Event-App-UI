import React from 'react';
import { StyleSheet, Text, SafeAreaView, TextInput, View, TouchableOpacity } from 'react-native';

const ThirdScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.signUp}>Sign Up</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='Full Name' />
        <TextInput style={styles.input} placeholder='abc@email.com' />
        <TextInput style={styles.input} placeholder='Password' secureTextEntry={true} />
        <TextInput style={styles.input} placeholder='Confirm Password' secureTextEntry={true} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupText}>Sign Up</Text>
          <View style={styles.arrowContainer}>
            <View style={styles.arrowLeft} />
            <Text style={styles.arrowstyle}>-></Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.orContainer}>
        <Text style={styles.orText}>OR</Text>
      </View>

      <TouchableOpacity style={styles.facebookButton}>
        <Text style={styles.googleText}>Login With Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.facebookButton}>
        <Text style={styles.googleText}>Login With Facebook</Text>
      </TouchableOpacity>
      <View style={styles.lastline}>
        <Text>Already have an account?</Text>
        <Text>Sign In</Text>
      </View>
    </SafeAreaView>
  );
}

export default ThirdScreen;

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
    fontWeight: 'bold',
    paddingTop: 50,
    textShadowColor: '#000',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 2,
  },
  inputContainer: {
    width: '100%',
    marginTop: 20,
  },
  input: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 19,
    borderWidth: 1,
    borderColor: '#E4DFDF',
    marginRight: 10,
    marginTop: 12,
  },
  buttonContainer: {
    marginTop: 20,
  },
  signupButton: {
    width: '60%',
    height: 50,
    backgroundColor: '#5669FF',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#6F7DC8',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    marginLeft: 60,
    position: 'relative',
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
    backgroundColor: '#FFFFFFFFFFFFFFFFFFFFFFFFFFFFF',
    boxShadow: '15px 0px 30px rgba(210.56, 212.14, 226.38, 0.25)',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E4DFDF',
    marginLeft: 40,
    marginTop: 13,
    marginRight: 60,
    paddingLeft: 10,
    paddingTop: 10,
  },
  googleText: {
    textAlign: 'center',
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
  arrowstyle:{
    color:'white',
    fontSize:16,

  },
  
  lastline: {
    flexDirection: 'row',
    paddingLeft: 60,
    paddingTop: 18,
  },
});
