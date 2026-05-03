import { createPortal } from "react-dom";

import CartItems from "./CartItems.tsx";

import CloseIcon from "../assets/svg/close.svg";

type CartProps = {
  onClose: () => void;
};

function Cart({ onClose }: CartProps) {
  return createPortal(
    <>
      <div className="cart-backdrop" />
      <dialog className="cart-modal" open>
        <div className="cart-content">
          <h2>سبد خرید</h2>
          <div className="cart-actions">
            <button onClick={onClose}>
              <img src={CloseIcon} alt="close-icon" />
            </button>
          </div>
        </div>
        <CartItems />
      </dialog>
    </>,
    document.getElementById("modal")!,
  );
}

export default Cart;
