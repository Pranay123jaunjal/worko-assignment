import React from 'react';

function ListCard({ title, items }) {
  return (
    <div className="card mt-4">
      <div className="card-header">
        {title}
      </div>
      <ul className="list-group list-group-flush">
        {items.map((item, index) => (
          <li key={index} className="list-group-item">
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListCard;
