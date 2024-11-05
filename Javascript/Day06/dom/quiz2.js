const makeHtmlt = {
  html: [
    [
      {
        type: "h5",
        text: ["Position and Layout"],
        color: "#878787",
        backgroundColor: "white",
        width: "100%",
        stance: "title",
      },
      {
        type: "div",
        text: [""],
        color: "",
        backgroundColor: "white",
        width: "100%",
        stance: "wrap",
      },
      {
        type: "button",
        text: ["positiony", "z-index", "top", "bottom", "left", "right"],
        color: "#4a4a4a",
        backgroundColor: "#fac0ba",
        width: "",
        stance: "",
      },
    ],
    [
      {
        type: "h5",
        text: ["Display and Visibility"],
        color: "#878787",
        backgroundColor: "white",
        width: "100%",
        stance: "title",
      },
      {
        type: "div",
        text: [""],
        color: "",
        backgroundColor: "white",
        width: "100%",
        stance: "wrap",
      },
      {
        type: "button",
        text: ["display", "opacity", "transform"],
        color: "#4a4a4a",
        backgroundColor: "#ffc089",
        width: "",
        stance: "",
      },
    ],
  ],
  div: {},
  sub_div: {},
  htmlcre() {
    this.html.forEach((arr) => {
      const wrap = document.createElement("div");
      arr.forEach((x, index) => {
        const textarr = x.text;
        textarr.forEach((element, sub_index) => {
          const cre = document.createElement(x.type);
          cre.innerHTML = textarr[sub_index];
          //console.log(x.color);
          cre.style.backgroundColor = x.backgroundColor;
          cre.style.color = x.color;
          //x.width != "" ? (cre.style.width = x.width) : false;
          if (x.stance == "title") {
            //cre.style.alignItems = "center";
            this.div = cre;
          } else if (x.stance == "wrap") {
            cre.style.display = "flex";
            //cre.style.justifyContent = "space-between";
            cre.style.alignItems = "center";
            cre.style.gap = "10px";
            this.sub_div = cre;
          } else {
            cre.style.border = "none";
            cre.style.borderRadius = "4px";
            //cre.style.marginRight = "10px";
            cre.style.padding = "10px 10px 7px";
            this.sub_div.appendChild(cre);
          }
        });
      });

      wrap.appendChild(this.div);
      wrap.appendChild(this.sub_div);
      document.body.appendChild(wrap);

      this.div = {};
      this.sub_div = {};
    });
  },
};

makeHtmlt.htmlcre();
