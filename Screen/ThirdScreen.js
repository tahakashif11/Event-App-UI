import React from 'react';
import { StyleSheet, Text, SafeAreaView, TextInput, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
const ThirdScreen = ({Navigation}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
    
    <View style={styles.arrowtop}>
      <Icon name="arrow-left" size={20}/>
      </View>
      <Text style={styles.signUp}>Sign Up</Text>
      
      <View style={styles.inputContainer}>
        <View style={styles.inputWithIcon}>
          <Icon name="user" size={20} color="#807A7A" style={styles.inputIcon} />
          <TextInput  placeholder='Full Name' />
        </View>
        <View style={styles.inputWithIcon}>
          <Icon name="envelope" size={20} color="#807A7A"  style={styles.inputIcon} />
          <TextInput  placeholder='abc@email.com' />
        </View>
        <View style={styles.inputWithIcon}>
          <Icon name="lock" size={20} color="#807A7A"  style={styles.inputIcon} />
          <TextInput  placeholder='Password' secureTextEntry={true} />
        </View >
        <View style={styles.inputWithIcon}>
          <Icon name="lock" size={20} color="#807A7A"  style={styles.inputIcon} />
          <TextInput  placeholder='Confirm Password' secureTextEntry={true} />
        </View>
      </View>
      <View style={{backgroundColor:['#807A7A','white'],flex:1,marginTop:10,paddingBottom:19,}}>
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
        <Image source={require('../Assets/facebook.jpg')} style={styles.socialIcon} />
        <Text style={styles.googleText}>Login With Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.facebookButton}>
        <Image source={require('../Assets/google.jpg')} style={styles.socialIcon} />
        <Text style={styles.googleText}>Login With Google</Text>
      </TouchableOpacity>
      <View style={styles.lastline}>
        <Text style={{color:'#120D26',fontSize:15}}>Already have an account?</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('FourthScreen')}>
        <Text style={{color:'#5669FF',fontSize:15}}>Sign In</Text>
        </TouchableOpacity>
      </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 15,
    paddingBottom:10,
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
    paddingRight:20
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
  input: {
    flex: 1,
    padding: 10,
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
    width: '70%',
    height: 50,
    backgroundColor: '#5669FF',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#6F7DC8',
    shadowOffset: { width: 0, height: 10 },
    paddingRight:35,
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
    paddingLeft: 60,
    paddingTop: 29,
  },
  arrowtop:{
    paddingTop:15
  }
});

export default ThirdScreen;
