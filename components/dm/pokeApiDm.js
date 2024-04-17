
import {LitElement} from 'lit';

export class PokeApiDm extends LitElement {
    static get properties() {
        return {
          host: {type: String},
          api: {type: String},
        };
    }

    constructor() {
        super();
        this.host = '';
        this.api = '';
    }
    
    firstUpdated() {
        this._requestToApi();
    }
    
    _requestToApi() {
        fetch(`${this.host}/${this.api}`)
            .then(response => response.json())
            .then(data => {
                this.dispatchEvent(new CustomEvent('request-success', {
                    bubbles: true,
                    composed: true,
                    detail: data
                }))
            })
            .catch(error => {
                this.dispatchEvent(new CustomEvent('request-failure', {
                    bubbles: true,
                    composed: true,
                    detail: error
                }))
            })
    }

}

window.customElements.define('pokeapi-dm', PokeApiDm);