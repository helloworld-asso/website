export class Components extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = this.component();
    htmx.process(this);
  }

  component() {
    return "";
  }
}
