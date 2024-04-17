import {LitElement, html, css} from 'lit';
import { PokeApiDm } from '../../components/dm/pokeApiDm';
import { ListComponent } from '../../components/ui/listComponent';
export class PokeListPage extends LitElement {
  static get styles() {
    return css`
      
    `;
  }

  static get properties() {
    return {
      data: { type: Object } // Define la propiedad data como un objeto
    };
  }

  constructor() {
    super();
    this.data = {};
  }

  render() {
    return html`
      <pokeapi-dm id='pokeapiDm' host='http://localhost:3002' api='pokemon'
        @request-success='${this.pokeDataSuccess}'
        @request-failure='${this.pokeDataFailure}'
      ></pokeapi-dm>
      ${this.renderData()} <!-- Renderiza los datos -->
    `;
  }

  renderData() {
    // Verifica si hay datos para mostrar
    if(Object.keys(this.data).length === 0) {
      return html`<div>No tenemos pokemones disponibles</div>`
    }

    const items = Object.entries(this.data).map(([key, value]) => html`
      <a href='detail.html?name=${value.name}'>
        <list-component imageUrl='/assets/img/bola-pokemon.png'>
          <p slot='name'>${value.name}</p>
        </list-component>
      </a>
    `);

    return html`
      <div>
        <h2>Información:</h2>
        ${items}
      </div>
    `;
  }

  pokeDataSuccess(evt) {
    this.data = evt.detail;
  }

  pokeDataFailure(evt) {
    console.log(evt);
  }
}

window.customElements.define('pokelist-page', PokeListPage);