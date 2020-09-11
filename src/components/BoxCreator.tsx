import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

interface StyleProps {
  width: number;
  height: number;
  length: number;
}

const useStyles = makeStyles({
  cube: {
    transform: (props: StyleProps) => `translateZ(-${props.length / 2}px)`,
    transformStyle: "preserve-3d",
    width: (props: StyleProps) => props.width + "px",
    height: (props: StyleProps) => props.height + "px",
    zIndex: 1,
    transitionTimingFunction: "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
    transitionDuration: "1.5s",
  },
  face: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  shadow: {
    position: "absolute",
    width: (props: StyleProps) => props.width + "px",
    height: (props: StyleProps) => props.height + "px",

    transform: (props: StyleProps) => `translateZ(-${props.length}px) scale(1)`,
    pointerEvents: "none",

    backgroundColor: "rgba(41, 36, 34, 0.4)",
    boxShadow: "0px 0px 25px 10px rgba(41, 36, 34, 0.4)",

    filter: "blur(15px)",
    transformStyle: "preserve-3d",
  },
  layer: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backfaceVisibility: "hidden",
  },
  l_front: {
    transform: (props: StyleProps) => `translateZ(${props.length / 2 + 1}px)`,
  },
  l_back: {
    transform: (props: StyleProps) => `rotateY(180deg) translateZ(${props.length / 2}px)`,
  },
  front: {
    transform: (props: StyleProps) => `rotateY(0deg) translateZ(${props.length / 2}px)`,

    width: (props: StyleProps) => props.width + "px",
    height: (props: StyleProps) => props.height + "px",
  },
  back: {
    transform: (props: StyleProps) => `rotateY(180deg) translateZ(${props.length / 2}px)`,

    width: (props: StyleProps) => props.width + "px",
    height: (props: StyleProps) => props.height + "px",
  },
  right: {
    transform: (props: StyleProps) => `rotateY(90deg) translateZ(${props.width / 2}px)`,

    left: (props: StyleProps) => `${props.width / 2 - props.length / 2}px`,

    width: (props: StyleProps) => props.length + "px",
    height: (props: StyleProps) => props.height + "px",
  },
  left: {
    transform: (props: StyleProps) => `rotateY(-90deg) translateZ(${props.width / 2}px)`,

    left: (props: StyleProps) => `${props.width / 2 - props.length / 2}px`,

    width: (props: StyleProps) => props.length + "px",
    height: (props: StyleProps) => props.height + "px",
  },
  top: {
    transform: (props: StyleProps) => `rotateX(90deg) translateZ(${props.height / 2}px)`,

    top: (props: StyleProps) => `${props.height / 2 - props.length / 2}px`,

    width: (props: StyleProps) => props.width + "px",
    height: (props: StyleProps) => props.length + "px",
  },
  bottom: {
    transform: (props: StyleProps) => `rotateX(-90deg) translateZ(${props.height / 2}px)`,

    top: (props: StyleProps) => `${props.height / 2 - props.length / 2}px`,

    width: (props: StyleProps) => props.width + "px",
    height: (props: StyleProps) => props.length + "px",
  },
  show_front: {
    transform: (props: StyleProps) => `translateZ(-${props.length / 2}px) rotateX(0deg)`,
  },
  show_back: {
    transform: (props: StyleProps) => `translateZ(-${props.length / 2}px) rotateX(-180deg)`,
  },
  show_right: {
    transform: (props: StyleProps) => `translateZ(-${props.length / 2}px) rotateY(-90deg)`,
  },
  show_left: {
    transform: (props: StyleProps) => `translateZ(-${props.length / 2}px) rotateY(90deg)`,
  },
  show_top: {
    transform: (props: StyleProps) => `translateZ(-${props.length / 2}px) rotateX(-90deg)`,
  },
  show_bottom: {
    transform: (props: StyleProps) => `translateZ(-${props.length / 2}px) rotateX(90deg)`,
  },
});

interface Props {
  length: number;
  width: number;
  height: number;
  front?: React.ReactNode;
  back?: React.ReactNode;
  frontBase?: React.ReactNode;
  backBase?: React.ReactNode;
  right?: React.ReactNode;
  left?: React.ReactNode;
  top?: React.ReactNode;
  bottom?: React.ReactNode;
  view?: any;
  // rotateBox: (element: HTMLDivElement, view: View) => void;
}

type View = "front" | "back" | "right" | "left" | "top" | "bottom";

const BoxCreator = React.forwardRef<HTMLDivElement, Props>(
  (props, ref): ReactElement => {
    console.log("BoxCreator");
    const { width, height, length } = props;
    const { front, back, right, left, top, bottom } = props;
    const { frontBase, backBase } = props;
    const classes = useStyles({ length, width, height });

    return (
      <>
        <div ref={ref} className={clsx(classes.cube)}>
          <div className={clsx(classes.face, classes.front)}>{frontBase}</div>
          <div className={clsx(classes.layer, classes.l_front, classes.face)}>{front}</div>
          <div className={clsx(classes.face, classes.back)}>{backBase}</div>
          <div className={clsx(classes.layer, classes.l_back, classes.face)}>{back}</div>
          <div className={clsx(classes.face, classes.right)}>{right}</div>
          <div className={clsx(classes.face, classes.left)}>{left}</div>
          <div className={clsx(classes.face, classes.top)}>{top}</div>
          <div className={clsx(classes.face, classes.bottom)}>{bottom}</div>
        </div>
        <div className={clsx(classes.shadow)} />
      </>
    );
  }
);

export default BoxCreator;
