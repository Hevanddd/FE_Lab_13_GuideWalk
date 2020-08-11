import React, { useEffect } from 'react'
import TopRoutesItem from './top-routes-item-component'

export const TopRoutesComponent = ({allRoutes, getAllRoutesStart}) => {
    useEffect(() => {
        //TODO: This action should be invoked when user clicks "Start route", now it's just test case
        getAllRoutesStart();
      }, []);

    return (
        <div>
          {allRoutes && <TopRoutesItem routes={allRoutes}/>}
        </div>
    )
}

