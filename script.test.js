const googleSearch = require("./script");

dbMock = ["dog.com", "cheesepuff.com", "disney.com", "dogpitures.com"];

// Grouping
describe("googleSearch", () => {
  it("this is a test", () => {
    // googleSearch("test", dbMock);
    expect("hello").toBe("hello");
  });

  it("This is a google searching test", () => {
    expect(googleSearch("test", dbMock)).toEqual([]);
    expect(googleSearch("dog", dbMock)).toEqual(["dog.com", "dogpitures.com"]);
  });

  it("work with undefined and null input", () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it("does not return more than 3 matches", () => {
    expect(googleSearch(".com", dbMock).length).toEqual(3);
  });
});
