import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { PADDING, MASK_ID, COLOR_BOARD } from "./CONSTANTS";

interface StyleProps {
  isMask?: boolean;
}
const useStyles = makeStyles({
  base: {
    x: -PADDING,
    y: -PADDING,
    width: `calc(100% + ${PADDING * 2}px)`,
    height: `calc(100% + ${PADDING * 2}px)`,
    // stroke: "red",
    fill: (props: StyleProps) => (props.isMask ? "white" : COLOR_BOARD),
  },
});

interface Props {
  isMask?: boolean;
}

export default function Base({ isMask }: Props): ReactElement {
  const classes = useStyles({ isMask });
  return <rect className={classes.base} mask={`url(#${MASK_ID})`} />;
}
