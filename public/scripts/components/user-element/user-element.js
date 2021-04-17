'use strict';

(function() {
  const template = document.createElement('template');

  template.innerHTML = `
    <div class="app__content__user">
      <slot name="identifier"></slot>
    </div>
  `;

  class UserElement extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }

  window.customElements.define('user-element', UserElement);
})();