import React from 'react';
import { RouteItemComponent } from '../route-item-component';

export const RouteListComponent = ({ data }) => {
  return (
    <div>
      <RouteItemComponent data={data} />
      <RouteItemComponent data={data} />
      <RouteItemComponent data={data} />
    </div>
  );
};
