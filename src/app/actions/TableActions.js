import alt from '../alt';

class TableActions {
  constructor() {
    this.generateActions(
      'updateCell',
      'editCell',
      'selectCell'
    )
  }
}

export default alt.createActions(TableActions);
