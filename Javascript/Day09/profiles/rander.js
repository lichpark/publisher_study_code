export const makeHtml = (v) => {
  return `
  <article class="card">
      <img src="${v.image}" alt ="${v.name}_portrait" title="${v.name} portrait"/>
      <div class="right" ">
          <span class="name_title">${v.name}</span>
          <span class="job_title">${v.job_title}</span>
      </div>
  </article>
        `;
};
