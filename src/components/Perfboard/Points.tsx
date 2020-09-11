import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Point } from "../../redux/reducers/Project/types";
import { useDispatch, useSelector } from "react-redux";
// import { add } from "../../redux/reducers/Project/actions";
import { clickHandlerEmptyPoint } from "../../redux/reducers/actions";
import { getPoints, getPitch } from "../../redux/reducers/Board/selectors";

interface Props {
  style?: React.CSSProperties;
}

const useStyles = makeStyles({
  group: {
    transformOrigin: "50% 50%",
  },
  point: {
    position: "absolute",
    fill: "rgba(0,0,0,0)",
    stroke: "rgba(0,0,0,0)",
    strokeWidth: 0.3,

    pointerEvents: "all",
    transition: "stroke 0.3s ease 0.05s",

    "&:hover": {
      stroke: "rgba(255,255,255,0.85)",
    },

    "&:active": {
      fill: "rgba(255,255,255,0.4)",
    },
  },
});

export default function Points({ style }: Props): ReactElement {
  console.log("Points");
  const points = useSelector(getPoints);
  const pitch = useSelector(getPitch);
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleClick = (pt: Point) => {
    // console.log("pt: ", pt.ptnum);
    console.log("ptnum: " + pt.ptnum);
    dispatch(clickHandlerEmptyPoint(pt.ptnum));
    // dispatch(add(pt.ptnum));
  };

  return (
    <g className={classes.group} style={style}>
      {Object.values(points).map((pt, i) => {
        const { x, y } = pt.location;
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={(pitch / 2) * 0.875}
            className={classes.point}
            onClick={(e) => handleClick(pt)}
          />
        );
      })}
    </g>
  );
}
