import { item_list } from "./data.js";
import { makeList } from "./rander.js";

const container = document.querySelector(".container");

container.insertAdjacentHTML(
  "beforeend",
  item_list.map((v) => makeList(v)).join("")
);
