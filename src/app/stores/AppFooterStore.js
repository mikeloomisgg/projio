import alt from '../alt';
import AppFooterActions from '../actions/AppFooterActions';

class AppFooterStore {
  constructor() {
    this.errorMessage = null;
    this.bindActions(AppFooterActions);

    this.footerHeight = 0;
  }
}

export default alt.createStore(AppFooterStore, 'AppFooterStore');
