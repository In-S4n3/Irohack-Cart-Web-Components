const template = document.createElement("template");
template.innerHTML = `

<link rel="stylesheet" href="./css/style.css" />

<tr class="product">
  <td class="name">
    <span></span>
  </td>
  <td class="price">$<span></span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>`;

class Item extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.querySelector(".name span").textContent = this.getAttribute(
      "name"
    );

    this.shadowRoot.querySelector(
      ".price span"
    ).textContent = this.getAttribute("price");

    let buttoCalculatePrices = document.getElementById("calculate");
    buttoCalculatePrices.addEventListener("click", () => {
      this.shadowRoot.querySelector(".subtotal span").textContent =
        this.getAttribute("price") *
        this.shadowRoot.querySelector("input[type=number]").value;
    });

    this.innerHTML = template;
  }
}

window.customElements.define("item-list", Item);
