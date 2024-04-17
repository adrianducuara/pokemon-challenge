/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class ListComponent extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 800px;
      }
      .img {
        width: 75px;
        height: 100px;
      }
    `;
  }

  static get properties() {
    return {
      imageUrl: {type: String}
    };
  }

  constructor() {
    super();
    this.imageUrl = '';
  }

  render() {
    return html`
      <div>
        <img class='img' src='${this.imageUrl}' alt=''>
        <slot name='name'></slot>
      </div>
    `;
  }


}

window.customElements.define('list-component', ListComponent);
