var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

export default function () {
  const obj = { test: 'test' };

  return React.createElement(
    'div',
    _extends({
      updateTest: 'test',

      test3: 'test3'
    }, { test4: 'test4', test5: 'test5' }, {
      prop: {
        test6: 'test6',
        test7: 'test7',
        'test-8': 'test-8'
      },
      datatest: 'no',
      'data-test': 'yes',
      dataSHOULDNOTCHANGETOO: 'yes',
      datashouldNotChange: 'yes'
    }),
    'Nice test'
  );
}
