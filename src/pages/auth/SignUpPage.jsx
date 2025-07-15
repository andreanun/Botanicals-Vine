import AuthForm from "./AuthForm";
import FormContainer from "./AuthForm/FormContainer";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import * as userService from "services/user";

const SignUpPage = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  return (
    <FormContainer>
      <div className="font-lato text-red-700">{error}</div>
      <AuthForm
        fields={[
          {
            label: "username",
            type: "text",
          },
          {
            label: "password",
            type: "password",
          },
          {
            label: "confirm password",
            type: "password",
          },
        ]}
        submitButtonLabel="create an account"
        onSubmit={async (values) => {
          if (values.username.length < 4) {
            setError("username is too short!");
          }

          if (values.password.length < 4) {
            setError("password is too short!");
          }

          if (values.password !== values["confirm password"]) {
            setError("password not equal!");
          }

          //now we can make our requests
          const response = await userService.createUser({
            username: values.username,
            password: values.password,
          });

          if (response.status === 201) {
            setError("");
            //navigate user to sign in
            navigate("/", {
              state: {
                accountCreated: true,
              },
            });
          } else {
            const data = await response.json();
            setError(data.error);
          }
        }}
      />
      <Link to="/" className="text-sm text-green-600 underline">
        Sign In
      </Link>
    </FormContainer>
  );
};

export default SignUpPage;
