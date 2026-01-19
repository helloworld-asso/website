import { Components } from "./base.js";
import { load } from "./load-components.js";

customElements.define(
  "test-head",
  class Scaffold extends Components {
    component() {
      return `
      ${load("components/header.html")}
      ${load("components/footer.html")}
    `;
    }
  },
);
