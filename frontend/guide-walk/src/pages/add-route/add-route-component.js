import React from 'react';
import AddEditFormComponent from '../../ui/add-edit-form-component';

export const AddRouteComponent = ({ userInfoDate, userDataAuth, getAddedRouteDataStart }) => {
  return (
    <div>
        < AddEditFormComponent 
          userInfoDate = { userInfoDate }
          userDataAuth = { userDataAuth }
          getAddedRouteDataStart ={ getAddedRouteDataStart} />
    </div>
  );
};
