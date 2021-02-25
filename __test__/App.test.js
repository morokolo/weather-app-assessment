import "react-native";
import React from "react";
import App from "../App";
import renderer from "react-test-renderer";
import WeatherForecast from "../screens/WeatherForecast";

it("should render the App component", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
