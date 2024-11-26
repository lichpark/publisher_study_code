const ol = document.getElementById("ol");

fetch("https://fakerapi.it/api/v2/addresses?_quantity=5")
  .then((response) => response.json())
  .then((v) => {
    const newData = v.data.map((x) => x.city);
    //ol.innerHTML = newData.map((x) => `<li>${x}</li>`).join("");
  });

const ol2 = document.getElementById("ol2");

fetch("https://fakerapi.it/api/v2/books?_quantity=10")
  .then((r) => r.json())
  .then((v) => {
    const titleData = v.data.map((x) => x.title);
    //ol2.innerHTML = titleData.map((x2) => `<li>${x2}</li>`).join("");
  });

const buttons = document.querySelectorAll(".data_button");
const h1 = document.getElementById("h1_data");
const ol3 = document.getElementById("ol3");

const apis = {
  addres: {
    url: "https://fakerapi.it/api/v2/addresses?_quantity=10",
    target: "city",
  },
  books: {
    url: "https://fakerapi.it/api/v2/books?_quantity=10",
    target: "title",
  },
  person: {
    url: "https://fakerapi.it/api/v2/persons?_quantity=10&_gender=female&_birthday_start=2005-01-01",
    target: "firstname",
  },
};

buttons.forEach((v) => {
  const data = v.getAttribute("data");
  const datatype = v.getAttribute("datatype");
  const data2 = v.getAttribute("data2");
  v.addEventListener("click", () => {
    h1.innerHTML = "로딩중";
    fetch(data)
      .then((r) => r.json())
      .then((v) => {
        const ArrData = v.data.map((x3) => x3[datatype]);
        ol3.innerHTML = ArrData.map((x3) => `<li>${x3}</li>`).join("");
        h1.innerHTML = `${data2} data`;
      });
  });
});
