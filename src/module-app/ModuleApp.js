import React from "react";

import { PORTAL_ROOT_ID } from "../constant";
import { Portal } from "../components/Portal";
import { StyleManager } from "../components/StyleManager";
import { AutoComplete } from "../components/AutoComplete";
import { GardenDropdown } from "../components/GardenDropdown";

export const ModuleApp = () => {

  return (
    <>
      <h1>Inside an iframe</h1>
      <h>Render a component in the core app from iframe using React Portal</h>

      <Portal rootId={PORTAL_ROOT_ID}>
        <StyleManager environment={window.parent}>
          <>
            <GardenDropdown
              id={"kai_garden_dropdown"}
              environment={window.parent}
            />
            <AutoComplete
              id={"kai_auto_complete"}
              environment={window.parent}
            />
          </>
        </StyleManager>
      </Portal>
    </>
  );
};
