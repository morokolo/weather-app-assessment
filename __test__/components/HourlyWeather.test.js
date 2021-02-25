import "react-native";
import React from "react";
import HourlyWeather from "../../components/HourlyWeather";
import renderer from "react-test-renderer";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("should render the HourlyWeather component with   props", () => {
  let forecast = {
    current: {
      dt: 1614065857,
      sunrise: 1614005421,
      sunset: 1614045368,
      temp: 12.58,
      feels_like: 10.8,
      pressure: 1022,
      humidity: 71,
      dew_point: 7.47,
      uvi: 0,
      clouds: 20,
      visibility: 10000,
      wind_speed: 1.7,
      wind_deg: 12,
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02n",
        },
      ],
    },
    hourly: [
      {
        dt: 1614063600,
        temp: 12.58,
        weather: [
          {
            id: 801,
            main: "Clouds",
            description: "few clouds",
            icon: "02n",
          },
        ],
      },
    ],
    daily: [
      {
        dt: 1614024000,
        temp: {
          day: 14.99,
          min: 10.05,
          max: 16.96,
          night: 12.58,
          eve: 14.07,
          morn: 10.58,
        },

        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
      },
    ],
  };

  const tree = renderer.create(<HourlyWeather forecast={forecast} />).toJSON();
  expect(tree).toMatchSnapshot();
});
