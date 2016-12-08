var alt = require('../alt');
var CellActions = require('../actions/CellActions');

class CellStore {
  constructor() {
    this.value = "";
    this.errorMessage = null;
    this.bindActions(CellActions);
  }

  onUpdateCell(value) {
    this.value = value;
    this.errorMessage = null;
  }
}

module.exports = alt.createStore(CellStore, 'CellStore');
