import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import App, { Launcher, Call } from "./App";
import { MemoryRouter as Router } from "react-router-dom";

test("App component renders", () => {
  render(<App />);
});

test("Launcher component renders", () => {
  render(
    <Router>
      <Launcher />
    </Router>
  );
});

test("Call component renders", () => {
  render(
    <Router>
      <Call />
    </Router>
  );
});
