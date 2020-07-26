import React from 'react';

export const RouteItemComponent = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div>Hi</div>
      {data.map(({ image, rating, name }) => {
        return (
          <div key={image}>
            <img src={image} alt="img" />
            <p>{rating}</p>
            <p>{name}</p>
          </div>
        );
      })}
    </div>
  );
};
