import React, { useEffect } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FirstScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const navigateToNextScreen = setTimeout(() => {
      navigation.navigate('SecondScreen');
    }, 1000);

    return () => clearTimeout(navigateToNextScreen);
  }, [navigation]);

  return (
    <View style={styles.container}>
      
      <View style={styles.textContainer}>
        
        <Image
          source={require('../Assets/yess.png')}
          style={styles.icon}
        />
        <Text style={styles.textPart1}>vent</Text>
        <Text style={styles.textPart2}>Hub</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 375,
    height: 44,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
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
});

export default FirstScreen;
