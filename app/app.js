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

var AppMenuActions = function AppMenuActions() {
  classCallCheck(this, AppMenuActions);

  this.generateActions();
};

var AppMenuActions$1 = alt.createActions(AppMenuActions);

var AppMenuStore = function AppMenuStore() {
  classCallCheck(this, AppMenuStore);

  this.errorMessage = null;
  this.bindActions(AppMenuActions$1);
};

var AppMenuStore$1 = alt.createStore(AppMenuStore, 'AppMenuStore');

var AppMenu = React.createClass({
  displayName: 'AppMenu',
  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: 'ui sticky fixed fluid inverted menu', style: { height: '50px' } },
        React.createElement(
          'div',
          { className: 'ui simple dropdown item' },
          'Views ',
          React.createElement('i', { className: 'dropdown icon' }),
          React.createElement(
            'div',
            { className: 'menu' },
            React.createElement(
              'a',
              { className: 'item', href: '#' },
              'Actions'
            ),
            React.createElement(
              'a',
              { className: 'item', href: '#' },
              'Resources'
            )
          )
        )
      ),
      React.createElement('div', { className: 'ui container', style: { height: '50px' } })
    );
  }
});

var AppMenuContainer = React.createClass({
  displayName: 'AppMenuContainer',
  render: function render() {
    return React.createElement(
      AltContainer,
      {
        store: AppMenuStore$1,
        actions: AppMenuActions$1
      },
      React.createElement(AppMenu, null)
    );
  }
});

var TableActions = function TableActions() {
  classCallCheck(this, TableActions);

  this.generateActions('updateCell', 'editCell', 'selectCell');
};

var TableActions$1 = alt.createActions(TableActions);

var TableStore = function () {
  function TableStore() {
    classCallCheck(this, TableStore);

    this.errorMessage = null;

    var default_cell = {
      column: '',
      value: '',
      isBeingEditted: false,
      isSelected: false
    };

    var default_fields = [{ index: 1, name: 'Action' }, { index: 2, name: 'Duration' }, { index: 3, name: 'Cost' }];

    var default_row = {
      index: '0', cells: default_fields.map(function (object, i) {
        var cell = JSON.parse(JSON.stringify(default_cell));
        cell.column = object.name;
        return cell;
      }, this)
    };

    var default_task_table = {
      fields: default_fields,
      rows: [{ index: 0, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 1, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 2, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 3, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 4, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 5, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 6, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 7, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 8, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 9, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 10, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 11, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 12, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 13, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 14, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 15, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 16, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 17, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 18, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 19, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 20, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 21, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 22, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 23, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 24, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 25, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 26, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 27, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 28, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 29, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 30, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 31, cells: JSON.parse(JSON.stringify(default_row.cells)) }]
    };

    this.tableData = default_task_table;
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
        for (var cellIndex = 0; cellIndex < this.tableData.fields.length; cellIndex++) {
          this.tableData.rows[rowIndex].cells[cellIndex].isSelected = false;
          this.tableData.rows[rowIndex].cells[cellIndex].isBeingEditted = false;
        }
      }
      this.tableData.rows[indexes.rowIndex].cells[indexes.cellIndex].isSelected = true;
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

    var Headers = this.props.tableData.fields.map(function (object, i) {
      return React.createElement(
        'th',
        { key: i },
        object.name
      );
    });

    return React.createElement(
      'div',
      { className: 'ui fluid container' },
      React.createElement(
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
      return React.createElement(
        'div',
        null,
        React.createElement(AppMenuContainer, null),
        React.createElement(TableContainer, null)
      );
    }
  }]);
  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('content'));

}());
//# sourceMappingURL=app.js.map