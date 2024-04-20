import { LitElement, html } from 'lit';
import { cardComponentStyle } from './cardComponent-style';
class CardComponent  extends LitElement {

  static styles = [
    cardComponentStyle,
  ]

  static get properties() {
    return {
        imgUrl: {type: String},
        name: {type: String},
        altText: {type: String},
    };
  }

  constructor() {
    super();
    this.imgUrl = '/assets/img/bola-pokemon.png';
    this.name = '';
    this.altText = '';
  }

  render() {
    return html`
      <article>
        <figure>
            <img src='${this.imgUrl}' alt='${this.altText}'>
        </figure>
        <div class='container-name'>
            <slot name='name'></slot>
        </div>
      </article>
    `;
  }
}

customElements.define('card-component', CardComponent);