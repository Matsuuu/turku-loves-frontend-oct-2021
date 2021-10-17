import { css, html, LitElement } from 'lit';
import { repeat } from 'lit/directives/repeat.js';
import { animate } from '@lit-labs/motion';

export class TurkuScoreboard extends LitElement {
  static get properties() {
    return {
      entries: { type: Array },
      sortDirection: { type: String },
    };
  }

  constructor() {
    super();
    this.entries = [];
    this.sortDirection = 'ASC';
  }

  onSort() {
    this.sortDirection = this.sortDirection === 'ASC' ? 'DESC' : 'ASC';
  }

  getEntries() {
    if (this.sortDirection === 'ASC') {
      return this.entries.sort((a, b) => b.score - a.score);
    }
    return this.entries.sort((a, b) => a.score - b.score);
  }

  render() {
    return html`
      <ul>
        ${repeat(
          this.getEntries(),
          entry => entry.name,
          (entry, i) =>
            html`
              <li ?top-dog=${i === 0} ${animate()}>
                ${entry.name} - ${entry.score}
              </li>
            `
        )}
      </ul>
      <button @click=${this.onSort}>${this.sortDirection}</button>
    `;
  }

  static get styles() {
    return css`
      li[top-dog] {
        color: red;
      }
    `;
  }
}

customElements.define('turku-scoreboard', TurkuScoreboard);
