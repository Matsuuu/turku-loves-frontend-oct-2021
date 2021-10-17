import { LitElement, html, css } from 'lit';
import './turku-score-submit.js';
import './turku-scoreboard.js';

export class TurkuFrontendScoreboard extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      entries: { type: Array },
    };
  }

  constructor() {
    super();
    this.title = 'Turku <3 Frontend scoreboard';

    this.entries = [];
  }

  /**
   * @param {CustomEvent} e
   */
  onSubmit(e) {
    console.log(e);
    const submission = e.detail.submitData;
    this.entries = [...this.entries, submission];
  }

  render() {
    return html`
      <p>${this.title}</p>
      <turku-scoreboard .entries=${this.entries}></turku-scoreboard>
      <turku-score-submit
        @scoreboard-submit=${this.onSubmit}
      ></turku-score-submit>
    `;
  }
}

TurkuFrontendScoreboard.styles = css`
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
    background-color: var(--turku-frontend-scoreboard-background-color);
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
