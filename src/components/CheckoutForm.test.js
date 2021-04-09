import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  
  // Arrange
  render(<CheckoutForm />);

  // Act
  const h1 = screen.queryByText(/checkout form/i);

  //Assert header is in document
  expect(h1).toBeInTheDocument();

  // Assert header has correct text content
  expect(h1).toHaveTextContent('Checkout Form');

});

test("form shows success message on submit with form details", async () => {
  // Arrange: Setup the component
  render(<CheckoutForm />);

  // Act: Find and correctly fill in all form fields and click checkout button
  const firstNameInput = screen.getByLabelText(/first name:/i);
  userEvent.type(firstNameInput, 'Dustin');
  const lastNameInput = screen.getByLabelText(/last name:/i);
  userEvent.type(lastNameInput, 'Myers');
  const addressInput = screen.getByLabelText(/address:/i);
  userEvent.type(addressInput, '505 Ezy Street');
  const cityInput = screen.getByLabelText(/city:/i);
  userEvent.type(cityInput, 'New York');
  const stateInput = screen.getByLabelText(/state:/i);
  userEvent.type(stateInput, 'NY');
  const zipInput = screen.getByLabelText(/zip:/i);
  userEvent.type(zipInput, '12345');
  const checkoutButton = screen.getByTestId('checkoutButton');
  userEvent.click(checkoutButton);

  // Assert: Success Message will display with form details
  await waitFor( () => {
    const successDisp = screen.queryByTestId('successMessage');
    expect(successDisp).toBeInTheDocument();
  });
});
