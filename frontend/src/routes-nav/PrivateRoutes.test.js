import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { UserProvider } from "../testUtils";
import PrivateRoute from './PrivateRoutes'

it("renders without crashing", function () {
  render(
      <MemoryRouter>
        <UserProvider>
          <PrivateRoute />
        </UserProvider>
      </MemoryRouter>,
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(
      <MemoryRouter>
        <UserProvider>
          <PrivateRoute />
        </UserProvider>
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot when logged out", function () {
  const { asFragment } = render(
      <MemoryRouter>
        <UserProvider user={undefined}>
          <PrivateRoute />
        </UserProvider>
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});
