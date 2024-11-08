export const makeCard = (img, name) => {
  return `<div class="card">
          <img src="${img}" />
          <strong>${name}</strong>
          <button>선물하기</button>
        </div>`;
};
