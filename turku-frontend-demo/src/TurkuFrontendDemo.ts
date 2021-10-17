import { LitElement, html, css } from "lit";
import { property } from "lit/decorators.js";
import "./turku-cheer";

export class TurkuFrontendDemo extends LitElement {
    @property({ type: String }) title = "My app";

    render() {
        return html`
            <turku-cheer variant="large"><3</turku-cheer>
            <turku-cheer variant="small">Loves</turku-cheer>
            <turku-cheer variant="tilted">Does</turku-cheer>
            <turku-cheer>Excels at</turku-cheer>
        `;
    }

    static styles = css`
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
      background-color: var(--turku-frontend-demo-background-color);
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

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }
  `;
}
