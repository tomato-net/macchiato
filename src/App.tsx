import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import * as Page from './page';
import {ThemeProvider} from "./theme";

function App() {
  return (
      <ThemeProvider>
          <Router>
              <Routes>
                  <Route path={`/`} element={<Page.Layout />}>
                      <Route index element={<Page.Home />} />
                      <Route path={`/login`} element={<Page.Login />} />
                      <Route path={`/upload`} element={<Page.Manage />} />
                      <Route path={`/create`} element={<Page.New />} />
                  </Route>
              </Routes>
          </Router>
      </ThemeProvider>
  );
}

export default App;
