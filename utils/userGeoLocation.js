import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import { Alert } from "react-native";

export default function userGeoLocation() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (!location) {
      loadGeoLocation();
    }
  }, []);

  const loadGeoLocation = async () => {
    const { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission to access location was denied");
    }

    let location = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true,
    });

    setLocation([location.coords.latitude, location.coords.latitude]);
  };
  return location;
}
