import { Theme } from "@material-ui/core";
import { light } from "./light";
import { dark } from "./dark";
import { ThemeName } from "./types";

export function themeCreator(theme: ThemeName): Theme {
  return allThemes[theme];
}

const allThemes: { [key in ThemeName]: Theme } = {
  light,
  dark
};
