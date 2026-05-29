const Checkbox = ({
  checked,
  onChange,
  label,
}) => {
  return (
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />

      <span>{label}</span>
    </label>
  );
};

export default Checkbox;