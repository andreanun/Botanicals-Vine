import AuthForm from "./AuthForm";
import FormContainer from "./AuthForm/FormContainer";
import { Link, useLocation } from "react-router-dom";
import * as userService from "services/user";
import SessionContext from "contexts/SessionContext";
import { useState, useContext } from "react";

const SignInPage = () => {
  const [error, setError] = useState("");
  const location = useLocation();
  const sessionContext = useContext(SessionContext);

  return (
    <FormContainer>
      <div className="text-red-700 font-lato">{error}</div>
      {location.state?.accountCreated && (
        <div className="p-4 rounded-lg mt-2 mb-8 bg-green-200 border border-emerald-500 text-emerald-700 ">
          Account created successfully. Please sign in.
        </div>
      )}
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
        ]}
        submitButtonLabel="sign in"
        onSubmit={async (values) => {
          const response = await userService.createSession({
            username: values.username,
            password: values.password,
          });

          const data = await response.json();
          if (response.status === 201) {
            sessionContext.signIn(data.session_token);
            data.session_token;
            setError("");
          } else {
            setError(data.error);
          }
        }}
      />
      <Link to="/sign-up" className="text-sm text-green-600 underline">
        Create An Account
      </Link>
    </FormContainer>
  );
};

export default SignInPage;
