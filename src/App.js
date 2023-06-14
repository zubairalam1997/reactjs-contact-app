import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import ContactDetail from "./components/ContactDetail";
import EditContact from "./components/EditContact";
import { ContactsCrudContextProvider } from "./context/ContactsCrudContext";

function App() {
  return (
    <div className="ui container">
      <Router>
        <Header />
        <ContactsCrudContextProvider>
        <Routes>
          <Route
            path="/"
            exact
            element={<ContactList/>}
          />
          <Route
            path="/add"
            element={<AddContact />}
          />

          <Route
            path="/edit"
            element = {<EditContact />}
          />

          <Route path="/contact/:id" element={<ContactDetail/>} />
        </Routes>
        </ContactsCrudContextProvider>
      </Router>
    </div>
  );
}

export default App;