const generateOtp = require("../utilities/generateOtp");

test("generateOtp - should return a value of type string", () => {
  const otp = generateOtp();
  expect(typeof otp).toBe("string");
});

test("generateOtp - should return a value with 5 characters", () => {
  const otp = generateOtp();
  expect(otp.length).toBe(5);
});

test("generateOtp - should return a different value on subsequesnt calls", () => {
  const otp1 = generateOtp();
  const otp2 = generateOtp();
  expect(otp1).not.toBe(otp2);
});

test("generateOtp - should return only numeric characters", () => {
  const otp = generateOtp();
  expect(/^\d+$/.test(otp));
});
