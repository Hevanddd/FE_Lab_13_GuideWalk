import React, { useState, useEffect, Fragment } from 'react';
import CSSModules from 'react-css-modules';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router';
import { formatDate } from './helpers';
import { MapDrawComponent } from '../../ui/map-draw';

import styles from './preview.module.scss';

const PreviewRouteComponent = ({getAllRouteDataStart, routeData, setCurrentRoute, currentRoute, location}) => {
    
  const routeId = location.search.replace(/\?/, '');
  const [route, setRoute] = useState(false);

  useEffect(() => {
    getAllRouteDataStart(routeId);
  }, []);
  
  useEffect(() => {
    if(routeData){
      setRoute(routeData);
    }
  }, [routeData]);
  
  const {name, description, author, rating, creation_date, ownerName} = route.route;
  const date = formatDate(creation_date);
  const {points} = route;
  const firstPoint = points && points[0].location;
  const lastPoint = points && points[points.length-1].location;

  const errorMessage = <p styleName='preview__error'>Firstly, you should finish your started route.</p>;

  return (
      <>
        <div styleName='preview'>
          <p styleName='preview__name'>{name}</p>
          <p styleName='preview__description'>{description}</p>
          {currentRoute && errorMessage}
          <Button styleName='preview__btn' type='button' color='primary' variant='contained' disabled = {!!currentRoute} onClick={() => setCurrentRoute(routeId)}>
            Start This Route
          </Button>
          <div styleName='preview__wrapper'>
            <div>
              <p>Author</p>
              <span>{ownerName}</span>
            </div>
            <div>
              <p>Rating</p>
              <span styleName='preview__rating'>
                {rating}
              </span>
            </div>
            <div>
              <p>Date</p>
              <span>{date}</span>
            </div>
          </div>
        </div>
        <MapDrawComponent styleName='map' firstPoint={firstPoint} lastPoint={lastPoint} />
    </>
  );
};

const PreviewRoute = withRouter(PreviewRouteComponent);

export default CSSModules(PreviewRouteComponent, styles);
