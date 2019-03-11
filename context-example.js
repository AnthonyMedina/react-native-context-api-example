import React from 'react';

// 1. create your context in it's own file, and export out
// 2. give it a default value that matches the shape
// of whatever you want it to become, when we set values there
export default React.createContext({
  text: 'this is the default text',
  toggleText: () => {
    // this fn does nothing, but needs to be here as
    // the default value passed to createContext
    // needs to match the shape that the consumers expect...
  },
});

// 3. Now check out App.js
