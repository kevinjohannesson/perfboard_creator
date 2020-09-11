import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Pitch, Point } from "../../../redux/reducers/Project/types";
// import { Connections as T_Connections } from "../../../redux/reducers/Project/types";
import { Color } from "../../../types";
// import map from "../../map";
// import { getColumns, getRows } from "../../../redux/reducers/Project/selectors";
import { useSelector } from "react-redux";
// import { insertConnection } from "../../../redux/reducers/Project/actions";

import { getPitch } from "../../../redux/reducers/Board/selectors";
interface Props {
  line: Line;
  clickHandler: (...args: any[]) => void;
}
interface StyleProps {
  pitch: Pitch;
  color: Color;
}
const useStyles = makeStyles({
  group: {
    transformOrigin: "50% 50%",
  },
  connection: {
    position: "absolute",
    r: (props: StyleProps) => props.pitch / 4,
    strokeWidth: (props: StyleProps) => props.pitch / 2,
    transition: "stroke 0.3s ease 0.05s",
    pointerEvents: "all",
    stroke: (props: StyleProps) => props.color,
    "&:hover": {
      stroke: "rgba(255,255,255,0.85)",
    },
  },
});

export interface Line {
  start: Point;
  end: Point;
  color: Color;
}

export default function Line({ line, clickHandler }: Props): ReactElement {
  console.log("Lines");
  const pitch = useSelector(getPitch);
  const { color } = line;
  const classes = useStyles({ pitch, color });

  return (
    <line
      className={classes.connection}
      x1={line.start.location.x}
      y1={line.start.location.y}
      x2={line.end.location.x}
      y2={line.end.location.y}
      strokeLinecap="round"
      stroke={line.color}
      onClick={clickHandler}
    />
  );
}
