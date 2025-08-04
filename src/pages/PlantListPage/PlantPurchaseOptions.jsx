import { POT_COLORS } from "shared-components/util";
import { useState } from "react";
import clsx from "clsx";
import * as cartService from "services/cart";

const PlantPurchaseOptions = (props) => {
  const { plant, imageIndex, setImageIndex } = props;
  const [quantity, setQuantity] = useState(1);

  return (
    <>
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
      <div className="flex">
        <div className="border-2 border-slate-200 py-4 px-3 rounded-full flex items-center text-xl text-slate-300">
          <button
            onClick={() => {
              if (quantity > 1) {
                setQuantity(quantity - 1);
              }
            }}
          >
            <i className="fa-solid fa-minus"></i>
          </button>
          <div className="mx-4 text-2xl text-emerald-700">{quantity}</div>
          <button
            onClick={() => {
              setQuantity(quantity + 1);
            }}
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        <button
          className="flex flex-1 ml-2 justify-center items-center rounded-full bg-emerald-700 text-white text-xl hover:bg-emerald-800"
          onClick={async () => {
            const response = await cartService.addPlantToCart({
              quantity,
              plantId: plant.id,
              potColor: plant.images[imageIndex].pot_color,
            });
            console.log(response.status);
          }}
        >
          <i className="mr-1 fa-solid fa-cart-plus text-2xl"></i>
          add to cart
        </button>
      </div>
    </>
  );
};

export default PlantPurchaseOptions;
