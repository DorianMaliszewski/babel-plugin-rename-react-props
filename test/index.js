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
