import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core";
import { PADDING } from "./CONSTANTS";
import { Pitch } from "../../redux/reducers/Project/types";
import createAlphabeticalIndex from "./createAlphabeticalIndex";
import createNumericalIndex from "./createNumericalIndex";
import { useSelector } from "react-redux";
import { getPitch, getRows, getColumns } from "../../redux/reducers/Board/selectors";

interface StyleProps {
  pitch: Pitch;
}

const useStyles = makeStyles({
  boundingBox: {
    x: -PADDING,
    y: -PADDING,
    width: `calc(100% + ${PADDING * 2}px)`,
    height: `calc(100% + ${PADDING * 2}px)`,
    fill: "none",
    // stroke: "red",
  },
  character: {
    transformBox: "fill-box",
    transformOrigin: "center",
    textAnchor: "middle",
    fontSize: (props: StyleProps) => props.pitch,
    dominantBaseline: "central",
  },
});

interface Props {
  style?: React.CSSProperties;
  characterStyle?: React.CSSProperties;
}

export default function Indexing({ style, characterStyle }: Props): ReactElement {
  console.log("Indexing");
  const pitch = useSelector(getPitch);
  const columns = useSelector(getColumns);
  const rows = useSelector(getRows);

  const classes = useStyles({ pitch });
  return (
    <g style={style}>
      <rect className={classes.boundingBox} />
      {/* alphabetical indexing for columns: */}
      <svg width={"100%"} height={PADDING} y={-PADDING} viewBox={`0 0 ${pitch * columns} ${PADDING}`}>
        {[...Array(columns)].map((x, i) => (
          <text key={i} className={classes.character} style={characterStyle} x={pitch / 2 + i * pitch} y={"50%"}>
            {createAlphabeticalIndex(i)}
          </text>
        ))}
      </svg>
      {/* numerical indexing for rows:  */}
      <svg height={"100%"} width={PADDING} x={-PADDING} viewBox={`0 0 ${PADDING} ${pitch * rows}`}>
        {[...Array(rows)].map((x, i) => (
          <text
            key={i}
            className={classes.character}
            style={characterStyle}
            x={PADDING / 2}
            y={pitch / 2 + i * pitch}
            textLength={pitch / 1.5}
            lengthAdjust="spacingAndGlyphs"
          >
            {createNumericalIndex(i + 1, rows)}
          </text>
        ))}
      </svg>
    </g>
  );
}
