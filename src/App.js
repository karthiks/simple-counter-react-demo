import React from 'react';

import AppUsingHooks from './AppUsingHooks'
import AppUsingConstructor from './AppUsingConstructor'
import AppUsingClassProperty from './AppUsingClassProperty'

function App() {
  return (
    <div style={{display: "inline-flex"}}>
      <AppUsingConstructor />
      <AppUsingClassProperty />
      <AppUsingHooks />
    </div>
  );
}

export default App;