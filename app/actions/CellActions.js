var alt = require('../alt');

class CellActions {
  constructor() {
    this.generateActions(
      'updateCell'
      )
  }
}

module.exports = alt.createActions(CellActions);
