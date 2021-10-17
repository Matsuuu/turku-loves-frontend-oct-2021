import { html, LitElement } from 'lit';

export class TurkuScoreSubmit extends LitElement {
  /**
   * @param {Event} e
   */
  onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(/** @type HTMLFormElement */ (e.target));
    const submitData = {};
    formData.forEach((value, key) => {
      submitData[key] = value;
      this.shadowRoot.querySelector(`input[name='${key}']`).value = '';
    });

    const submitEvent = new CustomEvent('scoreboard-submit', {
      detail: { submitData },
    });
    this.dispatchEvent(submitEvent);
    this.shadowRoot.querySelector('input').focus();
  }

  render() {
    return html`<form @submit=${this.onSubmit}>
      <input type="text" name="name" placeholder="Player name" />
      <input type="number" name="score" placeholder="Score" />
      <input type="submit" value="Submit" />
    </form>`;
  }
}

customElements.define('turku-score-submit', TurkuScoreSubmit);
