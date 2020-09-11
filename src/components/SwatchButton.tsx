import React, { ReactElement } from "react";
import { useSelector, useDispatch } from "react-redux";
import Brightness1Icon from "@material-ui/icons/Brightness1";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import IconButton from "@material-ui/core/IconButton";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import BrandTooltip from "./BrandTooltip";
import { getActiveColor } from "../redux/reducers/App/selectors";
import { makeStyles, createStyles } from "@material-ui/core";
import { COLORS } from "../redux/reducers/Project/CONSTANTS";
import { setActiveColor } from "../redux/reducers/App/actions";

const useStyles = makeStyles((theme) =>
  createStyles({
    swatches: {
      display: "flex",
      flexDirection: "row",
      "&:focus": {
        outline: "none",
      },
    },
  })
);

export default function SwatchButton(): ReactElement {
  const dispatch = useDispatch();
  const currentColor = useSelector(getActiveColor);
  const classes = useStyles();
  const [open, set_open] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const handleToggle = () => {
    set_open((prevOpen) => !prevOpen);
  };
  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    set_open(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      set_open(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <BrandTooltip title={`Change connection color`} placement={"left"}>
        <IconButton
          aria-label="color"
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          onClick={handleToggle}
        >
          <Brightness1Icon style={{ fill: currentColor }} />
        </IconButton>
      </BrandTooltip>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        placement={"left"}
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow {...TransitionProps} style={{ transformOrigin: "center right" }}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  className={classes.swatches}
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  {COLORS.map(
                    (color) =>
                      color !== currentColor && (
                        <IconButton
                          key={color}
                          aria-label="color"
                          onClick={(e) => {
                            dispatch(setActiveColor(color));
                            handleClose(e);
                          }}
                        >
                          <Brightness1Icon style={{ fill: color }} />
                        </IconButton>
                      )
                  )}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}
