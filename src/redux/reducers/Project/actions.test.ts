import * as actions from "./actions";
import * as types from "./actionTypes";

describe("actions", () => {
  it("should create an action to create a new connection without connectedPoints", () => {
    const expectedAction = {
      type: types.CREATE_NEW_CONNECTION,
      ptnum: 37,
      placement: "front",
      color: "black",
      connectedPoints: undefined,
    };
    expect(actions.createNewConnection(37, "front", "black")).toEqual(expectedAction);
  });
  it("should create an action to create a new connection without connectedPoints", () => {
    const expectedAction = {
      type: types.CREATE_NEW_CONNECTION,
      ptnum: 37,
      placement: "front",
      color: "black",
      connectedPoints: [],
    };
    expect(actions.createNewConnection(37, "front", "black", [])).toEqual(expectedAction);
  });

  it("should create an action to create a new connection with a connectection to point 4", () => {
    const expectedAction = {
      type: types.CREATE_NEW_CONNECTION,
      ptnum: 37,
      placement: "front",
      color: "black",
      connectedPoints: 4,
    };
    expect(actions.createNewConnection(37, "front", "black", 4)).toEqual(expectedAction);
  });

  it("should create an action to create a new connection with connections to point 7 and 39", () => {
    const expectedAction = {
      type: types.CREATE_NEW_CONNECTION,
      ptnum: 37,
      placement: "front",
      color: "black",
      connectedPoints: [7, 39],
    };
    expect(actions.createNewConnection(37, "front", "black", [7, 39])).toEqual(expectedAction);
  });
});

describe("connectPoints", () => {
  it("should create an action with 2 sets of point numbers", () => {
    const expectedAction = {
      type: types.CONNECT_POINTS,
      ptnumArray: [1],
      targetPtnumArray: [4],
    };
    expect(actions.connectPoints(1, 4)).toEqual(expectedAction);
  });

  it("should create an action with 2 sets of point numbers", () => {
    const expectedAction = {
      type: types.CONNECT_POINTS,
      ptnumArray: [1, 3, 5],
      targetPtnumArray: [4],
    };
    expect(actions.connectPoints([1, 3, 5], 4)).toEqual(expectedAction);
  });

  it("should create an action with 2 sets of point numbers", () => {
    const expectedAction = {
      type: types.CONNECT_POINTS,
      ptnumArray: [1],
      targetPtnumArray: [4, 5, 6],
    };
    expect(actions.connectPoints(1, [4, 5, 6])).toEqual(expectedAction);
  });

  it("should create an action with 2 sets of point numbers", () => {
    const expectedAction = {
      type: types.CONNECT_POINTS,
      ptnumArray: [0, 1, 2, 3],
      targetPtnumArray: [4, 5, 6],
    };
    expect(actions.connectPoints([0, 1, 2, 3], [4, 5, 6])).toEqual(expectedAction);
  });
});

describe("disconnectPoints", () => {
  it("should create an action with 2 number arrays", () => {
    const expectedAction = {
      type: types.DISCONNECT_POINTS,
      ptnumArray: [0],
      fromPtnumArray: [4],
    };
    expect(actions.disconnectPoints(0, 4)).toEqual(expectedAction);
  });
});
