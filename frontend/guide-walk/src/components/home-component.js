import React from 'react';

export const HomeComponent = ({data, getHomeUserDataStart}) => {
  console.log(data);
  const handleOnClick = () => {
    getHomeUserDataStart();
  };
  return (
    <div>
      <button onClick={handleOnClick}>Click</button>
    </div>
  );
};
