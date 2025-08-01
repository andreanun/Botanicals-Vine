const PlantPurchaseOptions = (props) => {
  const { plant } = props;
  console.log(plant);

  return (
    <div className="my-10">
      <div className="flex text-emerald-700">
        <i className="text-2xl fa-solid fa-brush mr-2"></i>
        <div className="text-lg">Pot Colors</div>
      </div>
      <div className="flex">
        {plant.images.map((image) => (
          <div key={image.pot_color}>
            <div className="">{image.pot_color}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantPurchaseOptions;
