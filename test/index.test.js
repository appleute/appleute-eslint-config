const path = require("path");

const getErrors = require("./utils/getErrors.js");

describe("default config", () => {
  it("must be valid", async () => {
    const result = await getErrors("default.js", path.join(__dirname, "fixtures/sample.ts"));

    expect(result[0].errorCount).toEqual(0);
  });
});

describe("node config", () => {
  it("must be valid", async () => {
    const result = await getErrors("node.js", path.join(__dirname, "fixtures/sample.ts"));

    expect(result[0].errorCount).toEqual(0);
  });
});

describe("react config", () => {
  it("must be valid", async () => {
    const result = await getErrors("react.js", path.join(__dirname, "fixtures/sample.ts"));

    expect(result[0].errorCount).toEqual(0);
  });
});

describe("next config", () => {
  it("must be valid", async () => {
    const result = await getErrors("next.js", path.join(__dirname, "fixtures/sample.ts"));

    console.log(result[0]);
    expect(result[0].errorCount).toEqual(0);
  });
});
