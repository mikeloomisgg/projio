var alt = require('../alt');
var TableActions = require('../actions/TableActions');

class TableStore {
  constructor() {
    this.value = "test";
    this.errorMessage = null;
    this.isBeingEditted = false;
    this.isSelected = false;

    this.bindActions(TableActions);
  }

  onUpdateCell(value) {
    this.value = value;
    this.errorMessage = null;
    this.isBeingEditted = false;
  }

  onEditCell() {
    this.isBeingEditted = true;
  }

  onSelectCell() {
    this.isSelected = true;
  }
}

module.exports = alt.createStore(TableStore, 'TableStore');
