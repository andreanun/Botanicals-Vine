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
  const [loading, setLoading] = useState(false);

  return (
    <form
      className="p-4 m-4 font-lato bg-white border border-slate-300 rounded-lg"
      onSubmit={async (e) => {
        e.preventDefault();
        setLoading(true);
        await onSubmit(fieldValues);
        setLoading(false);
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
      <button className="relative w-full py-2 mt-4 text-white rounded-lg bg-emerald-700">
        {submitButtonLabel}
        {loading && (
          <div className="absolute top-0 right-4 flex items-center h-full">
            <i className="fa-solid fa-circle-notch animate-spin text-green-300 text-xl"></i>
          </div>
        )}
      </button>
    </form>
  );
};

export default AuthForm;
