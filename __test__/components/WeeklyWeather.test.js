import "react-native";
import React from "react";
import WeeklyWeather from "../../components/WeeklyWeather";
import renderer from "react-test-renderer";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("should render the WeeklyWeather functional component", () => {
  const tree = renderer.create(<WeeklyWeather />).toJSON();
  expect(tree).toMatchSnapshot();
});
