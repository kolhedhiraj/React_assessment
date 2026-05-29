const PillarCard = ({
  item,
  selected,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`p-4 border rounded-xl cursor-pointer ${
        selected
          ? "bg-green-600 text-white"
          : ""
      }`}
    >
      <h3>{item.pillar_title}</h3>

      <p className="text-sm">
        {item.description}
      </p>
    </div>
  );
};

export default PillarCard;