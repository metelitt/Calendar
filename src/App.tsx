import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Event } from "./pages/Event";
import { NotFoundBlock } from "./components/NotFoundBlock";
import { Navbar } from "./components/Navbar";
const App: React.FC = () => {
  return (
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route path="" element={<Event />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFoundBlock />} />
          </Route>
      </Routes>
  );
};

export default App;
