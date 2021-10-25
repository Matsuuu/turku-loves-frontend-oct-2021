import { LitElement, html, css } from "lit";
import "./score-board.js";

const logo = new URL("../assets/open-wc-logo.svg", import.meta.url).href;

export class TurkuFrontend extends LitElement {
    static get properties() {
        return {
            title: { type: String },
        };
    }

    constructor() {
        super();
        this.title = "My app";
    }

    render() {
        return html`
      <main>
        <div class="logo"><img alt="open-wc logo" src=${logo} /></div>
        <h1>${this.title}</h1>

        <score-board></score-board>
      </main>
    `;
    }

    static get styles() {
        return css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
        background-color: var(--turku-frontend-background-color);
      }

      main {
        flex-grow: 1;
      }

      .logo {
        margin-top: 36px;
        animation: app-logo-spin infinite 20s linear;
      }

      @keyframes app-logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    `;
    }
}
