import React from "react";
import { render } from "@testing-library/react";
import Call from "./Call";
import { MemoryRouter as Router } from "react-router-dom";

test("Call component renders", () => {
  render(
    <Router>
      <Call />
    </Router>
  );
});
