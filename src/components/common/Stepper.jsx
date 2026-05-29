const Stepper = ({ step }) => {
  const total = 6;

  return (
    <div className="flex gap-2 mb-8">
      {[...Array(total)].map((_, index) => (
        <div
          key={index}
          className={`h-2 flex-1 rounded ${
            index + 1 <= step
              ? "bg-blue-600"
              : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

export default Stepper;