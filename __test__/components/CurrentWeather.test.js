import "react-native";
import React from "react";
import CurrentWeather from "../../components/CurrentWeather";
import renderer from "react-test-renderer";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

let current = {
  description: "clear sky",
  icon: "01n",
  id: 800,
  main: "Clear",
};

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
};

it("should render the App component with  send props", () => {
  const tree = renderer
    .create(<CurrentWeather forecast={forecast} current={current} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("should render children, containing grand children", () => {
  const tree = renderer
    .create(<CurrentWeather forecast={forecast} current={current} />)
    .toJSON();

  expect(tree.children.length).toBe(3);
});

it("renders a Image element type", () => {
  const tree = renderer
    .create(<CurrentWeather forecast={forecast} current={current} />)
    .toJSON();

  expect(tree.children[0].type).toBe("Image");
});

it("renders a Image element type", () => {
  const tree = renderer
    .create(<CurrentWeather forecast={forecast} current={current} />)
    .toJSON();

  expect(tree.children[2].type).toBe("View");
});

it("renders a Image element type", () => {
  const tree = renderer
    .create(<CurrentWeather forecast={forecast} current={current} />)
    .toJSON();

  expect(tree.children[2].type).toBe("View");
});
