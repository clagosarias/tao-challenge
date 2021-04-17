/*
  Had to declare fetch as a global variable for the tests
  due to the fact that I use Fetch API in the constructor of UsersList
*/
global.fetch = require("node-fetch");

import UsersList from '../public/scripts/usersList';
let usersList;

test('Checking that our usersList class contains a populated "users" property', async () => {
  usersList = await new UsersList();
  expect(usersList.users.length).toBeGreaterThan(0);
})
