import alt from '../app/alt';

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
