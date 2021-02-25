import "react-native";
import React from "react";
import WeatherForecast from "../../screens/WeatherForecast";
import renderer from "react-test-renderer";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("should render the WeatherForecast functional component", () => {
  const tree = renderer.create(<WeatherForecast />).toJSON();
  expect(tree).toMatchSnapshot();
});
