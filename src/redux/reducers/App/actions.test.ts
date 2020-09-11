import * as actions from "./actions";
import * as types from "./actionTypes";

describe("actions", () => {
  it("should create an action to set the current tool", () => {
    const tool = "Connection";
    const expectedAction = {
      type: types.SET_ACTIVE_TOOL,
      tool,
    };
    expect(actions.setActiveTool(tool)).toEqual(expectedAction);
  });
});
