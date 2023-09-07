import "@emotion/react";
import { colors } from "./theme/colors";

declare module "@emotion/react" {
  export interface Theme {
    colors: typeof colors;
  }
}
