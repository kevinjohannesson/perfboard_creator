import React, { ReactElement } from "react";
import BrandTooltip from "./BrandTooltip";
import IconButton from "@material-ui/core/IconButton";
import FlipCameraAndroidIcon from "@material-ui/icons/FlipCameraAndroid";
import { useSelector, useDispatch } from "react-redux";
import { getView } from "../redux/reducers/App/selectors";
import { toggleView } from "../redux/reducers/App/actions";
import { View } from "../types";

interface Props {
  rotateFunction: (view: View) => void;
}
export default function ToggleViewButton({ rotateFunction }: Props): ReactElement {
  const dispatch = useDispatch();
  const isFrontView = useSelector(getView) === "front";
  return (
    <BrandTooltip title={`Toggle ${isFrontView ? "back" : "front"} view`} placement={"left"}>
      <IconButton
        aria-label="view"
        onClick={() => {
          rotateFunction(isFrontView ? "back" : "front");
          dispatch(toggleView());
        }}
      >
        <FlipCameraAndroidIcon />
      </IconButton>
    </BrandTooltip>
  );
}
