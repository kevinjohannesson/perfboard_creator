import React, { ReactElement } from "react";

import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";

import { getPitch, getWidth, getHeight, getThickness, getPoints } from "../../redux/reducers/Board/selectors";
import { getZoom, getScale } from "../../redux/reducers/App/selectors";

import BoxCreator from "../BoxCreator";
import Base from "./Base";
import Grid from "./Grid";

import { MASK_ID, FULL_DIMENSION, COLOR_COPPER, COLOR_INK } from "./CONSTANTS";

import CopperPads from "./CopperPads";
import Indexing from "./Indexing";
import Points from "./Points";
import Connections from "./Connection/Connections";
// import { getConnections } from "../../redux/reducers/Project/selectors";

const useStyles = makeStyles({
  root: {
    overflow: "visible",
    position: "absolute",
    userSelect: "none",
    pointerEvents: "none",
  },
  side: {
    height: "100%",
    width: "100%",
    backgroundColor: "#6e4a34",
  },
});

interface Props {}
const Perfboard = React.forwardRef<HTMLDivElement, Props>(
  (props, ref): ReactElement => {
    console.log("Perfboard");
    const width = useSelector(getWidth);
    const height = useSelector(getHeight);
    const thickness = useSelector(getThickness);

    const pitch = useSelector(getPitch);
    const points = useSelector(getPoints);
    // const view = useSelector(getView);
    const zoom = useSelector(getZoom);
    const scale = useSelector(getScale);

    const size = (dimension: number) => dimension * scale * zoom;

    const classes = useStyles();

    const SVG = (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        viewBox={`0 0 ${width} ${height}`}
        height={size(height)}
        width={size(width)}
        x={0}
        y={0}
        className={classes.root}
      >
        {props.children}
      </svg>
    );

    return (
      <BoxCreator
        ref={ref}
        // view={view}
        width={size(FULL_DIMENSION(width))}
        height={size(FULL_DIMENSION(height))}
        length={size(thickness)}
        right={<div className={classes.side} />}
        left={<div className={classes.side} />}
        top={<div className={classes.side} />}
        bottom={<div className={classes.side} />}
        frontBase={
          <SVG>
            <mask id={MASK_ID}>
              <Base isMask />
              {Object.values(points).map((pt, i) => (
                <circle key={i} cx={pt.location.x} cy={pt.location.y} r={pitch / 4} />
              ))}
            </mask>
            <Base />
          </SVG>
        }
        front={
          <>
            <SVG>
              <CopperPads />
              <Indexing style={{ fill: COLOR_COPPER }} />
              <Points />
            </SVG>
            <SVG>
              <Connections />
            </SVG>
          </>
        }
        backBase={
          <SVG>
            <Base />
          </SVG>
        }
        back={
          <SVG>
            <Grid />
            <Indexing
              style={{
                fill: COLOR_INK,
                transformOrigin: "center",
                transform: "scaleX(-1)",
              }}
              characterStyle={{ transform: "rotateX(180deg)" }}
            />
            <Points style={{ transform: "scaleX(-1)" }} />
          </SVG>
        }
      />
    );
  }
);

export default Perfboard;
