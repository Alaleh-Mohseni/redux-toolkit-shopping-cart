import { useState } from "react";
import { useCartSelector } from "../store/hooks";
import Cart from "./Cart";

interface NavbarProps {
  search: string;
  onSearchChange: (value: string) => void;
}

function Navbar({ search, onSearchChange }: NavbarProps) {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const cartQuantity = useCartSelector((state) =>
    state.cart.items.reduce((value, item) => value + item.quantity, 0),
  );

  function handleOpenCart() {
    setCartIsOpen(true);
  }

  function handleCloseCart() {
    setCartIsOpen(false);
  }

  return (
    <>
      {cartIsOpen && <Cart onClose={handleCloseCart} />}
      <div className="navbar">
        <div></div>
        <input
          type="text"
          className="navbar-search"
          placeholder="جستجوی محصول..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <button onClick={handleOpenCart}>سبد خرید ({cartQuantity})</button>
      </div>
    </>
  );
}

export default Navbar;
