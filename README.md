# https://github.com/DorianMaliszewski/babel-plugin-rename-react-props

This plugin allow you to rename react props at runtime


## Installation

```
npm install --save-dev babel-plugin-rename-react-props
yarn add -D babel-plugin-rename-react-props
pnpm add -D babel-plugin-rename-react-props
```


## Usage

Add the plugin in your babel configuration :

```
{
  "presets": ["react"],
  "plugins": [
    [
      "../index.js",
      {
        "attributes": [
          ["string", "test", "updateTest"],
          ["string", "test2", null],
          ["regex", "data([A-Z][a-z]+)", "transformCamelToKebab"]
        ]
      }
    ]
  ]
}
```

By example the following input:

```jsx
import React from 'react';

export default function() {
  const obj = { test: 'test' };

	return (
    <div
      test="test"
      test2="test2"
      test3="test3"
      {...{test4: 'test4', test5: 'test5'}}
      prop={{
        test6: 'test6',
        test7: 'test7',
        'test-8': 'test-8',
      }}
      datatest="no"
      dataTest="yes"
      dataSHOULDNOTCHANGETOO="yes"
      datashouldNotChange="yes"
    >Nice test</div>
  );
}
```

Will result in :

```jsx
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
```


### What can I put ? 

The configuration need to math the following : 
```
  [regex, regexToMatch, newValue | customFunctions | null]
  [string, stringToMatch, newValue | customFunctions | null]
```

- **If you put null in the last option it will delete the prop**

#### Custom functions

- transformCamelToKebab : transform the matched prop from camelCaseToKebab case