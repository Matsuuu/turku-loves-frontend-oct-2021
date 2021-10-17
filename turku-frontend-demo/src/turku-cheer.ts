import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";

export class TurkuCheer extends LitElement {
    @property({ reflect: true })
    variant: string = "";

    render() {
        return html`<p>Turku <slot></slot> Frontend!</p> `;
    }

    static styles = css`
    slot {
      color: red;
    }

    :host([variant="large"]) {
      font-size: 2rem;
    }

    :host([variant="small"]) {
      font-size: 0.8rem;
    }

    :host([variant="tilted"]) {
      transform:rotateZ(20deg);
    }
  `;
}

customElements.define("turku-cheer", TurkuCheer);
