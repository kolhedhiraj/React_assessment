const InterestCard = ({
  item,
  selected,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`p-4 border rounded-xl cursor-pointer transition ${
        selected
          ? "bg-blue-600 text-white"
          : "bg-white"
      }`}
    >
      <h3>{item.name}</h3>
    </div>
  );
};

export default InterestCard;