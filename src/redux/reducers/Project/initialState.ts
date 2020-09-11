import { Connections } from "./types";

export interface State {
  connections: Connections;
}

const initialState: State = (() => {
  const connections: Connections = {};
  return {
    connections,
  };
})();

export default initialState;
