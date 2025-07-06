const Field = (props) => {
  const { label, type, value, onChange } = props;

  return (
    <div className="flex flex-col my-4">
      <label htmlFor={label} className="pl-1 text-slate-500">
        {label}
      </label>
      <input
        id={label}
        type={type}
        value={value}
        onChange={onChange}
        className="focus:outline-emerald-600 px-2 py-1 rounded-lg border border-slate-300 w-64 bg-slate-50"
      />
    </div>
  );
};

export default Field;
