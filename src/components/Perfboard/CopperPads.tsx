import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { COLOR_COPPER } from "./CONSTANTS";
import { useSelector } from "react-redux";
import { getPoints, getPitch } from "../../redux/reducers/Board/selectors";

const useStyles = makeStyles({
  copperPad: {
    fill: "none",
    stroke: COLOR_COPPER,
    clipPath: "polygon(25% 10%, 75% 10%, 90% 25%, 90% 75%, 75% 90%, 25% 90%, 10% 75%, 10% 25%)",
  },
});

export default function CopperPads(): ReactElement {
  console.log("CopperPads");
  const points = useSelector(getPoints);
  const pitch = useSelector(getPitch);

  const classes = useStyles();
  return (
    <g>
      {Object.values(points).map((pt, i) => (
        <circle
          key={i}
          cx={pt.location.x}
          cy={pt.location.y}
          r={pitch / 2}
          strokeWidth={pitch / 2}
          className={classes.copperPad}
        />
      ))}
    </g>
  );
}
