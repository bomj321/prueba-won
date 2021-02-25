import React from "react";
import { Router } from "@reach/router";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { GlobalStyle } from "./styles/GlobalStyles";
import useToken from "./hooks/useToken";

export const App = () => {
  const { token, setToken } = useToken();
  if (!token) {
    return (
      <>
        <GlobalStyle /> <Home setToken={setToken} path="/" />
      </>
    );
  }
  return (
    <>
      <GlobalStyle />
      <Router>
        <Dashboard path="/" />
      </Router>
    </>
  );
};
