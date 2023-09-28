const path = require("path");

const getErrors = require("./utils/getErrors.js");

describe("default config", () => {
  it("must be valid", async () => {
    const result = await getErrors("default.js", path.join(__dirname, "fixtures/sample.ts"));

    expect(result[0].errorCount).toEqual(0);
  });
});

describe("default-experimental config", () => {
  it("must be valid", async () => {
    const result = await getErrors("default-experimental.js", path.join(__dirname, "fixtures/sample.ts"));

    expect(result[0].errorCount).toEqual(0);
  });
});

describe("node config", () => {
  it("must be valid", async () => {
    const result = await getErrors("node.js", path.join(__dirname, "fixtures/sample.ts"));

    expect(result[0].errorCount).toEqual(0);
  });
});

describe("server-nest-experimental config", () => {
  it("must be valid", async () => {
    const result = await getErrors("server-nest-experimental.js", path.join(__dirname, "fixtures/sample.ts"));

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

describe("web-experimental config", () => {
  it("must be valid", async () => {
    const result = await getErrors("web-experimental.js", path.join(__dirname, "fixtures/sample.ts"));

    expect(result[0].errorCount).toEqual(0);
  });
});

describe("web-next-experimental config", () => {
  it("must be valid", async () => {
    const result = await getErrors("web-next-experimental.js", path.join(__dirname, "fixtures/sample.ts"));

    console.log(result[0]);
    expect(result[0].errorCount).toEqual(0);
  });
});
