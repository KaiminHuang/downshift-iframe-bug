import React, { useContext } from "react";
import Frame, { FrameContext } from "react-frame-component";

import { DrawerModal } from "@zendeskgarden/react-modals";

import { PORTAL_ROOT_ID } from "./constant";
import { Portal } from "./Portal";
import { StyleManager } from "./StyleManager";
import { AutoComplete } from "./AutoComplete";
import { GardenDropdown } from "./GardenDropdown";

const FrameBody = () => {
  const { window: iframeWindow } = useContext(FrameContext);

  return (
    <>
      <h1>Inside an iframe</h1>
      <h>Render a component in the core app from iframe using React Portal</h>

      <Portal rootId={PORTAL_ROOT_ID}>
        <StyleManager environment={iframeWindow.parent}>
          <>
            <GardenDropdown
              id={"kai_garden_dropdown"}
              environment={iframeWindow.parent}
            />
            <AutoComplete
              id={"kai_auto_complete"}
              environment={iframeWindow.parent}
            />
          </>
        </StyleManager>
      </Portal>
    </>
  );
};

export default FrameBody
