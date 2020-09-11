import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { getConnections } from "../../../redux/reducers/Project/selectors";
import { getPitch, getPoints } from "../../../redux/reducers/Board/selectors";
import { Pitch } from "../../../redux/reducers/Project/types";
import Lines from "./Lines";
import Points from "./Points";

interface Props {
  style?: React.CSSProperties;
}
interface StyleProps {
  pitch: Pitch;
}
const useStyles = makeStyles({
  group: {
    transformOrigin: "50% 50%",
  },
});

export default function Connections({ style }: Props): ReactElement {
  console.log("Connections");
  const connections = useSelector(getConnections);
  const points = useSelector(getPoints);
  const pitch = useSelector(getPitch);
  const classes = useStyles({ pitch });
  return (
    <g>
      <g>
        <Lines points={points} connections={connections} pitch={pitch} style={style} />
      </g>
      <g className={classes.group} style={style}>
        <Points />
      </g>
    </g>
  );
}
