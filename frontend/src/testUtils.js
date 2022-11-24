import React from "react";
import UserContext from "./auth/CurrUserContext";

const demoUser = {
  username: "testuser",
  first_name: "testfirst",
  last_name: "testlast",
  email: "test@test.net",
  photo_url: null,
  applications: []
};

const UserProvider =
    ({ children, user = demoUser, hasAppliedToJob = () => false }) => (
    <UserContext.Provider value={{ user, hasAppliedToJob }}>
      {children}
    </UserContext.Provider>
);

export { UserProvider };
