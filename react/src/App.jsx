import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Tenant from "./components/Tenants";
import Listings from "./components/Listings";
import Applicants from "./components/Applicants";
import Chats from "./components/Chats";
import Documents from "./components/Documents";
import SubAdmins from "./components/SubAdmins";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="listingsAdmin" element={<Listings />} />
        <Route path="tenantsAdmin" element={<Tenant />} />
        <Route path="applicantsAdmin" element={<Applicants />} />
        <Route path="chatsAdmin" element={<Chats />} />
        <Route path="documentsAdmin" element={<Documents />} />
        <Route path="subAdminsAdmin" element={<SubAdmins />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
