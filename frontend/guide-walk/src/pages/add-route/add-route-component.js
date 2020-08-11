import React from 'react';
import AddEditFormComponent from '../../ui/add-edit-form-component';

export const AddRouteComponent = ({ userInfoDate, getAddedRouteDataStart, userAuthData }) => {
  return (
    <div>
      <AddEditFormComponent
        userInfoDate={userInfoDate}
        getAddedRouteDataStart={getAddedRouteDataStart}
        userAuthData={userAuthData}
      />
    </div>
  );
};
