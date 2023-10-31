import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const FifthScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.arrowtop}>
                <Icon name="arrow-left" size={30}/>
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
                    <TextInput style={styles.otpInput} placeholder="-" maxLength={1} keyboardType="numeric" />
                    <TextInput style={styles.otpInput} placeholder="-" maxLength={1} keyboardType="numeric" />
                    <TextInput style={styles.otpInput} placeholder="-" maxLength={1} keyboardType="numeric" />
                    <TextInput style={styles.otpInput} placeholder="-" maxLength={1} keyboardType="numeric" />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('SixthScreen')}>
                        <Text style={styles.loginText}>VERIFY</Text>
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
});
