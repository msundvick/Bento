// ┌─┐┌─┐┬─┐┌┬┐┌─┐
// │  ├─┤├┬┘ ││└─┐
// └─┘┴ ┴┴└──┴┘└─┘

import { CONFIG } from "./config";

// Print cards
const printCards = () => {
  let id = 0;
  for (const card of CONFIG.cards) {
    id += 1;
    // Card Item
    let item = `
        <a
          title="card ${card.link}"
          href="${card.link}"
          target="${CONFIG.openInNewTab ? "_blank" : ""}"
          class="buttons__link  card buttonLink__link-${id}"
        >
          <i class="buttonLink__icon" icon-name="${card.icon}"></i>
        </a>
    `;

    const position = "beforeend";

    document
      .getElementById("buttonsContainer")
      .insertAdjacentHTML(position, item);
  }
};

printCards();
