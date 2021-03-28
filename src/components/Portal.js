import { useEffect } from "react";

import { createPortal } from "react-dom";

export const Portal = ({ children, rootId }) => {
  const root = window.document.querySelector(`#${rootId}`);

  if (!root) {
    throw Error(`Cannot find portal root div with id: ${rootId}`);
  }

  const el = window.document.createElement("portal-div");

  useEffect(() => {
    root.appendChild(el);

    return function cleanUp() {
      root.removeChild(el);
    };
  }, [el, root]);

  return createPortal(children, el);
};
