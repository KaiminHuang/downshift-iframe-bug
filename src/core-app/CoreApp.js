import React from 'react'

import { PORTAL_ROOT_ID } from "../constant";

export const CoreApp = () => {
  return (
    <div className="App">
      <h1>Core app</h1>
      <div id={PORTAL_ROOT_ID} />
    </div>
  );
}
