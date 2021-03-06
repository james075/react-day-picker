'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WeekdayPropTypes = undefined;
exports.default = Weekday;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PropTypes = require('./PropTypes');

var _PropTypes2 = _interopRequireDefault(_PropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Weekday(_ref) {
  var weekday = _ref.weekday,
      className = _ref.className,
      weekdaysLong = _ref.weekdaysLong,
      weekdaysShort = _ref.weekdaysShort,
      localeUtils = _ref.localeUtils,
      locale = _ref.locale;

  var title = void 0;
  if (weekdaysLong) {
    title = weekdaysLong[weekday];
  } else {
    title = localeUtils.formatWeekdayLong(weekday, locale);
  }
  var content = void 0;
  if (weekdaysShort) {
    content = weekdaysShort[weekday];
  } else {
    content = localeUtils.formatWeekdayShort(weekday, locale);
  }

  return _react2.default.createElement(
    'div',
    { className: className, role: 'columnheader' },
    _react2.default.createElement(
      'abbr',
      { title: title },
      content
    )
  );
}

var WeekdayPropTypes = exports.WeekdayPropTypes = {
  weekday: _PropTypes2.default.number,
  className: _PropTypes2.default.string,
  locale: _PropTypes2.default.string,
  localeUtils: _PropTypes2.default.localeUtils,

  weekdaysLong: _PropTypes2.default.arrayOf(_PropTypes2.default.string),
  weekdaysShort: _PropTypes2.default.arrayOf(_PropTypes2.default.string)
};

Weekday.propTypes = WeekdayPropTypes;
//# sourceMappingURL=Weekday.js.map