import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";
import bgColorDictionary from "../utils/bgColorDictionary";
import iconDictionary from "../utils/iconDictionary";

export default function WeeklyWeather({ forecast }) {
  return (
    <View>
      {forecast.daily.slice(0, 1).map((todaysHighLow, index) => {
        let temparatures = todaysHighLow.temp;
        return (
          <View key={index} style={[styles.weekListContainer, styles.bordered]}>
            <View style={styles.weekListContainerItem}>
              <Text style={styles.text}>{temparatures.min}°</Text>
              <Text style={styles.text}>min</Text>
            </View>
            <View style={styles.weekListContainerItem}>
              <Text style={[styles.text, styles.selfAlign]}>
                {forecast.current.temp}°
              </Text>
              <Text style={[styles.text, styles.selfAlign]}>Current</Text>
            </View>
            <View style={styles.weekListContainerItem}>
              <Text style={[styles.text, styles.selfAlign]}>
                {temparatures.max}°
              </Text>
              <Text style={[styles.text, styles.selfAlign]}>max</Text>
            </View>
          </View>
        );
      })}

      {forecast.daily.slice(0, 5).map((dayForecast, index) => {
        const weather = dayForecast.weather[0];
        var dt = new Date(dayForecast.dt * 1000);
        var options = {
          weekday: "long",
        };

        return (
          <View
            key={index}
            style={[
              styles.weekListContainer,
              { backgroundColor: bgColorDictionary[forecast.current.icon] },
            ]}
          >
            <View style={styles.weekListContainerItem}>
              <Text style={styles.text}>
                {dt.toLocaleDateString("en", options)}
              </Text>
            </View>
            <View style={styles.weekListContainerItem}>
              <Image
                style={styles.smallIcon}
                source={iconDictionary[weather.icon] || iconDictionary["01d"]}
              />
            </View>
            <View style={styles.weekListContainerItem}>
              <Text style={[styles.dayTemp, styles.text]}>
                {Math.round(dayForecast.temp.max)}°
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  weekListContainer: {
    flexBasis: 60,
    flexDirection: "row",
    padding: 15,
    paddingBottom: 0,
  },
  weekListContainerItem: {
    flex: 1,
  },
  centerContent: {
    alignContent: "center",
  },
  text: {
    color: colors.white,
  },
  bordered: {
    borderBottomColor: colors.white,
    borderBottomWidth: 1,
    flexBasis: 70,
  },
  selfAlign: {
    alignSelf: "center",
  },
  title: {
    width: "100%",
    textAlign: "center",
    fontSize: 42,
    color: "#e96e50",
  },
  subtitle: {
    fontSize: 24,
    marginVertical: 12,
    marginLeft: 4,
    color: "#e96e50",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  current: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
  },
  currentTemp: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  currentDescription: {
    width: "100%",
    textAlign: "center",
    fontWeight: "200",
    fontSize: 24,
    marginBottom: 24,
  },
  hour: {
    padding: 6,
    alignItems: "center",
  },
  day: {
    flexDirection: "row",
  },
  dayDetails: {
    justifyContent: "center",
  },
  dayTemp: {
    marginLeft: 12,
    alignSelf: "center",
    fontSize: 20,
  },
  largeIcon: {
    width: 250,
    height: 200,
  },
  smallIcon: {
    width: 30,
    height: 30,
    alignSelf: "center",
  },
});
