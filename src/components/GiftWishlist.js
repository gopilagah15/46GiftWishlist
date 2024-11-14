import React, { useState } from 'react';
import AddWishlistItem from './AddWishlistItem';
import ReceivedGifts from './ReceivedGifts';
import WishlistReport from './WishlistReport';

const GiftWishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  // Function to add a new item to the wishlist
  const addItem = (event, item) => {
    const newItem = { event, item, received: false, id: wishlist.length + 1 };
    setWishlist([...wishlist, newItem]);
  };

  // Function to mark an item as received
  const markAsReceived = (id) => {
    setWishlist(
      wishlist.map((item) =>
        item.id === id ? { ...item, received: true } : item
      )
    );
  };

  return (
    <div className="wishlist-container">
      <h1>Gift Wishlist</h1>
      <AddWishlistItem addItem={addItem} />
      <ReceivedGifts wishlist={wishlist} markAsReceived={markAsReceived} />
      <WishlistReport wishlist={wishlist} />
    </div>
  );
};

export default GiftWishlist;
