import { RemoveScroll } from "react-remove-scroll";
import SessionContext from "contexts/SessionContext";
import { useCallback, useContext, useEffect, useState } from "react";
import * as cartService from "services/cart";
import LoadingSpinner from "shared-components/LoadingSpinner";
import CartItem from "./CartItem";
import clsx from "clsx";
import { motion } from "framer-motion";

const CartModal = () => {
  const { username } = useContext(SessionContext);
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  const fetchCart = useCallback(async () => {
    setLoading(true);
    const response = await cartService.getCart();
    setItems(await response.json());
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  let subTotal = 0;
  let totalQuantity = 0;
  for (let item of items) {
    totalQuantity += item.quantity;
    subTotal += item.quantity * item.price_per_unit;
  }

  return (
    <motion.div
      className="bg-white w-full h-screen max-w-xl flex flex-col"
      initial={{ translateX: "100%" }} //shifts right
      animate={{ translateX: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="font-playfair shadow-md bg-emerald-800 text-white text-center py-7 text-3xl">
        {username}&apos;s Cart
      </div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="flex-1 overflow-y-scroll pb-20">
          {items.map((item, idx) => (
            <div
              className={clsx(
                "mx-5 mt-8 pt-8",
                idx !== 0 && "border-t border-slate-200"
              )}
              key={item.id}
            >
              <CartItem item={item} fetchCart={fetchCart} />
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-col px-4 pb-4 border-t border-slate-200">
        <div className="flex justify-between py-4 text-slate-400">
          <div>{totalQuantity}</div>
          <div>
            subtotal
            <span className="ml-2 text-lg text-slate-500"> ${subTotal}</span>
          </div>
        </div>
        <button
          className="bg-emerald-700 text-white text-lg rounded-full py-3 flex items-center justify-center"
          onClick={() => alert("this app is just a proof of concept :)")}
        >
          checkout
          <i className="fa-solid fa-arrow-right-to-line text-2xl ml-2"></i>
        </button>
      </div>
    </motion.div>
  );
};

export default CartModal;
