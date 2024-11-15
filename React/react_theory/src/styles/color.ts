type Prefix = "pill_" | "bottom_" | "header_";
type Middle = "button_" | "text_" | "a_deco_" | "background_";
type Surfix = "blue" | "white" | "black" | "color";

// This type represents all possible combinations of Prefix, Middle, and Surfix
export type Pill = `${Prefix}${Middle}${Surfix}`;

// This type represents the shape of colorObj with all combinations of Pill as keys
export type ColorObjType = { [key in Pill]: string };

// Export the object with specific colors
export const colorObj: Partial<ColorObjType> = {
  pill_button_blue: "#0071e3",
  pill_button_white: "#F5F5F7",
  pill_button_black: "#000000",
  bottom_text_black: "rgb(245, 245, 247)",
  bottom_a_deco_color: "rgb(0, 102, 204)",
  header_background_black: "#000000",
  header_a_deco_white: "rgba(255, 255, 255, .8)",
};
