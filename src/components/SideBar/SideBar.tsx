import React, { ReactElement } from "react";
import { useDispatch } from "react-redux";
import LinearScaleIcon from "@material-ui/icons/LinearScale";
import BorderAllIcon from "@material-ui/icons/BorderAll";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import { SvgIconTypeMap, Theme } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { makeStyles, createStyles } from "@material-ui/core/styles";

import { TOOLS } from "../../redux/reducers/Project/CONSTANTS";
import { setActiveTool, setActivePtnum } from "../../redux/reducers/App/actions";

import { Tool } from "../../types";

import ToolButton from "./ToolButton";

const toolIcons: { [key in Tool]: OverridableComponent<SvgIconTypeMap<{}, "svg">> } = {
  none: LinearScaleIcon,
  Connection: LinearScaleIcon,
  Header: BorderAllIcon,
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
    },
  })
);

export default function SideBar(): ReactElement {
  const classes = useStyles();
  const dispatch = useDispatch();

  function handleKeyPress(e: KeyboardEvent) {
    console.log("handleKeyPress");
    if (e.key === "Escape") {
      console.log("Exit current tool");
      document.removeEventListener("keydown", handleKeyPress);
      document.removeEventListener("contextmenu", endCurrentAction);
      dispatch(setActiveTool(null));
    }
  }

  function endCurrentAction(event: MouseEvent) {
    console.log("endCurrentAction");
    dispatch(setActivePtnum(null));
  }

  function handleToolChange(tool: Tool) {
    console.log("handleToolChange");
    document.addEventListener("keydown", handleKeyPress);
    document.addEventListener("contextmenu", endCurrentAction);
    dispatch(setActiveTool(tool));
  }

  return (
    <Paper className={classes.root} elevation={3}>
      {TOOLS.map((tool, i, arr) => {
        if (tool === "none") return null;
        return (
          <React.Fragment key={tool}>
            <ToolButton
              title={tool}
              clickHandler={() => handleToolChange(tool)}
              Icon={toolIcons[tool]}
            />
            {i !== arr.length - 1 && <Divider />}
          </React.Fragment>
        );
      })}
    </Paper>
  );
}
