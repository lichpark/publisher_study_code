export const makeList = (v) => {
  return `<div class="card">
    <div class="img__div">
      <img src="${v.item_entity.render.data.image.url}" class="img"/>
    </div>
    <div class="text__div">
      <div class="price__div">
        <span class="percent">${nullChk(
          v.item_entity.render.data.discount_rate
        )}</span>
        <span class="price">${nullChk(
          v.item_entity.render.data.price
        ).toLocaleString()}</span>
      </div>
      <div class="product_name">
        <span class="market_name">${nullChk(
          v.item_entity.item.market_name
        )}</span>
        <span class="prod_desc"></span>
      </div>
      <div class="product"><span>${nullChk(
        v.item_entity.render.data.name
      )}</span></div>
      <div class="nugging_text">${nullChk(
        v.item_entity.render.data.nudging_text
      )}</div>
    </div>
  </div>`;
};

const nullChk = (str) => {
  if (str == null) {
    return "";
  } else {
    return str;
  }
};
