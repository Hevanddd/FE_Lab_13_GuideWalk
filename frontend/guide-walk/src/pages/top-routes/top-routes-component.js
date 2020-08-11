import React, { useEffect } from 'react'
import { withRouter } from "react-router";
import {TopRoutesItemComponent} from '../../ui/top-item-component';

import './top-routes-component.scss'

const TopRoutes = ({allRoutes, getAllRoutesStart, history}) => {

  useEffect(() => {
      getAllRoutesStart();
    }, []);

    const handleMyRoutesButton = () => {
      const url = '/my-routes';
      history.push(url);
    }

  return (
    <div className='top-routes__wrapper'>
      <button onClick={handleMyRoutesButton}>My routes</button>
      {allRoutes &&
      allRoutes.map((route) => {
        const { name, _id, rating, } = route;

        return (
          <TopRoutesItemComponent
            name={name}
            rating={rating}
            routeId={_id}
            key={_id}
          />
        );
      })}
    </div>
  )
}

export const TopRoutesComponent = withRouter(TopRoutes)

