var alt = require('../alt');

class TableActions {
  constructor() {
    this.generateActions(
      'updateCell',
      'editCell',
      'selectCell'
    )
  }
}

module.exports = alt.createActions(TableActions);
