import { renderHook, act } from "@testing-library/react-hooks";
import userWeather from "../../api/userWeather";

let userGeoLocation = jest.mock("../../utils/userGeoLocation");

userWeather.coordinates = [12.2, 14.3];
test("should call fetchAPI() if coordinates are retrieved", async () => {
  const { result } = renderHook(() => userWeather());
  expect(result).toBeDefined();
});

it("should set location if permisions are not granted", async () => {
  userGeoLocation = Promise.resolve([1, 2]);
  userGeoLocation.then((value) => {
    expect(userWeather.coordinates).toEqual(value);
  });
});
