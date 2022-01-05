// ┌─┐┌─┐┬─┐┌┬┐┌─┐
// │  ├─┤├┬┘ ││└─┐
// └─┘┴ ┴┴└──┴┘└─┘

// Print cards
const printCards = () => {
  let id = 0;
  for (const card of CONFIG.cards) {
    id += 1;
    // Card Item
    let item = `
        <a
          href="${card.link}"
          target="${CONFIG.openInNewTab ? "_blank" : ""}"
          class="buttons__link  card buttonLink__link-${id}"
        >
          <i class="buttonLink__icon" icon-name="${card.icon}"></i>
        </a>
    `;

    const position = "beforeend";

    buttonsContainer.insertAdjacentHTML(position, item);
  }
};

printCards();
