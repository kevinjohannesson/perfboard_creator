import React, { ReactElement } from "react";
import clsx from "clsx";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { SvgIconTypeMap, IconButton, makeStyles, createStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import { getActiveTool } from "../../redux/reducers/App/selectors";
import BrandTooltip from "../BrandTooltip";
import { Tool } from "../../types";

const useStyles = makeStyles((theme) =>
  createStyles({
    active: {
      backgroundColor: theme.palette.secondary.main,
    },
    button: {
      margin: theme.spacing(1),
      // backgroundColor: "rgba(0,0,0,0)",
      transition: "background-color 0.6s ease",
    },
  })
);

interface Props {
  title: Tool;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  clickHandler: (...args: any[]) => void;
  tooltipText?: string;
}

export default function ToolButton({
  title,
  Icon,
  tooltipText,
  clickHandler,
}: Props): ReactElement {
  const isCurrentTool = useSelector(getActiveTool) === title;
  const classes = useStyles();
  return (
    <BrandTooltip title={tooltipText || title} placement={"right"}>
      <IconButton
        aria-label="color"
        onClick={clickHandler}
        className={clsx(classes.button, {
          [classes.active]: isCurrentTool,
        })}
      >
        <Icon />
      </IconButton>
    </BrandTooltip>
  );
}
