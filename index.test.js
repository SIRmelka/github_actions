const sum = require("./");

describe("Testing sum function", () => {
  it("sum of 2 + 2 must return 4", () => {
    expect(sum(2, 2)).toEqual(4);
  });
});
