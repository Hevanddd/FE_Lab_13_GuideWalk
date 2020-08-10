import React from 'react';
import CSSModules from 'react-css-modules';
import Button from '@material-ui/core/Button';

import { MapDrawComponent } from '../../ui/map-draw';

import styles from './preview.module.scss';


const PreviewRouteComponent = ({title}) => {

  const testDataRequest = {
    pointArray: [
      {
        title: 'Title',
        location: { longitude: 24.026046775501584, latitude: 49.84491757693033 },
        description: 'Description',
      },
      {
        title: 'Title2',
        location: { longitude: 24.044624449241724, latitude: 49.82795824872929 },
        description: 'Description2',
      },
    ],
    routeInfo: {
      title: 'Title',
      focus: 'Focus',
      description: 'This is wonderful route that will give you pleasure of visiting outstanding places.',
      author: 'Igor Mandziak',
      rating: 22,
      date: '22.07.2020'
    },
  };

  const {description, author, rating, date} = testDataRequest.routeInfo;
  const {pointArray} = testDataRequest;
  const firstPoint = pointArray[0].location;
  const lastPoint = pointArray[pointArray.length-1].location;

  return (
    <>
      <div styleName='preview'>
        <p styleName='preview__description'>{description}</p>
        <Button styleName='preview__btn' type='button' color='primary' variant='contained' 
        // onClick={startRoute}
        >
          Start This Route
        </Button>
        <div styleName='preview__wrapper'>
          <div>
            <p>Author</p>
            <span>{author}</span>
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
      <MapDrawComponent firstPoint={firstPoint} lastPoint={lastPoint} />
      
    </>
  );
};

export default CSSModules(PreviewRouteComponent, styles);
