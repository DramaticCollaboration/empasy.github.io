import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import TagManager from '@sooro-io/react-gtm-module'
const tagManagerArgs = {
    gtmId: 'GTM-M5BB63X5', // replace with your GTM container ID
}
TagManager.initialize(tagManagerArgs)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
