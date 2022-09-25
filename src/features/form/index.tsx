import React, { useState, useEffect } from "react";
import {
  setName,
  selectName,
  setEmail,
  selectEmail,
  addWishlistItem,
  removeWishlistItem,
  selectWishlist,
} from "./formSlice";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { FormWrapper } from "./styled";

export const Form = () => {
  const dispatch = useAppDispatch();
  const name = useAppSelector(selectName);
  const email = useAppSelector(selectEmail);
  const wishlist = useAppSelector(selectWishlist);
  const [wishlistItem, setWishlistItem] = useState<string>("");

  useEffect(() => {
    setWishlistItem('');
  }, [wishlist]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if(e.key === 'Enter'){
        dispatch(addWishlistItem(wishlistItem))
    }
  }

  return (
    <FormWrapper>
      <label>Name</label>
      <input
        type="text"
        placeholder="Jo jo"
        value={name}
        onChange={(e) => dispatch(setName(e.target.value))}
      />

      <label>Email</label>
      <input
        type="text"
        placeholder="jojo@gmail.com"
        value={email}
        onChange={(e) => dispatch(setEmail(e.target.value))}
      />

      <label>Wishlist</label>
      <input
        type="text"
        placeholder="www.amazon.com/cool-item-you-want"
        value={wishlistItem}
        onChange={(e) => setWishlistItem(e.target.value)}
        onKeyDown={(e) => handleKeyPress(e)}
      />
      <button
        onClick={() => dispatch(addWishlistItem(wishlistItem))}
      >
        Add Item
      </button>
      <h4>Your Wishlist:</h4>
      <ul>
        {wishlist.map((item, index) => (
            <li key={`${index}-${item}`}>
                {item}
                <button onClick={() => dispatch(removeWishlistItem(index))}>X</button>
            </li>)
        )}
      </ul>
    </FormWrapper>
  );
};
