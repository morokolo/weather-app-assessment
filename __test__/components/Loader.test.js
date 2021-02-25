import "react-native";
import React from "react";
import Loader from "../../components/Loader";
import renderer from "react-test-renderer";

it("should render the App component", () => {
  const tree = renderer.create(<Loader />).toJSON();

  expect(tree).toMatchSnapshot();
});
