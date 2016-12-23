var alt = require('../alt');
var TableActions = require('../actions/TableActions');

class TableStore {
  constructor() {
    this.errorMessage = null;

    this.tableData = {
      rows: [
        { index: 0, cells: [{value: 'Abu Dhabi', isBeingEditted: false, isSelected: false},{value: 'Fucktown', isBeingEditted: false, isSelected: false}] },
        { index: 1, cells: [{value: 'Berlin', isBeingEditted: false, isSelected: false},{value: 'Fucktown', isBeingEditted: false, isSelected: false}] },
        { index: 2, cells: [{value: 'Bogota', isBeingEditted: false, isSelected: false},{value: 'Fucktown', isBeingEditted: false, isSelected: false}] },
        { index: 3, cells: [{value: 'Buenos Aires', isBeingEditted: false, isSelected: false},{value: 'Fucktown', isBeingEditted: false, isSelected: false}] },
        { index: 4, cells: [{value: 'Cairo', isBeingEditted: false, isSelected: false},{value: 'Fucktown', isBeingEditted: false, isSelected: false}] },
        { index: 5, cells: [{value: 'Chicago', isBeingEditted: false, isSelected: false},{value: 'Fucktown', isBeingEditted: false, isSelected: false}] },
        { index: 6, cells: [{value: 'Lima', isBeingEditted: false, isSelected: false},{value: 'Fucktown', isBeingEditted: false, isSelected: false}] },
        { index: 7, cells: [{value: 'London', isBeingEditted: false, isSelected: false},{value: 'Fucktown', isBeingEditted: false, isSelected: false}] },
        { index: 8, cells: [{value: 'Miami', isBeingEditted: false, isSelected: false},{value: 'Fucktown', isBeingEditted: false, isSelected: false}] },
        { index: 9, cells: [{value: 'Moscow', isBeingEditted: false, isSelected: false},{value: 'Fucktown', isBeingEditted: false, isSelected: false}] },
        { index: 10, cells: [{value: 'Mumbai', isBeingEditted: false, isSelected: false},{value: 'Fucktown', isBeingEditted: false, isSelected: false}] },
        { index: 11, cells: [{value: 'Paris', isBeingEditted: false, isSelected: false},{value: 'Fucktown', isBeingEditted: false, isSelected: false}] },
        { index: 12, cells: [{value: 'San Francisco', isBeingEditted: false, isSelected: false},{value: 'Fucktown', isBeingEditted: false, isSelected: false}] }
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
  }
}

module.exports = alt.createStore(TableStore, 'TableStore');
