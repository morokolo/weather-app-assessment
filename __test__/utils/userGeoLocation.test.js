import { renderHook, act } from "@testing-library/react-hooks";
import userGeoLocation from "../../utils/userGeoLocation";

let locationPermissions = jest.mock("expo-location");

it("should call loadGeoLocation() if location is false", async () => {
  const { result } = renderHook(() => userGeoLocation());
  expect(result).toBeDefined();
});

it("should set location if permisions are not granted", async () => {
  locationPermissions = Promise.resolve({ status: "granted" });

  locationPermissions.then((value) => {
    expect(userGeoLocation.status).toEqual(value.status);
  });
});
