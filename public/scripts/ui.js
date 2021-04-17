'use strict'
class UI {
  declareElements(checkboxInput, appContent) {
    this._checkboxInput = document.querySelector(checkboxInput);
    this._appContent = document.querySelector(appContent);
    this.addCheckboxListener();
  }

  addCheckboxListener() {
    this._checkboxInput.addEventListener('change', (e) => {
      e.target.checked ? this.changeContentList() : this.changeContentGrid();
    }, false);
  }

  changeContentList() {
    this._appContent.classList.add('list')
  }

  changeContentGrid() {
    this._appContent.classList.remove('list')
  }

  get appContent() {
    return this._appContent;
  }
}

export default UI = new UI();