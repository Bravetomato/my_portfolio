import React, { useEffect } from "react";
import { HashRouter } from "react-router-dom";
import App from  "./App";

export default function Root() {
  return (
    <>
           <HashRouter>
            <App />
           </HashRouter>
    </>
  );
}
