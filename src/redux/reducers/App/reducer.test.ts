import reducer from "./reducer";
import * as types from "./actionTypes";
import { initialState, State } from "./initialState";
import * as actions from "./actions";
import { Placement } from "../Project/types";

describe("INITIAL_STATE", () => {
  test("is correct", () => {
    const action: types.DummyAction = { type: types.DUMMY_ACTION };
    expect(reducer(initialState, action)).toEqual(initialState);
  });
});

describe("Zoom", () => {
  it("should update the zoom level", () => {
    const action = actions.setZoom(2);
    const expectedState: State = {
      ...initialState,
      zoom: 2,
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it("should reset the zoom level back to 1", () => {
    const action = actions.resetZoom();
    const expectedState: State = {
      ...initialState,
      zoom: 1,
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });
});

describe("Scale", () => {
  it("should update the scale", () => {
    const action = actions.setScale(4);
    const expectedState: State = {
      ...initialState,
      scale: 4,
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it("should reset the scale back to 1", () => {
    const action = actions.resetScale();
    const expectedState: State = {
      ...initialState,
      scale: 1,
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });
});

describe("View", () => {
  it("should set the view to front", () => {
    const action = actions.setView("front");
    const expectedState: State = {
      ...initialState,
      view: "front",
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });
  it("should set the view to back", () => {
    const action = actions.setView("back");
    const expectedState: State = {
      ...initialState,
      view: "back",
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it("should toggle the front and back view", () => {
    const action = actions.toggleView();
    const _initialState = {
      ...initialState,
      view: "back" as Placement,
    };
    const expectedState: State = {
      ..._initialState,
      view: "front",
    };
    expect(reducer(_initialState, action)).toEqual(expectedState);
  });
  it("should toggle the front and back view", () => {
    const action = actions.toggleView();
    const _initialState = {
      ...initialState,
      view: "front" as Placement,
    };
    const expectedState: State = {
      ..._initialState,
      view: "back",
    };
    expect(reducer(_initialState, action)).toEqual(expectedState);
  });
});

describe("Active tool", () => {
  it("should set the active tool to 'Connection'", () => {
    const action = actions.setActiveTool("Connection");
    const expectedState: State = {
      ...initialState,
      activeTool: "Connection",
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it("should set the active tool to 'Header'", () => {
    const action = actions.setActiveTool("Header");
    const expectedState: State = {
      ...initialState,
      activeTool: "Header",
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it("should set the active tool to null", () => {
    const action = actions.setActiveTool(null);
    const _initialState: State = {
      ...initialState,
      activeTool: "Connection",
    };
    const expectedState: State = {
      ...initialState,
      activeTool: null,
    };
    expect(reducer(_initialState, action)).toEqual(expectedState);
  });
});

describe("Point number", () => {
  it("should set the active point number to 0", () => {
    const action = actions.setActivePtnum(0);
    const expectedState: State = {
      ...initialState,
      activePtnum: 0,
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });
  it("should set the active point number to 100", () => {
    const action = actions.setActivePtnum(100);
    const expectedState: State = {
      ...initialState,
      activePtnum: 100,
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it("should set the active point number to null", () => {
    const action = actions.setActivePtnum(null);
    const _initialState: State = {
      ...initialState,
      activePtnum: 500,
    };
    const expectedState: State = {
      ...initialState,
      activePtnum: null,
    };
    expect(reducer(_initialState, action)).toEqual(expectedState);
  });
});

describe("Active color", () => {
  it("should set the active color to 'orange'", () => {
    const action = actions.setActiveColor("orange");
    const expectedState: State = {
      ...initialState,
      activeColor: "orange",
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });
  it("should set the active color to 'yellow'", () => {
    const action = actions.setActiveColor("yellow");
    const expectedState: State = {
      ...initialState,
      activeColor: "yellow",
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  // it("should set the active tool to null", () => {
  //   const action = actions.setActivePtnum(null);
  //   const _initialState: State = {
  //     ...initialState,
  //     activePtnum: 500,
  //   };
  //   const expectedState: State = {
  //     ...initialState,
  //     activePtnum: null,
  //   };
  //   expect(reducer(_initialState, action)).toEqual(expectedState);
  // });
});

// describe("Sets the current tool", () => {
//   test("returns the correct state", () => {
//     const tool = null;
//     const action = actions.setCurrentTool(tool);
//     const expectedState: State = {
//       ...initialState,
//       currentTool: tool,
//     };

//     expect(reducer(undefined, action)).toEqual(expectedState);
//   });

//   test("returns the correct state", () => {
//     const tool = "Connection";
//     const action = actions.setCurrentTool(tool);
//     const expectedState: State = {
//       ...initialState,
//       currentTool: tool,
//     };

//     expect(reducer(undefined, action)).toEqual(expectedState);
//   });

//   test("returns the correct state", () => {
//     const tool = "Header";
//     const action = actions.setCurrentTool(tool);
//     const expectedState: State = {
//       ...initialState,
//       currentTool: tool,
//     };

//     expect(reducer(undefined, action)).toEqual(expectedState);
//   });
// });

// describe("Sets the current color", () => {
//   test("returns the correct state", () => {
//     const action: types.SetCurrentColorAction = { type: types.SET_CURRENT_COLOR, color: "orange" };
//     const expectedState: State = {
//       ...initialState,
//       currentColor: "orange",
//     };

//     expect(reducer(undefined, action)).toEqual(expectedState);
//   });
// });

// describe("Sets the current view", () => {
//   test("returns the correct state", () => {
//     const action: types.SetCurrentViewAction = { type: types.SET_CURRENT_VIEW, view: "back" };
//     const expectedState: State = {
//       ...initialState,
//       currentView: "back",
//     };

//     expect(reducer(undefined, action)).toEqual(expectedState);
//   });

//   test("returns the correct state", () => {
//     const action: types.SetCurrentViewAction = { type: types.SET_CURRENT_VIEW, view: "front" };
//     const expectedState: State = {
//       ...initialState,
//       currentView: "front",
//     };

//     expect(reducer(undefined, action)).toEqual(expectedState);
//   });
// });

// describe("Sets the current point number", () => {
//   test("returns the correct state", () => {
//     const action: types.SetCurrentPtnumAction = { type: types.SET_CURRENT_PTNUM, ptnum: null };
//     const expectedState: State = {
//       ...initialState,
//       currentPtnum: null,
//     };

//     expect(reducer(undefined, action)).toEqual(expectedState);
//   });

//   test("returns the correct state", () => {
//     const action: types.SetCurrentPtnumAction = { type: types.SET_CURRENT_PTNUM, ptnum: 0 };
//     const expectedState: State = {
//       ...initialState,
//       currentPtnum: 0,
//     };

//     expect(reducer(undefined, action)).toEqual(expectedState);
//   });

//   test("returns the correct state", () => {
//     const action: types.SetCurrentPtnumAction = { type: types.SET_CURRENT_PTNUM, ptnum: 431 };
//     const expectedState: State = {
//       ...initialState,
//       currentPtnum: 431,
//     };

//     expect(reducer(undefined, action)).toEqual(expectedState);
//   });
// });
