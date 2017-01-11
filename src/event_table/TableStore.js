import alt from '../app/alt';
import TableActions from './TableActions';

var win = require('electron').remote;

class TableStore {
  constructor() {
    this.errorMessage = null;
    this.height = win.getCurrentWindow().getContentSize()[1] - 150;

    var default_cell = {
      column: '',
      value: '',
      isBeingEditted: false,
      isSelected: false
    };

    var default_fields = [
      { index: 1, name: 'Action'},
      { index: 2, name: 'Duration'},
      { index: 3, name: 'Cost'}
    ];

    var default_row = {
      index: '0', cells: default_fields.map(function(object, i) {
        var cell = JSON.parse(JSON.stringify(default_cell));
        cell.column = object.name;
        return (cell);
      }, this)
    };

    var default_task_table = {
      fields: default_fields,
      rows: [
        {index: 0, cells: JSON.parse(JSON.stringify(default_row.cells))},
        {index: 1, cells: JSON.parse(JSON.stringify(default_row.cells))},
        {index: 2, cells: JSON.parse(JSON.stringify(default_row.cells))},
        {index: 3, cells: JSON.parse(JSON.stringify(default_row.cells))},
        {index: 4, cells: JSON.parse(JSON.stringify(default_row.cells))},
        {index: 5, cells: JSON.parse(JSON.stringify(default_row.cells))},
        {index: 6, cells: JSON.parse(JSON.stringify(default_row.cells))},
        {index: 7, cells: JSON.parse(JSON.stringify(default_row.cells))},
        {index: 8, cells: JSON.parse(JSON.stringify(default_row.cells))},
        {index: 9, cells: JSON.parse(JSON.stringify(default_row.cells))},
        {index: 10, cells: JSON.parse(JSON.stringify(default_row.cells))},
        {index: 11, cells: JSON.parse(JSON.stringify(default_row.cells))},
        {index: 12, cells: JSON.parse(JSON.stringify(default_row.cells))},
        {index: 13, cells: JSON.parse(JSON.stringify(default_row.cells))},
        {index: 14, cells: JSON.parse(JSON.stringify(default_row.cells))},
        {index: 15, cells: JSON.parse(JSON.stringify(default_row.cells))},
        {index: 16, cells: JSON.parse(JSON.stringify(default_row.cells))},
        {index: 17, cells: JSON.parse(JSON.stringify(default_row.cells))},
        {index: 18, cells: JSON.parse(JSON.stringify(default_row.cells))},
        {index: 19, cells: JSON.parse(JSON.stringify(default_row.cells))},
        {index: 20, cells: JSON.parse(JSON.stringify(default_row.cells))},
        {index: 21, cells: JSON.parse(JSON.stringify(default_row.cells))},
        {index: 22, cells: JSON.parse(JSON.stringify(default_row.cells))},
        {index: 23, cells: JSON.parse(JSON.stringify(default_row.cells))},
        {index: 24, cells: JSON.parse(JSON.stringify(default_row.cells))},
        {index: 25, cells: JSON.parse(JSON.stringify(default_row.cells))},
        {index: 26, cells: JSON.parse(JSON.stringify(default_row.cells))},
        {index: 27, cells: JSON.parse(JSON.stringify(default_row.cells))},
        {index: 28, cells: JSON.parse(JSON.stringify(default_row.cells))},
        {index: 29, cells: JSON.parse(JSON.stringify(default_row.cells))},
        {index: 30, cells: JSON.parse(JSON.stringify(default_row.cells))}
      ]
    };

    this.tableData = default_task_table;
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
      for(var cellIndex = 0; cellIndex < this.tableData.fields.length; cellIndex++){
        this.tableData.rows[rowIndex].cells[cellIndex].isSelected = false;
        this.tableData.rows[rowIndex].cells[cellIndex].isBeingEditted = false;
      }
    }
    this.tableData.rows[indexes.rowIndex].cells[indexes.cellIndex].isSelected = true;
  }

  onUpdateViewHeight(size) {
    this.height = size - 150;
  }
}

export default alt.createStore(TableStore, 'TableStore');
