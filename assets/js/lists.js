// ┬  ┬┌─┐┌┬┐┌─┐
// │  │└─┐ │ └─┐
// ┴─┘┴└─┘ ┴ └─┘

const all_lists = () => {
  const position = "beforeend";
  for (const name in CONFIG.lists) {
    let value = CONFIG.lists[name];
    let div = `<div class="card list list__${name}" id=${name}>`;
    let icon = `<i class="list__head" icon-name="${name}"></i>`;
    let items = "";
    for (const link of value) {
      // List item
      items += `
          <a
          target="${CONFIG.openInNewTab ? "_blank" : ""}"
          href="${link.link}"
          class="list__link"
          >${link.name}</a
          >
      `;
    }
    list_container.insertAdjacentHTML(position, div + icon + items + "</div>");
  }
};

all_lists();
