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

describe("native config", () => {
  it("must be valid", async () => {
    const result = await getErrors("native.js", path.join(__dirname, "fixtures/sample.ts"));

    expect(result[0].errorCount).toEqual(0);
  });
});

describe("web config", () => {
  it("must be valid", async () => {
    const result = await getErrors("web.js", path.join(__dirname, "fixtures/sample.ts"));

    expect(result[0].errorCount).toEqual(0);
  });
});

describe("web-next config", () => {
  it("must be valid", async () => {
    const result = await getErrors("web-next.js", path.join(__dirname, "fixtures/sample.ts"));

    expect(result[0].errorCount).toEqual(0);
  });
});
