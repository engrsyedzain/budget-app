import React from "react";
import { Form, NavLink } from "react-router-dom";

import { TrashIcon } from "@heroicons/react/24/solid";

import logomark from "../assets/logomark.svg";

function Nav({ userName }) {
  return (
    <nav>
      <NavLink to="/">
        <img src={logomark} width={30} />
        <span>HomeBudget</span>
      </NavLink>
      {userName && (
        <Form
          action="/logout"
          method="post"
          onSubmit={(event) => {
            if (!confirm("Delete user and all data?")) {
              event.preventDefault();
              <TrashIcon width={20} />;
            }
          }}
        >
          <button type="submit" className="btn btn--warning">
            <span>Delete User</span>
          </button>
        </Form>
      )}
    </nav>
  );
}

export default Nav;
