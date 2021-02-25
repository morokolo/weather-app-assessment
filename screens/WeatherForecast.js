import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Platform,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  StatusBar,
} from "react-native";
import userWeather from "../api/userWeather";
import CurrentWeather from "../components/CurrentWeather";
import Loader from "../components/Loader";
import WeeklyWeather from "../components/WeeklyWeather";
import bgColorDictionary from "../utils/bgColorDictionary";

export default function WeatherForecast() {
  const [refreshing, setRefreshing] = useState(false);
  const forecast = userWeather();

  if (!forecast) {
    return <Loader />;
  }
  const current = forecast.current.weather[0];
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        refreshControl={
          <RefreshControl
            onRefresh={() =>
              console.log("refactor the hooks properly in order to refresh")
            }
            refreshing={refreshing}
          />
        }
      >
        <View style={styles.weatherSectionContainer}>
          <CurrentWeather forecast={forecast} current={current} />
        </View>
        <View
          style={[
            styles.weatherSectionContainer,
            styles.weekly,
            {
              backgroundColor:
                bgColorDictionary[current.icon] || iconDictionary["02d"],
            },
          ]}
        >
          <WeeklyWeather forecast={forecast} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flex: 1,
    flexDirection: "column",
    marginTop: -25,
  },
  weatherSectionContainer: {
    flex: 1,
    marginTop: -55, //scroll
  },
  safeAreaContainer: {
    height: "100%",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    marginTop: 0,
  },
  weekly: {
    flex: 1,
  },
});
