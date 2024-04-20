import { LitElement, html } from "lit";
import { headerComponentStyle } from './headerComponent-style';
class HeaderComponent extends LitElement {
    static properties = {
        title: { type: String },
        urlImage: { type: String },
        altContext: { type: String },
    }

    static styles = [
        headerComponentStyle,
    ]

    constructor() {
        super();
        this.title = 'Coloca un título';
        this.urlImage = '';
        this.altContext = '';
    }

    render() {
        return html`
            <header class='header-container boder-effect'>
                <p class='title'>${this.title}</p>
            </header>
        `;
    }
}

customElements.define('header-component', HeaderComponent);