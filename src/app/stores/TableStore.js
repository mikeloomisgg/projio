import alt from '../alt';
import TableActions from '../actions/TableActions';

class TableStore {
  constructor() {
    this.errorMessage = null;

    this.tableData = {
      headers: [
        'Name', 'Price'
      ],
      rows: [
        { index: 0, cells: [{column: 'Name', value: 'Abu Dhabi', isBeingEditted: false, isSelected: false},{column: 'Cost', value: 'Fucktown', isBeingEditted: false, isSelected: false}] },
        { index: 1, cells: [{column: 'Name', value: 'Berlin', isBeingEditted: false, isSelected: false},{column: 'Cost', value: 'Fucktown', isBeingEditted: false, isSelected: false}] },
        { index: 2, cells: [{column: 'Name', value: 'Bogota', isBeingEditted: false, isSelected: false},{column: 'Cost', value: 'Fucktown', isBeingEditted: false, isSelected: false}] },
        { index: 3, cells: [{column: 'Name', value: 'Buenos Aires', isBeingEditted: false, isSelected: false},{column: 'Cost', value: 'Fucktown', isBeingEditted: false, isSelected: false}] },
        { index: 4, cells: [{column: 'Name', value: 'Cairo', isBeingEditted: false, isSelected: false},{column: 'Cost', value: 'Fucktown', isBeingEditted: false, isSelected: false}] },
        { index: 5, cells: [{column: 'Name', value: 'Chicago', isBeingEditted: false, isSelected: false},{column: 'Cost', value: 'Fucktown', isBeingEditted: false, isSelected: false}] },
        { index: 6, cells: [{column: 'Name', value: 'Lima', isBeingEditted: false, isSelected: false},{column: 'Cost', value: 'Fucktown', isBeingEditted: false, isSelected: false}] },
        { index: 7, cells: [{column: 'Name', value: 'London', isBeingEditted: false, isSelected: false},{column: 'Cost', value: 'Fucktown', isBeingEditted: false, isSelected: false}] },
        { index: 8, cells: [{column: 'Name', value: 'Miami', isBeingEditted: false, isSelected: false},{column: 'Cost', value: 'Fucktown', isBeingEditted: false, isSelected: false}] },
        { index: 9, cells: [{column: 'Name', value: 'Moscow', isBeingEditted: false, isSelected: false},{column: 'Cost', value: 'Fucktown', isBeingEditted: false, isSelected: false}] },
        { index: 10, cells: [{column: 'Name', value: 'Mumbai', isBeingEditted: false, isSelected: false},{column: 'Cost', value: 'Fucktown', isBeingEditted: false, isSelected: false}] },
        { index: 11, cells: [{column: 'Name', value: 'Paris', isBeingEditted: false, isSelected: false},{column: 'Cost', value: 'Fucktown', isBeingEditted: false, isSelected: false}] },
        { index: 12, cells: [{column: 'Name', value: 'San Francisco', isBeingEditted: false, isSelected: false},{column: 'Cost', value: 'Fucktown', isBeingEditted: false, isSelected: false}] }
      ]
    };

    this.bindActions(TableActions);
  }

  onUpdateCell(indexes) {
    this.tableData.rows[indexes.rowIndex].cells[indexes.cellIndex].value = indexes.value;
  }

  onEditCell(indexes) {
    this.tableData.rows.forEach(function(row) {
      row.cells.forEach(function(cell) {
        cell.isBeingEditted = false;
      });
    });
    this.tableData.rows[indexes.rowIndex].cells[indexes.cellIndex].isBeingEditted = true;
  }

  onSelectCell(indexes) {
    for(var rowIndex = 0, rowsLen = this.tableData.rows.length; rowIndex < rowsLen; rowIndex++){
      for(var cellIndex = 0, cellsLen = this.tableData.rows[rowIndex].cells.length; cellIndex < cellsLen; cellIndex++){
        this.tableData.rows[rowIndex].cells[cellIndex].isSelected = false;
        this.tableData.rows[rowIndex].cells[cellIndex].isBeingEditted = false;
      }
    }
    this.tableData.rows[indexes.rowIndex].cells[indexes.cellIndex].isSelected = true;

    // db.fetch();
  }
}

export default alt.createStore(TableStore, 'TableStore');
