import React from "react";
import { render } from "@testing-library/react";
import JobsCard from "./JobsCard";
import { UserProvider } from "../testUtils";


it("matches snapshot", function () {
  let item = { title: "CEO", salary: 1000000, equity: 10 };
  const { asFragment } = render(
      <UserProvider>
        <JobsCard item={item} />
      </UserProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});