import { css, html, LitElement } from "lit";

export class ScoreBoard extends LitElement {
    static get properties() {
        return {
            scores: { type: Array },
        };
    }

    constructor() {
        super();
        this.scores = [
            { name: "Juhis", score: 1000 },
            { name: "Matias", score: 500 },
        ];
    }

    addItem() {
        this.scores = [
            ...this.scores,
            { name: "[UNNAMED]", score: Math.floor(Math.random() * 10000) },
        ];
        this.sortItems();
    }

    sortItems() {
        this.scores = this.scores.sort((a, b) => b.score - a.score);
    }

    removeItem(i) {
        this.scores = [...this.scores.slice(0, i), ...this.scores.slice(i + 1)];
    }

    render() {
        return html`
      <button @click=${this.addItem}>Add entry</button>
      <ul>
        ${this.scores.map(
            (entry, i) => html`
            <score-board-item
              @click=${() => this.removeItem(i)}
              name=${entry.name}
              score=${entry.score}
              ?first-place=${i === 0}
            ></score-board-item>
          `
        )}
      </ul>
    `;
    }
}

customElements.define("score-board", ScoreBoard);

export class ScoreBoardItem extends LitElement {
    static get properties() {
        return {
            name: { type: String },
            score: { type: Number },
            firstPlace: { type: Boolean, attribute: "first-place" },
        };
    }

    constructor() {
        super();
        this.name = "";
        this.score = 0;
    }

    render() {
        return html`${this.name} - ${this.score}`;
    }

    static get styles() {
        return css`
      :host {
        display: list-item;
        cursor: pointer;
      }

      :host([first-place]) {
        color: gold;
      }

      :host(:hover) {
        color: red;
      }
    `;
    }
}

customElements.define("score-board-item", ScoreBoardItem);
