import { POT_COLORS } from "shared-components/util";
import clsx from "clsx";

const PlantPurchaseOptions = (props) => {
  const { plant, imageIndex, setImageIndex } = props;

  return (
    <div className="my-10">
      <div className="flex text-emerald-700">
        <i className="text-2xl fa-solid fa-brush mr-2"></i>
        <div className="text-lg">Pot Colors</div>
      </div>
      <div className="flex my-4">
        {plant.images.map((image, idx) => (
          <div
            key={image.pot_color}
            className="flex flex-col items-center mx-2"
            onMouseEnter={() => setImageIndex(idx)}
          >
            <div
              className={clsx(
                "rounded-full w-10 h-10",
                POT_COLORS[image.pot_color],
                imageIndex === idx &&
                  "outline outline-offset-2 outline-slate-300"
              )}
            ></div>
            <div
              className={clsx(
                "mt-1",
                imageIndex === idx ? "text-slate-700" : "text-slate-500"
              )}
            >
              {image.pot_color}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantPurchaseOptions;
