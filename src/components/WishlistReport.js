import React from 'react';

const WishlistReport = ({ wishlist }) => {
  const receivedItems = wishlist.filter((item) => item.received);
  const pendingItems = wishlist.filter((item) => !item.received);

  return (
    <div className="wishlist-report">
      <h2>Wishlist Report</h2>
      <h3>Received Gifts</h3>
      {receivedItems.length > 0 ? (
        <ul>
          {receivedItems.map((item) => (
            <li key={item.id}>{item.event} - {item.item}</li>
          ))}
        </ul>
      ) : (
        <p>No received gifts</p>
      )}
      <h3>Pending Gifts</h3>
      {pendingItems.length > 0 ? (
        <ul>
          {pendingItems.map((item) => (
            <li key={item.id}>{item.event} - {item.item}</li>
          ))}
        </ul>
      ) : (
        <p>No pending gifts</p>
      )}
    </div>
  );
};

export default WishlistReport;
