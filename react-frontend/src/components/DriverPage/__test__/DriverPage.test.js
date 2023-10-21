import React from "react";
import { render, screen } from "@testing-library/react";

import DriverPage from "../DriverPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders driver page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <DriverPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("driver-datatable")).toBeInTheDocument();
    expect(screen.getByRole("driver-add-button")).toBeInTheDocument();
});
