import React, { useEffect } from 'react';

export const CurrentRouteComponent = ({ currentRoute, currentPointIndex, currentPointData, getNextPointStart, setCurrentRoute}) => {
  useEffect(() => {
    if (!currentRoute) {
      setCurrentRoute('5f28420de5f2f124240041c3');
    }
  })
  const handleNextRoute = () => {
    getNextPointStart({routeId: currentRoute, pointIndex: currentPointIndex});
  }
  return (
    <div>
      <button onClick = {handleNextRoute}>click</button>
    </div>
  );
};
