import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { COLOR_INK } from "./CONSTANTS";
import { Pitch } from "../../redux/reducers/Project/types";
import { useSelector } from "react-redux";
import { getPitch, getRows, getColumns } from "../../redux/reducers/Board/selectors";

const useStyles = makeStyles({
  grid: {
    fill: "none",
    strokeWidth: 0.25,
    stroke: COLOR_INK,
  },
});

export default function Grid(): ReactElement {
  console.log("Grid");
  const pitch = useSelector(getPitch);
  const columns = useSelector(getColumns);
  const rows = useSelector(getRows);
  const classes = useStyles();
  return (
    <g
      style={{
        transformOrigin: "50% 50%",
        transform: "scaleX(-1)",
      }}
    >
      <rect x={0} y={0} width={"100%"} height={"100%"} className={classes.grid} />
      {createGridLines(columns, rows, pitch).map((line, i) => (
        <line key={i} x1={line.start.x} y1={line.start.y} x2={line.end.x} y2={line.end.y} className={classes.grid} />
      ))}
    </g>
  );
}

const createGridLines = (columns: number, rows: number, pitch: Pitch) => {
  interface Line {
    start: any;
    end: any;
  }
  const v: Line[] = [];
  const h: Line[] = [];

  for (let c = 5; c < columns; c += 5) {
    const start = { x: c * pitch, y: 0 };
    const end = { x: c * pitch, y: "100%" };
    v.push({ start, end });
  }

  let toggle = true;
  for (let r = 5; r < rows; toggle ? (r += 5) : (r += 4)) {
    const start = { x: 0, y: r * pitch };
    const end = { x: "100%", y: r * pitch };
    h.push({ start, end });
    toggle = !toggle;
  }

  return [...v, ...h];
};
