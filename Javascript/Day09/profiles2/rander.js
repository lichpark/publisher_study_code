import { changeIcon, exchangeRate } from "./func.js";

export const makeHtml = (v) => {
  return `
  <article class="card" style="background-color:${v.hex_color}">
      <img src="${v.image}" alt ="${v.name}_portrait" title="${
    v.name
  } portrait"/>
      <div class="right" ">
          <span style="color:${v.color}" class="name_title">${v.name}</span>
          <span class="money">${exchangeRate(v.money)}</span>
          <span class="mobile">${changeIcon(v.mobile)}</span>
      </div>
  </article>
        `;
};
