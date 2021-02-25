import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";
import iconDictionary from "../utils/iconDictionary";

export default function HourlyWeather({ forecast }) {
  return (
    <View>
      <FlatList
        horizontal
        data={forecast.hourly.slice(0, 24)}
        keyExtractor={(item, index) => index.toString()}
        renderItem={(hour) => {
          const weather = hour.item.weather[0];
          var dt = new Date(hour.item.dt * 1000);
          return (
            <View style={styles.hour}>
              <Text style={styles.hourlyInfo}>
                {dt.toLocaleTimeString().replace(/:\d+ /, " ")}
              </Text>
              <Text style={styles.hourlyInfo}>
                {Math.round(hour.item.temp)}°C
              </Text>
              <Image
                style={styles.smallIcon}
                source={iconDictionary[weather.icon] || iconDictionary["01d"]}
              />
              <Text>{weather.description}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  hourlyInfo: {
    color: colors.white,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    marginLeft: 15,
    fontWeight: "bold",
    color: colors.white,
  },
  hour: {
    padding: 6,
    alignItems: "center",
    backgroundColor: "#57575da6",
  },
  smallIcon: {
    width: 30,
    height: 30,
    marginBottom: 35,
  },
});
