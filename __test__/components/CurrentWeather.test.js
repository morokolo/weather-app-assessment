import "react-native";
import React from "react";
import CurrentWeather from "../../components/CurrentWeather";
import renderer from "react-test-renderer";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("should render the App component with  send props", () => {
  const tree = renderer.create(<CurrentWeather />).toJSON();
  expect(tree).toMatchSnapshot();
});
