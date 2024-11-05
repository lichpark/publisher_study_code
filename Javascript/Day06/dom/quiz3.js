const makeGrid = {
  arr: [
    { bgcolor: "#1abc9c", text: "turquoise" },
    { bgcolor: "#2ecc71", text: "elemrald" },
    { bgcolor: "#3498db", text: "peter river" },
    { bgcolor: "#9b59b6", text: "amethyst" },
    { bgcolor: "#34495e", text: "wet asphalt" },
    { bgcolor: "#16a085", text: "green sea" },
    { bgcolor: "#27ae60", text: "nephritis" },
    { bgcolor: "#2980b9", text: "belize hole" },
    { bgcolor: "#8e44ad", text: "wisteria" },
    { bgcolor: "#2c3e50", text: "midnight blue" },
    { bgcolor: "#f1c40f", text: "sun flower" },
    { bgcolor: "#e67e22", text: "carrot" },
    { bgcolor: "#e74c3c", text: "alizarin" },
    { bgcolor: "#ecf0f1", text: "clouds" },
    { bgcolor: "#95a5a6", text: "concrete" },
    { bgcolor: "#f39c12", text: "orange" },
    { bgcolor: "#d35400", text: "pumkin" },
    { bgcolor: "#c0392b", text: "pomegranate" },
    { bgcolor: "#bdc3c7", text: "siver" },
    { bgcolor: "#7f8c8d", text: "asbestos" },
  ],
  makebox(tag) {
    const wrapDiv = document.createElement(tag);
    //wrapDiv.style.cssText = `width:100%; display:grid; grid-template-columns:repeat(5, 1fr);`;
    wrapDiv.style.display = "grid";
    wrapDiv.style.gridTemplateColumns = "repeat(5, 1fr)";

    this.arr.forEach((x) => {
      const boxDiv = document.createElement("div");
      boxDiv.style.cssText = `width:100%; height:200px;color:white ; font-weight:bold;display:flex; align-items:end; gap:15px; justify-content:end;  background-color:${x.bgcolor}; `;

      const boxtext = document.createElement("div");
      boxtext.innerHTML = x.text;
      boxtext.style.padding = "5px";
      boxDiv.appendChild(boxtext);
      wrapDiv.appendChild(boxDiv);
    });

    document.body.appendChild(wrapDiv);
  },
};

makeGrid.makebox("div");
