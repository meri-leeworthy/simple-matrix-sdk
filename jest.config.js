/** @type {import('jest').Config} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "./FixJSDOMEnvironment.ts",
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
};
