import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import Launcher from "./Launcher";

test("Launcher component renders", () => {
  render(
    <Router>
      <Launcher />
    </Router>
  );
});
