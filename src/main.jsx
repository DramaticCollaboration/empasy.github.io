import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import TagManager from '@sooro-io/react-gtm-module'
import ReactGA from "react-ga";

const tagManagerArgs = {
    gtmId: 'GTM-M5BB63X5', // replace with your GTM container ID
}
TagManager.initialize(tagManagerArgs)


ReactGA.initialize("G-4QQGMW5P45", { debug: true }); // react-ga 초기화 및 debug 사용
ReactGA.pageview(window.location.pathname); // 추적하려는 page 설정


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
