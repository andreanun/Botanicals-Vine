// AuthForm.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import AuthForm from "./AuthForm";

test("shows error message on invalid login attempt", async () => {
  render(<AuthForm />);

  // Find inputs and the submit button
  const usernameInput = screen.getByPlaceholderText(/username/i);
  const passwordInput = screen.getByPlaceholderText(/password/i);
  const submitButton = screen.getByRole("button", { name: /sign in/i });

  // Simulate user typing wrong info
  fireEvent.change(usernameInput, { target: { value: "wrong_user" } });
  fireEvent.change(passwordInput, { target: { value: "wrong_password" } });
  fireEvent.click(submitButton);

  // Assert that the error text from your screenshot appears
  const errorMessage = await screen.findByText(/incorrect username/i);
  expect(errorMessage).toBeInTheDocument();
});
