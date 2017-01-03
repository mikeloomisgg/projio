import alt from '../alt';

class TableActions {
  constructor() {
    this.generateActions(
      'updateCell',
      'editCell',
      'selectCell',
      'updateViewHeight'
    )
  }
}

export default alt.createActions(TableActions);
