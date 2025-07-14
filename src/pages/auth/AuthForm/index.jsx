import { useState } from "react";
import Field from "./Field";

const AuthForm = (props) => {
  const { fields, submitButtonLabel, onSubmit } = props;
  const [fieldValues, setFieldValues] = useState(() => {
    const initialState = {};
    for (let field of fields) {
      initialState[field.label] = "";
    }
    return initialState;
  });

  return (
    <form
      className="p-4 m-4 font-lato bg-white border border-slate-300 rounded-lg"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(fieldValues);
      }}
    >
      {fields.map((field) => (
        <Field
          key={field.label}
          label={field.label}
          value={fieldValues[field.label]}
          type={field.type}
          onChange={(e) => {
            setFieldValues({ ...fieldValues, [field.label]: e.target.value });
          }}
        />
      ))}
      <button className="w-full py-2 mt-4 text-white rounded-lg bg-emerald-700">
        {submitButtonLabel}
      </button>
    </form>
  );
};

export default AuthForm;
