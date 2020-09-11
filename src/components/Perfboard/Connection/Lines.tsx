import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Points, Pitch } from "../../../redux/reducers/Project/types";
import { Connections as T_Connections } from "../../../redux/reducers/Project/types";
// import { Color } from "../../../types";
// import map from "../../map";
// import { getColumns, getRows } from "../../../redux/reducers/Project/selectors";
import { useDispatch } from "react-redux";
// import { insertConnection } from "../../../redux/reducers/Project/actions";
import Line, { Line as T_Line } from "./Line";
import { clickHandlerConnectionLine } from "../../../redux/reducers/actions";

interface Props {
  points: Points;
  connections: T_Connections;
  pitch: Pitch;
  style?: React.CSSProperties;
}
interface StyleProps {
  pitch: Pitch;
}
const useStyles = makeStyles({
  group: {
    transformOrigin: "50% 50%",
  },
  connection: {
    position: "absolute",
    r: (props: StyleProps) => props.pitch / 4,
    strokeWidth: (props: StyleProps) => props.pitch / 2,
    transition: "all 0.4s ease",
    pointerEvents: "all",
    stroke: "rgba(255,255,255,0.0)",
    "&:hover": {
      stroke: "rgba(255,255,255,0.85)",
    },
  },
});

export default function Lines({ points, connections, pitch, style }: Props): ReactElement {
  console.log("Lines");
  const classes = useStyles({ pitch });
  const dispatch = useDispatch();
  // const columns = useSelector(getColumns);
  // const rows = useSelector(getRows);
  // interface LineProps {
  //   x1: number;
  //   x2: number;
  //   y1: number;
  //   y2: number;
  //   stroke: Color;
  // }

  const lines = ([] as T_Line[]).concat(
    ...Object.values(connections)
      .filter((connection) => connection.connectedPoints.length > 0)
      .map((connection, i) => {
        const lines = connection.connectedPoints.map((ptnum) => {
          const start = points["pt" + connection.ptnum];
          const end = points["pt" + ptnum];
          const color = connection.color;

          return { start, end, color };
        });
        return lines;
      })
  );
  // const lineProps = ([] as LineProps[])
  //   .concat(
  //     ...Object.values(connections)
  //       .filter((connection) => connection.connectedPoints.length > 0)
  //       .map((connection, i) => {
  //         const lineProps = connection.connectedPoints.map((ptnum) => {
  //           const { x: x1, y: y1 } = points["pt" + connection.ptnum].location;
  //           const { x: x2, y: y2 } = points["pt" + ptnum].location;
  //           return { x1, x2, y1, y2, stroke: connection.color };
  //         });
  //         return lineProps;
  //       })
  //   )
  //   .filter((line, index, array) => !array.some((l, i) => l.x1 === line.x2 && l.y1 === line.y2 && i < index));

  const clickHandler = (e: React.MouseEvent<SVGLineElement, MouseEvent>, line: T_Line) => {
    // console.log("hallo");
    // console.log(e.target);
    // console.log(e.currentTarget);
    const boundingClientRect = e.currentTarget.getBoundingClientRect();
    const mouseClickLocation = { x: e.clientX, y: e.clientY };
    // const rect = e.currentTarget.getBoundingClientRect();
    // const x = e.clientX - rect.left; //x position within the element.
    // const y = e.clientY - rect.top; //y position within the element.
    // // console.log(x, y);
    // // console.log(rect);
    // const mapped = {
    //   x: map(x, 0, rect.width, 0, 1),
    //   y: map(y, 0, rect.height, 0, 1),
    // };
    // // console.log(mapped);
    // // console.log(line.start.column, line.start.row);
    // const closestColumn = (function () {
    //   if (line.start.column === line.end.column) return line.start.column;
    //   else {
    //     const lowestColumn = Math.min(line.start.column, line.end.column);
    //     const highestColumn = Math.max(line.start.column, line.end.column);
    //     return Math.round(map(mapped.x, 0, 1, lowestColumn, highestColumn));
    //   }
    // })();
    // console.log(closestColumn);
    // const closestRow = (function () {
    //   if (line.start.row === line.end.row) return line.start.row;
    //   else {
    //     const lowestRow = Math.min(line.start.row, line.end.row);
    //     const highestRow = Math.max(line.start.row, line.end.row);
    //     return Math.round(map(mapped.y, 0, 1, lowestRow, highestRow));
    //   }
    // })();

    // console.log(closestRow);
    dispatch(
      clickHandlerConnectionLine(
        line.start.ptnum,
        line.end.ptnum,
        mouseClickLocation,
        boundingClientRect
      )
    );
  };
  return (
    <g className={classes.group} style={style}>
      {lines.map((line, i) => (
        <Line key={i} line={line} clickHandler={(e) => clickHandler(e, line)} />
      ))}
    </g>
  );
}

/* <line
          key={i}
          className={classes.connection}
          x1={line.start.location.x}
          y1={line.start.location.y}
          x2={line.end.location.x}
          y2={line.end.location.y}
          strokeLinecap="round"
          stroke={line.color}
          onClick={(e) => clickHandler(e, line)}
        /> */
