import React from 'react';
import AddEditFormComponent from '../../ui/add-edit-form-component';

export const AddRouteComponent = ({ userInfoDate, getAddedRouteDataStart }) => {
  return (
    <div>
        < AddEditFormComponent 
          userInfoDate = { userInfoDate }
          getAddedRouteDataStart ={ getAddedRouteDataStart} />
    </div>
  );
};
