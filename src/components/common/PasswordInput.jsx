import { useState } from "react";

const PasswordInput = ({
  label,
  error,
  ...props
}) => {
  const [show, setShow] = useState(false);

  return (
    <div className="mb-4">
      <label className="block mb-2">
        {label}
      </label>

      <div className="relative">
        <input
          type={show ? "text" : "password"}
          className="w-full border p-3 rounded-lg"
          {...props}
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 top-3"
        >
          {show ? "Hide" : "Show"}
        </button>
      </div>

      {error && (
        <p className="text-red-500 text-sm">
          {error}
        </p>
      )}
    </div>
  );
};

export default PasswordInput;