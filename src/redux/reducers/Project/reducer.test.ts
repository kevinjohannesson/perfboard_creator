import reducer from "./reducer";
import * as types from "./actionTypes";
import initialState, { State } from "./initialState";
import * as actions from "./actions";
import { Placement } from "../Project/types";

describe(types.CREATE_NEW_CONNECTION, () => {
  it("should create a new orange connection at point number 4, placed on the front, with no connected points", () => {
    const action = actions.createNewConnection(4, "front", "orange");
    const expectedState: State = {
      ...initialState,
      connections: {
        ["4"]: {
          ptnum: 4,
          placement: "front",
          color: "orange",
          connectedPoints: [],
        },
      },
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it("should create a new red connection at point number 18, placed on the back, with 1 connected point", () => {
    const action = actions.createNewConnection(18, "back", "red", 37);
    const expectedState: State = {
      ...initialState,
      connections: {
        ["18"]: {
          ptnum: 18,
          placement: "back",
          color: "red",
          connectedPoints: [37],
        },
      },
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it("should create a new purple connection at point number 0, placed on the front, with multiple connected points", () => {
    const action = actions.createNewConnection(0, "front", "purple", [37, 47, 15, 17]);
    const expectedState: State = {
      ...initialState,
      connections: {
        ["0"]: {
          ptnum: 0,
          placement: "front",
          color: "purple",
          connectedPoints: [37, 47, 15, 17],
        },
      },
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });
});

describe(types.CONNECT_POINTS, () => {
  it("should add a connection on 2 points to each respective point", () => {
    const action = actions.connectPoints(4, 9);
    const _initialState: State = {
      ...initialState,
      connections: {
        [4]: {
          ptnum: 4,
          placement: "front",
          color: "blue",
          connectedPoints: [],
        },
        [9]: {
          ptnum: 9,
          placement: "front",
          color: "blue",
          connectedPoints: [],
        },
      },
    };
    const expectedState: State = {
      ...initialState,
      connections: {
        [4]: {
          ptnum: 4,
          placement: "front",
          color: "blue",
          connectedPoints: [9],
        },
        [9]: {
          ptnum: 9,
          placement: "front",
          color: "blue",
          connectedPoints: [4],
        },
      },
    };
    expect(reducer(_initialState, action)).toEqual(expectedState);
  });

  it("should add a connection on to all provided points", () => {
    const action = actions.connectPoints([2, 5, 8]);
    const _initialState: State = {
      ...initialState,
      connections: {
        [2]: {
          ptnum: 2,
          placement: "front",
          color: "blue",
          connectedPoints: [],
        },
        [5]: {
          ptnum: 5,
          placement: "front",
          color: "blue",
          connectedPoints: [],
        },
        [8]: {
          ptnum: 8,
          placement: "front",
          color: "blue",
          connectedPoints: [],
        },
      },
    };
    const expectedState: State = {
      ...initialState,
      connections: {
        [2]: {
          ptnum: 2,
          placement: "front",
          color: "blue",
          connectedPoints: [5, 8],
        },
        [5]: {
          ptnum: 5,
          placement: "front",
          color: "blue",
          connectedPoints: [2, 8],
        },
        [8]: {
          ptnum: 8,
          placement: "front",
          color: "blue",
          connectedPoints: [2, 5],
        },
      },
    };
    expect(reducer(_initialState, action)).toEqual(expectedState);
  });

  it("should add a connection from multiple points to one target", () => {
    const action = actions.connectPoints([2, 5, 7, 9], 8);
    const _initialState: State = {
      ...initialState,
      connections: {
        [2]: {
          ptnum: 2,
          placement: "front",
          color: "blue",
          connectedPoints: [],
        },
        [5]: {
          ptnum: 5,
          placement: "front",
          color: "blue",
          connectedPoints: [],
        },
        [7]: {
          ptnum: 7,
          placement: "front",
          color: "blue",
          connectedPoints: [],
        },
        [8]: {
          ptnum: 8,
          placement: "front",
          color: "blue",
          connectedPoints: [],
        },
        [9]: {
          ptnum: 9,
          placement: "front",
          color: "blue",
          connectedPoints: [],
        },
      },
    };
    const expectedState: State = {
      ...initialState,
      connections: {
        [2]: {
          ptnum: 2,
          placement: "front",
          color: "blue",
          connectedPoints: [8],
        },
        [5]: {
          ptnum: 5,
          placement: "front",
          color: "blue",
          connectedPoints: [8],
        },
        [7]: {
          ptnum: 7,
          placement: "front",
          color: "blue",
          connectedPoints: [8],
        },
        [8]: {
          ptnum: 8,
          placement: "front",
          color: "blue",
          connectedPoints: [2, 5, 7, 9],
        },
        [9]: {
          ptnum: 9,
          placement: "front",
          color: "blue",
          connectedPoints: [8],
        },
      },
    };
    expect(reducer(_initialState, action)).toEqual(expectedState);
  });
});

describe(types.DISCONNECT_POINTS, () => {
  it("should remove the connection between 2 points to each respective point", () => {
    const action = actions.disconnectPoints(4, 9);
    const _initialState: State = {
      ...initialState,
      connections: {
        [4]: {
          ptnum: 4,
          placement: "front",
          color: "blue",
          connectedPoints: [9],
        },
        [9]: {
          ptnum: 9,
          placement: "front",
          color: "blue",
          connectedPoints: [4],
        },
      },
    };
    const expectedState: State = {
      ...initialState,
      connections: {
        [4]: {
          ptnum: 4,
          placement: "front",
          color: "blue",
          connectedPoints: [],
        },
        [9]: {
          ptnum: 9,
          placement: "front",
          color: "blue",
          connectedPoints: [],
        },
      },
    };
    expect(reducer(_initialState, action)).toEqual(expectedState);
  });

  it("should remove the connection between multiple points from 1 point", () => {
    const action = actions.disconnectPoints([4, 5, 6], 9);
    const _initialState: State = {
      ...initialState,
      connections: {
        [4]: {
          ptnum: 4,
          placement: "front",
          color: "blue",
          connectedPoints: [9],
        },
        [5]: {
          ptnum: 5,
          placement: "front",
          color: "blue",
          connectedPoints: [9],
        },
        [6]: {
          ptnum: 6,
          placement: "front",
          color: "blue",
          connectedPoints: [9],
        },
        [9]: {
          ptnum: 9,
          placement: "front",
          color: "blue",
          connectedPoints: [4, 5, 6],
        },
      },
    };
    const expectedState: State = {
      ...initialState,
      connections: {
        [4]: {
          ptnum: 4,
          placement: "front",
          color: "blue",
          connectedPoints: [],
        },
        [5]: {
          ptnum: 5,
          placement: "front",
          color: "blue",
          connectedPoints: [],
        },
        [6]: {
          ptnum: 6,
          placement: "front",
          color: "blue",
          connectedPoints: [],
        },
        [9]: {
          ptnum: 9,
          placement: "front",
          color: "blue",
          connectedPoints: [],
        },
      },
    };
    expect(reducer(_initialState, action)).toEqual(expectedState);
  });

  it("should remove the connection between multiple points from 1 point", () => {
    const action = actions.disconnectPoints([4, 5, 6], 9);
    const _initialState: State = {
      ...initialState,
      connections: {
        [4]: {
          ptnum: 4,
          placement: "front",
          color: "blue",
          connectedPoints: [9, 5],
        },
        [5]: {
          ptnum: 5,
          placement: "front",
          color: "blue",
          connectedPoints: [9, 4, 6],
        },
        [6]: {
          ptnum: 6,
          placement: "front",
          color: "blue",
          connectedPoints: [9, 5],
        },
        [9]: {
          ptnum: 9,
          placement: "front",
          color: "blue",
          connectedPoints: [4, 5, 6],
        },
      },
    };
    const expectedState: State = {
      ...initialState,
      connections: {
        [4]: {
          ptnum: 4,
          placement: "front",
          color: "blue",
          connectedPoints: [5],
        },
        [5]: {
          ptnum: 5,
          placement: "front",
          color: "blue",
          connectedPoints: [4, 6],
        },
        [6]: {
          ptnum: 6,
          placement: "front",
          color: "blue",
          connectedPoints: [5],
        },
        [9]: {
          ptnum: 9,
          placement: "front",
          color: "blue",
          connectedPoints: [],
        },
      },
    };
    expect(reducer(_initialState, action)).toEqual(expectedState);
  });

  it("should remove the connection between multiple points", () => {
    const action = actions.disconnectPoints([4, 5, 6, 9]);
    const _initialState: State = {
      ...initialState,
      connections: {
        [4]: {
          ptnum: 4,
          placement: "front",
          color: "blue",
          connectedPoints: [9, 5],
        },
        [5]: {
          ptnum: 5,
          placement: "front",
          color: "blue",
          connectedPoints: [9, 4, 6],
        },
        [6]: {
          ptnum: 6,
          placement: "front",
          color: "blue",
          connectedPoints: [9, 5],
        },
        [9]: {
          ptnum: 9,
          placement: "front",
          color: "blue",
          connectedPoints: [4, 5, 6],
        },
        [12]: {
          ptnum: 12,
          placement: "front",
          color: "blue",
          connectedPoints: [9, 15],
        },
        [15]: {
          ptnum: 15,
          placement: "front",
          color: "blue",
          connectedPoints: [12],
        },
      },
    };
    const expectedState: State = {
      ...initialState,
      connections: {
        [4]: {
          ptnum: 4,
          placement: "front",
          color: "blue",
          connectedPoints: [],
        },
        [5]: {
          ptnum: 5,
          placement: "front",
          color: "blue",
          connectedPoints: [],
        },
        [6]: {
          ptnum: 6,
          placement: "front",
          color: "blue",
          connectedPoints: [],
        },
        [9]: {
          ptnum: 9,
          placement: "front",
          color: "blue",
          connectedPoints: [],
        },
        [12]: {
          ptnum: 12,
          placement: "front",
          color: "blue",
          connectedPoints: [9, 15],
        },
        [15]: {
          ptnum: 15,
          placement: "front",
          color: "blue",
          connectedPoints: [12],
        },
      },
    };
    expect(reducer(_initialState, action)).toEqual(expectedState);
  });
});

describe(types.SPLIT_CONNECTION, () => {
  it("should create a connection with 2 points and remove the connection for the endpoints", () => {
    const action = actions.splitConnection(1, 9, 4);
    const _initialState: State = {
      ...initialState,
      connections: {
        [1]: {
          ptnum: 1,
          placement: "front",
          color: "blue",
          connectedPoints: [9],
        },
        [9]: {
          ptnum: 9,
          placement: "front",
          color: "blue",
          connectedPoints: [1],
        },
      },
    };
    const expectedState: State = {
      ...initialState,
      connections: {
        [1]: {
          ptnum: 1,
          placement: "front",
          color: "blue",
          connectedPoints: [4],
        },
        [4]: {
          ptnum: 4,
          placement: "front",
          color: "blue",
          connectedPoints: [1, 9],
        },
        [9]: {
          ptnum: 9,
          placement: "front",
          color: "blue",
          connectedPoints: [4],
        },
      },
    };
    expect(reducer(_initialState, action)).toEqual(expectedState);
  });
});
