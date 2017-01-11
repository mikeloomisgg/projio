import alt from '../app/alt';
import ToolbarActions from './ToolbarActions';

class ToolbarStore {
  constructor() {
    this.errorMessage = null;
    this.bindActions(ToolbarActions);

    this.toolBarHeight = 0;
  }
}

export default alt.createStore(ToolbarStore, 'AppMenuStore');
