import React, { useState, useEffect } from "react";
import axios from "axios";
import userGeoLocation from "../utils/userGeoLocation";
import * as CONSTANTS from "../constants/constants";
import { Alert } from "react-native";

const weatherAPI = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

export default function userWeather() {
  const [weather, setWeather] = useState(null);

  const coordinates = userGeoLocation();

  useEffect(() => {
    if (coordinates) {
      fetchAPI(...coordinates);
    }
  }, [coordinates]);

  const fetchAPI = async (lat, lon) => {
    try {
      const endpoint = `${CONSTANTS.OPEN_WEATHER_URL}&appid=${CONSTANTS.APP_TOKEN}&lat=${lat}&lon=${lon}`;
      const res = await weatherAPI.get(endpoint);
      setWeather(res.data);
    } catch (err) {
      Alert.alert("Failed to connect to the weather service" + err);
    }
  };

  return weather;
}
