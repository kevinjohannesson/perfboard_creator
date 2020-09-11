import React, { ReactElement } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { getConnections } from "../../../redux/reducers/Project/selectors";
import { getPitch, getPoints } from "../../../redux/reducers/Board/selectors";
import { Pitch } from "../../../redux/reducers/Project/types";
// import { Color } from "../../../types";
import { clickHandlerConnectionPoint } from "../../../redux/reducers/actions";

interface Props {}
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
    strokeWidth: (props: StyleProps) => props.pitch / 8,
    transition: "stroke 0.3s ease 0.05s",

    pointerEvents: "all",

    "&:hover": {
      stroke: "rgba(255,255,255,0.85)",
    },

    // "&:active": {
    //   fill: "rgba(255,255,255,0.4)",
    // },
  },
});

export default function Points(): ReactElement {
  console.log("Points");
  const pitch = useSelector(getPitch);
  const classes = useStyles({ pitch });
  const connections = useSelector(getConnections);
  const points = useSelector(getPoints);
  const dispatch = useDispatch();
  const clickHandler = (ptnum: number) => {
    console.log("clickHandler");
    console.log("ptnum: ", ptnum);
    dispatch(clickHandlerConnectionPoint(ptnum));
  };
  return (
    <>
      {Object.values(connections)
        // .filter((connection) => connection.connectedPoints.length <= 1)
        .map((connection, i) => {
          const { x, y } = points["pt" + connection.ptnum].location;
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              className={classes.connection}
              fill={connection.connectedPoints.length <= 1 ? "silver" : connection.color}
              stroke={connection.color}
              onClick={(e) => clickHandler(connection.ptnum)}
            />
          );
        })}
    </>
  );
}
