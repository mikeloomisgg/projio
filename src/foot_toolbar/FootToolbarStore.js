import alt from '../app/alt';
import FootToolbarActions from './FootToolbarActions';

class FootToolbarStore {
  constructor() {
    this.errorMessage = null;
    this.bindActions(FootToolbarActions);

    this.footerHeight = 0;
  }
}

export default alt.createStore(FootToolbarStore, 'FootToolbarStore');
