function Input({ placeholder, value, onChange }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="
        w-full
        rounded-md
        border
        border-slate-200
        bg-white
        p-3
        outline-none
        placeholder-slate-400
        focus:border-slate-400
        transition
      "
    />
  );
}

export default Input;
