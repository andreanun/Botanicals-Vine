import SessionContext from "contexts/SessionContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartModal from "./modals/CartModal";

const NavBar = () => {
  const { username, signOut } = useContext(SessionContext);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <nav
        className="flex justify-center bg-emerald-800 font-lato"
        onMouseLeave={() => setUserMenuOpen(false)}
      >
        <div className="flex items-center justify-between px-8 py-2 w-full max-w-5xl">
          <Link to="/plants">
            <div className="font-playfair flex flex-col items-center text-2xl text-white">
              <img
                className="w-10"
                src="https://static-task-assets.react-formula.com/capstone_logo_light.png
"
              />
              Botanicals & Vine
            </div>
          </Link>
          <div className=" flex flex-1 justify-end">
            <div className="relative min-w-32">
              <button
                className="text-emerald-200 flex items-center"
                onClick={() => setUserMenuOpen(true)}
              >
                <i className="fa-solid fa-user mr-2 text-xl"></i>
                {username}
              </button>
              {userMenuOpen && (
                <div className="absolute bottom-[-46px] bg-white left-0 mt-20 rounded-md shadow-md">
                  <button
                    className="text-slate-500 hover:text-emerald-700 px-4 py-2"
                    onClick={signOut}
                  >
                    <i className="fa-solid fa-arrow-right-from-bracket mr-2"></i>
                    sign out
                  </button>
                </div>
              )}
            </div>
            <button
              className="text-emerald-200 flex items-center"
              onClick={() => setCartOpen(true)}
            >
              <i className="fa-solid fa-cart-shopping mr-2 text-xl"></i>
            </button>
          </div>
        </div>
      </nav>
      {cartOpen && <CartModal setCartOpen={setCartOpen} />}
    </>
  );
};

export default NavBar;
