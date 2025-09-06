import React from "react";
import { Routes, Route } from "react-router-dom";
import Groom from "./pages/Groom";
import Bride from "./pages/Bride";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/groom" element={<Groom/>}/>
        <Route path="/bride" element={<Bride/>}/>
        <Route path="*" element={<Bride/>}/>
      </Routes>
      <Analytics />
      <SpeedInsights />
    </div>
  );
};

export default App;