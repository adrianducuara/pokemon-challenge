import {LitElement, html} from 'lit';
import '../../components/dm/pokeApiDm';
import '../../components/ui/formComponent/formComponent';
import { pokelistPageStyle } from './pokeEdit-style-page';
export class PokeEditPage extends LitElement {
  static styles = [
    pokelistPageStyle,
  ]

  static get properties() {
    return {
      data: { type: Object } // Define la propiedad data como un objeto
    };
  }

  constructor() {
    super();
    this.data = {};
  }

  get name() {
    const paramsSearch = window.location.search;
    const url = new URLSearchParams(paramsSearch);
    return url.get('name') || '';
  }


  render() {
    return html`
     <pokeapi-dm id='pokeapiDm' host='http://localhost:3002' api='pokemon?name=${this.name}'
        @request-success='${this.pokeDataSuccess}'
        @request-failure='${this.pokeDataFailure}'
      ></pokeapi-dm>
      ${this.renderData()}
    `;
  }

  renderData() {
    // Verifica si hay datos para mostrar
    if(Object.keys(this.data).length === 0) {
      return html`<div>No tenemos pokemones disponibles</div>`
    }

    return html`
        ${this.data[0].evolutions.map(pokemon => html`
        <form-component imageUrl='/assets/img/bola-pokemon.png'>
            <p slot='name'>${pokemon.name}</p>
            <p slot='type'>${pokemon.type}</p>
        </form-component>
    `)}`

  }

  pokeDataSuccess(evt) {
    this.data = evt.detail;
  }

  pokeDataFailure(evt) {
    console.log(evt);
  }
}

window.customElements.define('pokeevolution-page', PokeEditPage);