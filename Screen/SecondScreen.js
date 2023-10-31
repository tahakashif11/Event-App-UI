import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { COLORS, SIZES } from '../constants/theme';
import { useNavigation } from '@react-navigation/native';

const slides = [
  {
    key: '1',
    title: 'Explore Upcoming and Nearby Events',
    description: 'In publishing and graphic design, Lorem is a placeholder text commonly',
    image: require('../Assets/ok.png')
  },
  {
    key: '2',
    title: 'Web Has Modern Events Calendar Feature',
    description: 'In publishing and graphic design, Lorem is a placeholder text commonly',
    image: require('../Assets/image2.png')
  },
  {
    key: '3',
    title: 'Look Up More Events or Activities Nearby on the Map',
    description: 'In publishing and graphic design, Lorem is a placeholder text commonly',
    image: require('../Assets/image3.png')
  }
]

export default function SecondScreen() {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const buttonLabel = (label) => (
    <View style={{
      padding: 12
    }}>
      <Text style={{
        color: COLORS.white,
        fontWeight: '600',
        fontSize: SIZES.h4,
      }}>
        {label}
      </Text>
    </View>
  );

  const renderSlide = (item) => (
    <View style={{
      flex: 1,
      alignItems: 'center',
      padding: 15,
      paddingTop: 40,
    }}>
      <Image
        source={item.image}
        style={{
          width: 375,
          height: 400,
        }}
        resizeMode="contain"
      />

      <View style={{
        backgroundColor: COLORS.blue,
        borderRadius: 20,
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        padding: 38,
        alignItems: 'center',
        width: 375,
        height: 288,
      }}>
        <Text style={{
          fontWeight: 'bold',
          color: COLORS.white,
          fontSize: SIZES.h1,
          textAlign: 'center',
        }}>
          {item.title}
        </Text>
        <Text style={{
          textAlign: 'center',
          paddingTop: 5,
          color: COLORS.white,
        }}>
          {item.description}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      {renderSlide(slides[currentIndex])}
      <AppIntroSlider
        data={slides}
        renderItem={renderSlide}
        activeDotStyle={{
          backgroundColor: COLORS.white,
          width: 15,
        }}
        showSkipButton
        renderNextButton={() => buttonLabel("Next")}
        renderSkipButton={() => buttonLabel("Skip")}
        renderDoneButton={() => buttonLabel("Done")}
        onSlideChange={(index) => setCurrentIndex(index)}
        onDone={() => {
          navigation.navigate('ThirdScreen')
        }}
      />
    </View>
  );
}