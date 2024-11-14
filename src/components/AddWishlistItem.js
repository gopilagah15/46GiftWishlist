import React, { useState } from 'react';

const AddWishlistItem = ({ addItem }) => {
  const [event, setEvent] = useState('');
  const [item, setItem] = useState('');

  const handleAdd = () => {
    if (event && item) {
      addItem(event, item);
      setEvent('');
      setItem('');
    }
  };

  return (
    <div className="add-item-form">
      <h2>Add Wishlist Item</h2>
      <label>
        Event:
        <select value={event} onChange={(e) => setEvent(e.target.value)}>
          <option value="">Select Event</option>
          <option value="Birthday">Birthday</option>
          <option value="Holiday">Holiday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <label>
        Item:
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Enter item description"
        />
      </label>
      <button onClick={handleAdd}>Add Item</button>
    </div>
  );
};

export default AddWishlistItem;
