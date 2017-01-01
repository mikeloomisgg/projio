import alt from '../alt';
import AppMenuActions from '../actions/AppMenuActions';

class AppMenuStore {
  constructor() {
    this.errorMessage = null;
    this.bindActions(AppMenuActions);
  }
}

export default alt.createStore(AppMenuStore, 'AppMenuStore');
