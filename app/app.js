(function () {'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var ReactDOM = _interopDefault(require('react-dom'));
var AltContainer = _interopDefault(require('alt-container'));
var Alt = _interopDefault(require('alt'));

var alt = new Alt();

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var TableActions = function TableActions() {
  classCallCheck(this, TableActions);

  this.generateActions('updateCell', 'editCell', 'selectCell');
};

var TableActions$1 = alt.createActions(TableActions);

var TableStore = function () {
  function TableStore() {
    classCallCheck(this, TableStore);

    this.errorMessage = null;

    this.tableData = {
      headers: ['Name', 'Price'],
      rows: [{ index: 0, cells: [{ column: 'Name', value: 'Abu Dhabi', isBeingEditted: false, isSelected: false }, { column: 'Cost', value: 'Fucktown', isBeingEditted: false, isSelected: false }] }, { index: 1, cells: [{ column: 'Name', value: 'Berlin', isBeingEditted: false, isSelected: false }, { column: 'Cost', value: 'Fucktown', isBeingEditted: false, isSelected: false }] }, { index: 2, cells: [{ column: 'Name', value: 'Bogota', isBeingEditted: false, isSelected: false }, { column: 'Cost', value: 'Fucktown', isBeingEditted: false, isSelected: false }] }, { index: 3, cells: [{ column: 'Name', value: 'Buenos Aires', isBeingEditted: false, isSelected: false }, { column: 'Cost', value: 'Fucktown', isBeingEditted: false, isSelected: false }] }, { index: 4, cells: [{ column: 'Name', value: 'Cairo', isBeingEditted: false, isSelected: false }, { column: 'Cost', value: 'Fucktown', isBeingEditted: false, isSelected: false }] }, { index: 5, cells: [{ column: 'Name', value: 'Chicago', isBeingEditted: false, isSelected: false }, { column: 'Cost', value: 'Fucktown', isBeingEditted: false, isSelected: false }] }, { index: 6, cells: [{ column: 'Name', value: 'Lima', isBeingEditted: false, isSelected: false }, { column: 'Cost', value: 'Fucktown', isBeingEditted: false, isSelected: false }] }, { index: 7, cells: [{ column: 'Name', value: 'London', isBeingEditted: false, isSelected: false }, { column: 'Cost', value: 'Fucktown', isBeingEditted: false, isSelected: false }] }, { index: 8, cells: [{ column: 'Name', value: 'Miami', isBeingEditted: false, isSelected: false }, { column: 'Cost', value: 'Fucktown', isBeingEditted: false, isSelected: false }] }, { index: 9, cells: [{ column: 'Name', value: 'Moscow', isBeingEditted: false, isSelected: false }, { column: 'Cost', value: 'Fucktown', isBeingEditted: false, isSelected: false }] }, { index: 10, cells: [{ column: 'Name', value: 'Mumbai', isBeingEditted: false, isSelected: false }, { column: 'Cost', value: 'Fucktown', isBeingEditted: false, isSelected: false }] }, { index: 11, cells: [{ column: 'Name', value: 'Paris', isBeingEditted: false, isSelected: false }, { column: 'Cost', value: 'Fucktown', isBeingEditted: false, isSelected: false }] }, { index: 12, cells: [{ column: 'Name', value: 'San Francisco', isBeingEditted: false, isSelected: false }, { column: 'Cost', value: 'Fucktown', isBeingEditted: false, isSelected: false }] }]
    };

    this.bindActions(TableActions$1);
  }

  createClass(TableStore, [{
    key: 'onUpdateCell',
    value: function onUpdateCell(indexes) {
      this.tableData.rows[indexes.rowIndex].cells[indexes.cellIndex].value = indexes.value;
    }
  }, {
    key: 'onEditCell',
    value: function onEditCell(indexes) {
      this.tableData.rows.forEach(function (row) {
        row.cells.forEach(function (cell) {
          cell.isBeingEditted = false;
        });
      });
      this.tableData.rows[indexes.rowIndex].cells[indexes.cellIndex].isBeingEditted = true;
    }
  }, {
    key: 'onSelectCell',
    value: function onSelectCell(indexes) {
      for (var rowIndex = 0, rowsLen = this.tableData.rows.length; rowIndex < rowsLen; rowIndex++) {
        for (var cellIndex = 0, cellsLen = this.tableData.rows[rowIndex].cells.length; cellIndex < cellsLen; cellIndex++) {
          this.tableData.rows[rowIndex].cells[cellIndex].isSelected = false;
          this.tableData.rows[rowIndex].cells[cellIndex].isBeingEditted = false;
        }
      }
      this.tableData.rows[indexes.rowIndex].cells[indexes.cellIndex].isSelected = true;

      // db.fetch();
    }
  }]);
  return TableStore;
}();

var TableStore$1 = alt.createStore(TableStore, 'TableStore');

var Cell = React.createClass({
  displayName: "Cell",
  render: function render() {
    var _this = this;

    var className = "";

    if (this.props.cellData.isSelected) {
      className = "active";
    } else {
      className = "";
    }

    if (this.props.cellData.isBeingEditted) {
      return React.createElement(
        "td",
        { className: className },
        React.createElement(
          "div",
          { className: "ui fluid input focus" },
          React.createElement("input", { type: "text",
            ref: function ref(input) {
              _this.textInput = input;
            },
            defaultValue: this.props.cellData.value,
            onFocus: function onFocus() {
              _this.textInput.select();
            },
            onChange: this.handleEdit })
        )
      );
    } else {
      return React.createElement(
        "td",
        { className: className, onClick: this.handleClick, onDoubleClick: this.handleDoubleClick },
        this.props.cellData.value
      );
    }
  },
  handleClick: function handleClick() {
    this.props.selectCell({ rowIndex: this.props.rowIndex, cellIndex: this.props.cellIndex });
  },
  handleDoubleClick: function handleDoubleClick() {
    this.props.editCell({ rowIndex: this.props.rowIndex, cellIndex: this.props.cellIndex });
  },
  handleEdit: function handleEdit() {
    this.props.updateCell({ rowIndex: this.props.rowIndex, cellIndex: this.props.cellIndex, value: this.textInput.value });
  },
  componentDidUpdate: function componentDidUpdate() {
    if (this.props.cellData.isBeingEditted) {
      this.textInput.focus();
    }
  }
});

var Row = React.createClass({
  displayName: 'Row',
  render: function render() {
    var Cells = this.props.rowData.cells.map(function (object, i) {
      return React.createElement(Cell, {
        cellData: object,
        rowIndex: this.props.rowData.index,
        cellIndex: i,
        selectCell: this.props.selectCell,
        editCell: this.props.editCell,
        updateCell: this.props.updateCell,
        key: i });
    }, this);

    return React.createElement(
      'tr',
      null,
      Cells
    );
  }
});

var Table = React.createClass({
  displayName: 'Table',
  render: function render() {
    var Rows = this.props.tableData.rows.map(function (object, i) {
      return React.createElement(Row, {
        rowData: object,
        selectCell: this.props.selectCell,
        editCell: this.props.editCell,
        updateCell: this.props.updateCell,
        key: i });
    }, this);

    var Headers = this.props.tableData.headers.map(function (object, i) {
      return React.createElement(
        'th',
        { key: i },
        object
      );
    });

    return React.createElement(
      'table',
      { className: 'ui striped fixed single line selectable celled table' },
      React.createElement(
        'thead',
        null,
        React.createElement(
          'tr',
          null,
          Headers
        )
      ),
      React.createElement(
        'tbody',
        null,
        Rows
      )
    );
  }
});

var TableContainer = React.createClass({
  displayName: 'TableContainer',
  render: function render() {
    return React.createElement(
      AltContainer,
      {
        store: TableStore$1,
        actions: TableActions$1
      },
      React.createElement(Table, null)
    );
  }
});

var App = function (_React$Component) {
    inherits(App, _React$Component);

    function App() {
        classCallCheck(this, App);
        return possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    createClass(App, [{
        key: 'render',
        value: function render() {
            return React.createElement(TableContainer, null);
        }
    }]);
    return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('content'));

}());
//# sourceMappingURL=app.js.map