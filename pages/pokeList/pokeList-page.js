import {LitElement, html, css} from 'lit';
import '../../components/dm/pokeApiDm';
import '../../components/ui/listComponent/listComponent';
import '../../components/ui/headerComponent/headerComponent';
export class PokeListPage extends LitElement {
  static get styles() {
    return css`
      .container-items {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
        margin-top: 100px;
      }
    `;
  }

  static get properties() {
    return {
      data: { type: Array } // Define la propiedad data como un objeto
    };
  }

  constructor() {
    super();
    this.data = [];
  }

  render() {
    return html`
      <header-component title='PokeDex'></header-component>
      <pokeapi-dm id='pokeapiDm' host='http://localhost:3002' api='pokemon'
        @request-success='${this.pokeDataSuccess}'
        @request-failure='${this.pokeDataFailure}'
      ></pokeapi-dm>
      ${this.renderData}
    `;
  }

  get renderData() {
    return this.data.map(poke => html`
        <a href='detail.html?name=${poke.name}'>
          <list-component imageUrl='/assets/img/bola-pokemon.png'>
            <p slot='name'>${poke.name}</p>
          </list-component>
        </a>
    `);
  }

  pokeDataSuccess(evt) {
    this.data = evt.detail;
  }

  pokeDataFailure(evt) {
    console.log(evt);
  }
}

window.customElements.define('pokelist-page', PokeListPage);