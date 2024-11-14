import React from 'react';

const ReceivedGifts = ({ wishlist, markAsReceived }) => {
  const pendingItems = wishlist.filter((item) => !item.received);

  return (
    <div className="received-gifts">
      <h2>Pending Gifts</h2>
      {pendingItems.length > 0 ? (
        <ul>
          {pendingItems.map((item) => (
            <li key={item.id}>
              {item.event} - {item.item}
              <button onClick={() => markAsReceived(item.id)}>Mark as Received</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No pending gifts</p>
      )}
    </div>
  );
};

export default ReceivedGifts;
