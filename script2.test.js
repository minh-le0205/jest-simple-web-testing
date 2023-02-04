const fetch = require("node-fetch");

const swapi = require("./script2");

// Jet working with async/await function, always use return
it("calls swapi to get people", () => {
  expect.assertions(1);
  return swapi.getPeople(fetch).then((data) => {
    expect(data.count).toEqual(82);
  });
});

// Mock Fetch
it("get People return count and results", () => {
  const mockFetch = jest.fn().mockReturnValue(
    Promise.resolve({
      json: () =>
        Promise.resolve({
          count: 87,
          results: [0, 1, 2, 3, 4, 5],
        }),
    })
  );

  expect.assertions(3);

  return swapi.getPeople(mockFetch).then((data) => {
    expect(mockFetch.mock.calls.length).toBe(1);
    expect(mockFetch).toBeCalledWith("https://swapi.dev/api/people");
    expect(data.count).toEqual(87);
  });
});
