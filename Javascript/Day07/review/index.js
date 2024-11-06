//
const boardhtml = {
  resource: [
    { text: "dashboard", tag: "div", bgcolor: "#6c5dd3", color: "white" },
    { text: "orders", tag: "div", bgcolor: "", color: "grey" },
    { text: "analytics", tag: "div", bgcolor: "", color: "grey" },
    { text: "customer", tag: "div", bgcolor: "", color: "grey" },
    { text: "menu", tag: "div", bgcolor: "", color: "grey" },
  ],
  paddingSize: "10px 20px",
  borderRadiusValue: "5px",
  fontSizeValue: "20px",
  wrapGapValue: "10px",
  makeHtml() {
    const wrap = document.createElement("ul");
    wrap.style.width = "200px";
    wrap.style.display = "flex";
    wrap.style.flexDirection = "column";
    wrap.style.padding = "10px 20px";
    wrap.style.gap = this.wrapGapValue;
    this.resource.forEach((x) => {
      const menuHtml = document.createElement("li");
      menuHtml.style.display = "flex";
      menuHtml.style.alignItems = "cennter";
      menuHtml.style.justifyContent = "center";
      menuHtml.style.fontSize = this.fontSizeValue;
      menuHtml.style.fontWeight = "bold";
      menuHtml.style.backgroundColor = x.bgcolor;
      menuHtml.style.color = x.color;
      menuHtml.style.padding = this.paddingSize;
      menuHtml.style.borderRadius = this.borderRadiusValue;
      menuHtml.innerHTML =
        "<a href=''  target='_self' style='text-decoration:none; color:" +
        x.color +
        "'>" +
        x.text[0].toUpperCase() +
        x.text.substring(1) +
        "</a>";
      wrap.appendChild(menuHtml);
    });
    document.body.appendChild(wrap);
  },
};

boardhtml.makeHtml();

const makeButton = (title) => {
  const button = document.createElement("button");
  button.innerHTML = title;
  button.style.backgroundColor = "#6c5dd3";
  button.style.border = "1px solid #6c5dd3";
  button.style.color = "#ffffff";
  button.style.padding = "15px 20px";
  button.style.borderRadius = "12px";
  button.style.fontWeight = "bold";
  return button;
};

const container = document.createElement("div");
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.gap = "10px";
container.style.width = "fit-content";

const list = ["Dashboard", "Orders", "Analytics", "Customer", "Menu"];

list.forEach((v) => container.appendChild(makeButton(v)));

// container.appendChild(makeButton("Dashboard"));
// container.appendChild(makeButton("Orders"));
// container.appendChild(makeButton("Analytics"));
// container.appendChild(makeButton("Customer"));
// container.appendChild(makeButton("Menu"));

document.body.appendChild(container);
