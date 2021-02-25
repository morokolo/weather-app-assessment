import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";
import bgImageDictionary from "../utils/bgImageDictionary";
import iconDictionary from "../utils/iconDictionary";
import HourlyWeather from "./HourlyWeather";

export default function CurrentWeather({ forecast, current }) {
  return (
    <ImageBackground
      blurRadius={2} // added this to make the information more prominent over the background image
      resizeMode="contain"
      style={{
        flex: 1,
      }}
      source={bgImageDictionary[current.icon]}
    >
      <View style={styles.currentContainer}>
        <Text style={styles.currentTemp} testID="text">
          {Math.round(forecast.current.temp)}°
        </Text>
        <Image
          style={styles.temperatureIndicatorIcon}
          source={
            iconDictionary[current.icon] || {
              uri: `http://openweathermap.org/img/wn/${current.icon}@4x.png`,
            }
          }
        />
        <Text style={styles.currentDescription}>{current.description}</Text>
      </View>
      <HourlyWeather forecast={forecast} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  currentTemp: {
    fontSize: 50,
    textAlign: "center",
    color: colors.white,
    fontWeight: "600",
  },
  currentDescription: {
    width: "100%",
    textAlign: "center",
    fontWeight: "500",
    fontSize: 20,
    textTransform: "uppercase",
    color: colors.white,
  },
  currentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temperatureIndicatorIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
  },
});
