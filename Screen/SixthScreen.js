import { StyleSheet, Text, View, TextInput, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import SeventhScreen from './SeventhScreen';
const FifthScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
        <View style={styles.arrowtop}>
        <Image source={require('../Assets/arrow-left.png')}/>
        </View>
            <View style={styles.vericontaintext}>
                <Text style={styles.veri}>
                Verification
                </Text>
                <Text style={styles.number}>
                We’ve send you the verification{'\n'} code on +1 2620 0323 7631
                </Text>
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.inputWithIcon}>
                    <TextInput style={styles.otpInput} placeholder="4" maxLength={1} keyboardType="numeric" />
                    <TextInput style={styles.otpInput} placeholder="4" maxLength={1} keyboardType="numeric" />
                    <TextInput style={styles.otpInput} placeholder="-" maxLength={1} keyboardType="numeric" />
                    <TextInput style={styles.otpInput} placeholder="-" maxLength={1} keyboardType="numeric" />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('SeventhScreen')}>
                        <Text style={styles.loginText}>VERIFY</Text>
                        <View style={styles.arrowContainer}>
            <Image source={require('../Assets/signuparrowoow.png')}/>
            
          </View>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row',marginTop:24,marginLeft:114}}>
                <Text style={{color: '#120D26',
                fontSize: 15,
                fontFamily: 'Airbnb Cereal App',
                fontWeight: '400',
                lineHeight: 25,
                paddingRight:5
            }}>
                Resend Code in 
                </Text>
                <Text style={{color: 'blue',
                fontSize: 15,
                fontFamily: 'Airbnb Cereal App',
                fontWeight: '400',
                lineHeight: 25,}}>
                0.20</Text>
                </View>
            </View>
        </View>
    )
}

export default FifthScreen

const styles = StyleSheet.create({
    arrowtop: {
        paddingTop: 15,
    },
    veri: {
        color: '#120D26',
        fontSize: 24,
        fontFamily: 'Airbnb Cereal App',
        fontWeight: '500',
        paddingBottom: 12
    },
    number: {
        color: '#120D26',
        fontSize: 15,
        fontFamily: 'Airbnb Cereal App',
        fontWeight: '400',
        lineHeight: 25,
    },
    container: {
        paddingLeft: 15,
        marginTop: 20,
    },
    vericontaintext: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    inputContainer: {
        width: '100%',
        marginTop: 20,
        paddingRight: 20,
        paddingBottom: 30,
    },
    inputWithIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    otpInput: {
        width: 55,
        height: 55,
        borderWidth: 1,
        borderColor: '#E4DFDF',
        borderRadius: 19,
        textAlign: 'center',
        fontSize: 20,
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
      
});
