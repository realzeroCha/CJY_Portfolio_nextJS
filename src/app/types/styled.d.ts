import "styled-components";
import { ThemeType } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    background: ThemeType["background"];
    text: ThemeType["text"];
  }
}
