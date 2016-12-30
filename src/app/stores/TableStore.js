import alt from '../alt';
import TableActions from '../actions/TableActions';

import Db from '../sources/db';

class TableStore {
  constructor() {
    this.errorMessage = null;

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
        return ({
          column: object.name,
          value: '',
          isBeingEditted: false,
          isSelected: false
        });
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
        {index: 10, cells: JSON.parse(JSON.stringify(default_row.cells))}
      ]
    };


    this.tableData = default_task_table;
    console.log(this.tableData);
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
    console.log(indexes);
  }
}

export default alt.createStore(TableStore, 'TableStore');
