import React from "react";
import {
  screen,
  render,
  queryByText,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

describe("check for Terms and Condition", () => {
  beforeEach(() => render(<SummaryForm />));

  // initial state for checkbox
  test("initial condition should be unchecked", () => {
    const checkbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    expect(checkbox).not.toBeChecked();

    const confirmedButton = screen.getByRole("button", {
      name: /Confirm order/i,
    });
    expect(confirmedButton).toBeDisabled();
  });
  // state change onClick checkbox
  test("checkbox disables button on first click and enables on second click", () => {
    const checkbox = screen.getByRole("checkbox");
    const confirmedButton = screen.getByRole("button", {
      name: /Confirm order/i,
    });

    userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(confirmedButton).toBeEnabled();

    userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
    expect(confirmedButton).toBeDisabled();
  });
});

test("popover responds to hover", async () => {
  render(<SummaryForm />);
  // popover starts out hidden (when the page load , we shouldn't see the popover)
  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(nullPopover).not.toBeInTheDocument();

  // popover appears upon mouseover of checkbox label
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  userEvent.hover(termsAndConditions);

  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();

  // popover disappers when we mouse out
  userEvent.unhover(termsAndConditions);
  await waitForElementToBeRemoved(() =>
    screen.queryByText(/no ice cream will actually be delivered/i)
  );
});
