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

  this.toolBarHeight = 0;
};

var AppMenuStore$1 = alt.createStore(AppMenuStore, 'AppMenuStore');

var AppMenuComponent = function (_React$Component) {
  inherits(AppMenuComponent, _React$Component);

  function AppMenuComponent(props) {
    classCallCheck(this, AppMenuComponent);
    return possibleConstructorReturn(this, (AppMenuComponent.__proto__ || Object.getPrototypeOf(AppMenuComponent)).call(this, props));
  }

  createClass(AppMenuComponent, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { className: 'ui fixed top sticky fluid inverted menu', style: { height: this.props.toolBarHeight + 'px' } },
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
        React.createElement('div', { className: 'ui container', style: { height: this.props.toolBarHeight + 'px' } })
      );
    }
  }]);
  return AppMenuComponent;
}(React.Component);

var AppMenuContainer = function (_React$Component) {
  inherits(AppMenuContainer, _React$Component);

  function AppMenuContainer(props) {
    classCallCheck(this, AppMenuContainer);

    var _this = possibleConstructorReturn(this, (AppMenuContainer.__proto__ || Object.getPrototypeOf(AppMenuContainer)).call(this, props));

    _this.AppMenuStore = AppMenuStore$1;
    AppMenuStore$1.state.toolBarHeight = _this.props.toolBarHeight;
    return _this;
  }

  createClass(AppMenuContainer, [{
    key: 'render',
    value: function render() {

      return React.createElement(
        AltContainer,
        {
          store: this.AppMenuStore,
          actions: AppMenuActions$1
        },
        React.createElement(AppMenuComponent, null)
      );
    }
  }]);
  return AppMenuContainer;
}(React.Component);

var AppFooterActions = function AppFooterActions() {
  classCallCheck(this, AppFooterActions);

  this.generateActions();
};

var AppFooterActions$1 = alt.createActions(AppFooterActions);

var AppFooterStore = function AppFooterStore() {
  classCallCheck(this, AppFooterStore);

  this.errorMessage = null;
  this.bindActions(AppFooterActions$1);

  this.footerHeight = 0;
};

var AppFooterStore$1 = alt.createStore(AppFooterStore, 'AppFooterStore');

var AppFooterComponent = function (_React$Component) {
  inherits(AppFooterComponent, _React$Component);

  function AppFooterComponent(props) {
    classCallCheck(this, AppFooterComponent);
    return possibleConstructorReturn(this, (AppFooterComponent.__proto__ || Object.getPrototypeOf(AppFooterComponent)).call(this, props));
  }

  createClass(AppFooterComponent, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement('div', { className: 'ui fixed bottom sticky fluid inverted menu', style: { height: this.props.footerHeight + 'px' } }),
        React.createElement('div', { className: 'ui container', style: { height: this.props.footerHeight + 'px' } })
      );
    }
  }]);
  return AppFooterComponent;
}(React.Component);

var AppFooterContainer = function (_React$Component) {
  inherits(AppFooterContainer, _React$Component);

  function AppFooterContainer(props) {
    classCallCheck(this, AppFooterContainer);

    var _this = possibleConstructorReturn(this, (AppFooterContainer.__proto__ || Object.getPrototypeOf(AppFooterContainer)).call(this, props));

    _this.AppFooterStore = AppFooterStore$1;
    AppFooterStore$1.state.footerHeight = _this.props.footerHeight;
    return _this;
  }

  createClass(AppFooterContainer, [{
    key: 'render',
    value: function render() {

      return React.createElement(
        AltContainer,
        {
          store: this.AppFooterStore,
          actions: AppFooterActions$1
        },
        React.createElement(AppFooterComponent, null)
      );
    }
  }]);
  return AppFooterContainer;
}(React.Component);

var TableActions = function TableActions() {
  classCallCheck(this, TableActions);

  this.generateActions('updateCell', 'editCell', 'selectCell', 'updateViewHeight');
};

var TableActions$1 = alt.createActions(TableActions);

var win = require('electron').remote;

var TableStore = function () {
  function TableStore() {
    classCallCheck(this, TableStore);

    this.errorMessage = null;
    this.height = win.getCurrentWindow().getContentSize()[1] - 150;

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
      rows: [{ index: 0, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 1, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 2, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 3, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 4, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 5, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 6, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 7, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 8, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 9, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 10, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 11, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 12, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 13, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 14, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 15, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 16, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 17, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 18, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 19, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 20, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 21, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 22, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 23, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 24, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 25, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 26, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 27, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 28, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 29, cells: JSON.parse(JSON.stringify(default_row.cells)) }, { index: 30, cells: JSON.parse(JSON.stringify(default_row.cells)) }]
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
  }, {
    key: 'onUpdateViewHeight',
    value: function onUpdateViewHeight(size) {
      this.height = size - 150;
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
        { style: { padding: '0' }, className: className },
        React.createElement(
          "div",
          { className: "ui fluid input focus" },
          React.createElement("input", { style: { padding: '0' }, type: "text",
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
    } else if (this.props.cellData.value == "") {
      return React.createElement(
        "td",
        { style: { padding: '11px' }, className: className, onClick: this.handleClick, onDoubleClick: this.handleDoubleClick },
        this.props.cellData.value
      );
    } else {
      return React.createElement(
        "td",
        { style: { padding: '0px' }, className: className, onClick: this.handleClick, onDoubleClick: this.handleDoubleClick },
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

var win$1 = require('electron').remote;

var Table = function (_React$Component) {
  inherits(Table, _React$Component);

  function Table(props) {
    classCallCheck(this, Table);

    var _this = possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

    var prev_height = win$1.getCurrentWindow().getContentSize()[1];

    win$1.getCurrentWindow().prependListener('resize', function (e) {
      var height = win$1.getCurrentWindow().getContentSize()[1];
      if (prev_height != height) {
        prev_height = height;
        _this.props.updateViewHeight(height);
      }
    });
    return _this;
  }

  createClass(Table, [{
    key: 'render',
    value: function render() {
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
          'div',
          { className: 'ui fluid container', style: { top: 'inherit' } },
          React.createElement(
            'table',
            { className: 'ui striped fixed selectable celled table' },
            React.createElement(
              'thead',
              null,
              React.createElement(
                'tr',
                { style: { height: '50px' } },
                Headers
              )
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'ui fluid container', style: { height: this.props.height + 'px', overflowY: 'overlay', margin: '0px', padding: '0px' } },
          React.createElement(
            'table',
            { className: 'ui striped fixed selectable celled table' },
            React.createElement(
              'tbody',
              null,
              Rows
            )
          )
        )
      );
    }
  }]);
  return Table;
}(React.Component);

var TableContainer = function (_React$Component) {
  inherits(TableContainer, _React$Component);

  function TableContainer(props) {
    classCallCheck(this, TableContainer);
    return possibleConstructorReturn(this, (TableContainer.__proto__ || Object.getPrototypeOf(TableContainer)).call(this, props));
  }

  createClass(TableContainer, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        AltContainer,
        {
          store: TableStore$1,
          actions: TableActions$1
        },
        React.createElement(Table, null)
      );
    }
  }]);
  return TableContainer;
}(React.Component);

var AppViewContainer = function (_React$Component) {
  inherits(AppViewContainer, _React$Component);

  function AppViewContainer(props) {
    classCallCheck(this, AppViewContainer);
    return possibleConstructorReturn(this, (AppViewContainer.__proto__ || Object.getPrototypeOf(AppViewContainer)).call(this, props));
  }

  createClass(AppViewContainer, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        AltContainer,
        null,
        React.createElement(TableContainer, { height: this.props.height })
      );
    }
  }]);
  return AppViewContainer;
}(React.Component);

var App = function (_React$Component) {
  inherits(App, _React$Component);

  function App(props) {
    classCallCheck(this, App);

    var _this = possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.toolBarHeight = 50;
    _this.footerHeight = 50;
    return _this;
  }

  createClass(App, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(AppMenuContainer, { toolBarHeight: this.toolBarHeight }),
        React.createElement(AppViewContainer, { height: this.viewHeight }),
        React.createElement(AppFooterContainer, { footerHeight: this.footerHeight })
      );
    }
  }]);
  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('content'));

}());
//# sourceMappingURL=app.js.map