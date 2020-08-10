import React, { useState } from 'react';
import { MyAndSavedRouteItemComponent } from '../../ui/my-and-saved-route-item-component';

export const SavedRoutesComponent = ({ userSavedRoutes }) => {
  return (
    <div>
      <MyAndSavedRouteItemComponent name='Roman' />
    </div>
  );
};
