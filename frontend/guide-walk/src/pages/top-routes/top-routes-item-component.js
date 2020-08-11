import React from 'react'

const TopRoutesItem = (({routes}) => {
  console.log('routes', routes)

  return (
    <div>
      {routes.map(({ rating, name, _id }) => {
        return (
          <div key={_id}>
            <p>{name}</p>
            <p>{rating}</p>
            <button>Go</button>
          </div>
        );
      })}
    </div>
  );
})

export default TopRoutesItem;