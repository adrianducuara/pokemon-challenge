/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import { formComponentStyle } from './formComponent-style.js';
/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class FormComponent extends LitElement {
  static styles = [
    formComponentStyle,
    css``,
  ];

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
      <form action="index.html" method="post">
        
          <label for="name">Name:</label>
          <input type="text" id="name" name="user_name">
        
          <label for="email">Email:</label>
          <input type="email" id="mail" name="user_email">
       
          <label for="password">Password:</label>
          <input type="password" id="password"       name="user_password">
        
          <label>Age:</label>
          <input type="radio" id="under_13" value="under_13" name="user_age"><label for="under_13" class="light">Under 13</label><br>
          <input type="radio" id="over_13" value="over_13" name="user_age"><label for="over_13" class="light">Over 13</label>
          
         <label for="bio">Bio:</label>
          <textarea id="bio" name="user_bio"></textarea>
          
          <label>Interests:</label>
          <input type="checkbox" id="development" value="interest_development" name="user_interest"><label class="light" for="development">Development</label><br>
          <input type="checkbox" id="design" value="interest_design" name="user_interest"><label class="light" for="design">Design</label><br>
          <input type="checkbox" id="business" value="interest_business" name="user_interest"><label class="light" for="business">Business</label>
          
         </fieldset>
       
        <button type="submit">Sign Up</button>
        
       </form>
    `;
  }


}

window.customElements.define('form-component', FormComponent);
