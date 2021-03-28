import React, { useContext } from "react";
import Frame, { FrameContext } from "react-frame-component";

import { PORTAL_ROOT_ID } from "./constant";
import { Portal } from "./components/Portal";
import { StyleManager } from "./components/StyleManager";
import { AutoComplete } from "./components/AutoComplete";
import { GardenDropdown } from "./components/GardenDropdown";

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

export default function App() {
  return (
    <div className="App">
      <h1>Core app</h1>
      <div id={PORTAL_ROOT_ID} />
      <Frame id={"kai-iframe"}>
        <FrameBody />
      </Frame>
    </div>
  );
}
