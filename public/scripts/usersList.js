'use strict'
export default class UsersList {
  constructor() {
    return(async () => {
      // we can fetch any other url, or even a local file
      this.users = await fetch("https://hr.oat.taocloud.org/v1/users?offset=0")
      .then(this.handleErrors)
      .then(response => response.json())
      .catch(error => []);
      return this
    })()
  }

  handleErrors(response) {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response;
  }
}
