//html[=docuemnt]
//element [=tag]

// const btn = window.document.createElement("button");
// btn.innerHTML = "점메추";
// btn.style.backgroundColor = "red";
// window.document.body.appendChild(btn);

//button 아메리카노
//div 코카콜라
//span 라면

// const makeHtml = (x, y) => {
//   const creElem = document.createElement(x);
//   creElem.innerHTML = y;
//   document.body.appendChild(creElem);
// };
// makeHtml("button", "아메리카노");
// makeHtml("div", "코카콜라");
// makeHtml("span", "라면");

// const img = document.createElement("img");
// img.src = "tira.jfif";
// document.body.appendChild(img);
// const div = document.createElement("div");
// div.style.display = "flex";
// div.style.justifyContent = "center";
// div.style.alignItems = "center";
// div.style.width = "100px";
// div.style.height = "100px";
// div.style.border = "1px solid black";

// const btn = document.createElement("button");
// btn.innerHTML = "아망추";
// div.appendChild(btn);

// document.body.appendChild(div);

// const makeHtml = {
//     html: [
//       {
//         type: "h5",
//         text: ["Position and Layout"],
//         color: "#878787",
//         backgroundColor: "white",
//         width: "100%",
//       },
//       {
//         type: "div",
//         text: [""],
//         color: "",
//         backgroundColor: "white",
//         width: "100%",
//       },
//       {
//         type: "button",
//         text: ["positiony", "z-index", "top", "bottom", "left", "right"],
//         color: "#4a4a4a",
//         backgroundColor: "#fac0ba",
//         width: "",
//       },
//     ],
//     div: {},
//     sub_div: {},
//     htmlcre() {
//       this.html.forEach((x, index) => {
//         //console.log(x);
//         //console.log(index);
//         //console.log(x.text.length);
//         const textarr = x.text;
//         textarr.forEach((element, sub_index) => {
//           const cre = document.createElement(x.type);
//           cre.innerHTML = textarr[sub_index];
//           //console.log(x.color);
//           cre.style.backgroundColor = x.backgroundColor;
//           cre.style.color = x.color;
//           x.width != "" ? (cre.style.width = x.width) : false;
//           if (index == 0) {
//             //cre.style.alignItems = "center";
//             this.div = cre;
//           } else if (index == 1) {
//             cre.style.display = "flex";
//             //cre.style.justifyContent = "space-between";
//             cre.style.alignItems = "center";
//             this.sub_div = cre;
//           } else {
//             cre.style.marginRight = "10px";
//             this.sub_div.appendChild(cre);
//           }
//         });
//       });
//       document.body.appendChild(this.div);
//       document.body.appendChild(this.sub_div);
//     },
//   };

//makeHtml.htmlcre();
