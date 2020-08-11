import React, { useState, useEffect } from 'react';
import CSSModules from 'react-css-modules';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router';
import { formatDate } from './helpers';
import { MapDrawComponent } from '../../ui/map-draw';

import styles from './preview.module.scss';

const PreviewRouteComponent = ({getAllRouteDataStart, routeData, setCurrentRoute, currentRoute, location}) => {
    
  const testRoute = '5f31585248f0c89eff4d2c9a';


  const defaultRoute = {
    points: [
      {
        title: 'Title',
        location: { longitude: 20.026046775501584, latitude: 55.84491757693033 },
        description: 'Description',
      },
      {
        title: 'Title2',
        location: { longitude: 24.044624449241724, latitude: 49.82795824872929 },
        description: 'Description2',
      },
    ],
    route: {
      name: 'Route',
      focus: 'Focus',
      description: 'This is wonderful route that will give you pleasure of visiting outstanding places.',
      ownerName: 'Igor Mandziak',
      rating: 22,
      creation_date: new Date()
    },
  };

  const [route, setRoute] = useState(defaultRoute);

  useEffect(() => {
    getAllRouteDataStart(testRoute);
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
        <Button styleName='preview__btn' type='button' color='primary' variant='contained' disabled = {!!currentRoute} onClick={() => setCurrentRoute(testRoute)}>
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
