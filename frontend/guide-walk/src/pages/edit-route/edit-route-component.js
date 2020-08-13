import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import AddEditFormComponent from '../../ui/add-edit-form-component';


export const EditRouteComponent = ({ userInfoDate, userDataAuth, getAddedRouteDataStart, getAllRouteDataStart, routeData }) => {
  const history = useHistory();
  const routeId = history.location.search.replace(/\?/, '');

  const [isUserOwner, setIsUserOwner] = useState(true);
  const [route, setRoute] = useState(false);

  useEffect(() => {
    getAllRouteDataStart(routeId);
  }, []);

  useEffect(() => {
    routeData && setRoute(routeData);
    userInfoDate && userInfoDate.user_routes.includes(routeId) && setIsUserOwner(true);
  }, [routeData, routeId, userInfoDate]);

  return (
    <>
      { isUserOwner &&
        <div>
          <AddEditFormComponent
            userInfoDate={userInfoDate}
            userDataAuth={userDataAuth}
            getAddedRouteDataStart={getAddedRouteDataStart}
            editedRoute={route}
          />
        </div>
      }
      { !isUserOwner && 
        <div>You can't edit this route. Because you're not the owner</div>
      }
    </>
  );
};
