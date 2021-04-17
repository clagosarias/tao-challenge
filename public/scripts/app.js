'use strict'
import UsersList from './usersList.js'
import UI from './ui.js'

(async () => {
  let usersList = await new UsersList();
  UI.declareElements('#checkboxInput', '#appContent');

  if (usersList.users.length) {
    for (let user of usersList.users) {
      // Assign userIdentifier to the value we want to show in the UI. In this case it's firstName + lastName.
      let userIdentifier = (user.firstName || '') + ' ' + (user.lastName || '');

      // If userIdentifier is null, undefined or composed only by whitespaces, userElemInstance will be equal to an empty string.
      const userElemInstance = userIdentifier.trim().length ? `<user-element>
                                  <p class="user__identifier" slot="identifier">${userIdentifier}</p>
                                </user-element>` : '';

      UI.appContent.insertAdjacentHTML("beforeend", userElemInstance);
    };
  }
})()