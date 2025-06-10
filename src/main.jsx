import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import TagManager from '@sooro-io/react-gtm-module'
const tagManagerArgs = {
    gtmId: 'G-4QQGMW5P45', // replace with your GTM container ID
}
TagManager.initialize(tagManagerArgs)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
