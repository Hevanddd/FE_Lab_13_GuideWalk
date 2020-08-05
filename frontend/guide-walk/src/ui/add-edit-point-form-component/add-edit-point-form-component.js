import React, { useEffect } from 'react';
import CSSModules from 'react-css-modules';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import{ MapAddEditPoint } from '../map-add-edit-point';
import { useForm, Controller } from 'react-hook-form';

import styles from './add-edit-point-form.module.scss';

const AddEditPointFormComponent = ({ savePoint, editedPoint }) => {
  const { register, handleSubmit, control, setValue } = useForm();

  const title = editedPoint ? editedPoint.title : '';
  const description = editedPoint ? editedPoint.description : '';

  let coords = editedPoint ? editedPoint.location : null;

  useEffect(() => {
    setValue('title', title);
    setValue('description', description);
  });

  const setCoordinatesMarker = (data) => {
    coords = data;
  }

  const submitPoint = (point) => {
    point.location = coords;
    if (editedPoint) {
      savePoint(point, editedPoint.id);
    } else {
      savePoint(point);
    }
  };

  return (
    <div styleName='form'>
      <TextField 
        inputRef={register} 
        name='title' 
        label='Point Name' 
        placeholder={'Enter title'} 
        variant='outlined' 
        InputLabelProps={{ shrink: true }}
      />

      <Controller
        as={TextField}
        control={control}
        name='description'
        label='Description'
        multiline
        rows={4}
        placeholder='Enter description'
        variant='outlined'
        InputLabelProps={{ shrink: true }}
      />

      <MapAddEditPoint 
        width={'100%'} 
        height={'50vh'} 
        zoom={15} 
        coordinatesMarker = {
          coords
        }
        setCoordinatesMarker={setCoordinatesMarker}
      />
     
     <Button
        styleName='form__btn'
        type='button'
        color='secondary'
        variant='contained'
        onClick={handleSubmit((data) => submitPoint(data))}
      >
        Save Point
      </Button>
    </div>
  );
};

export default CSSModules(AddEditPointFormComponent, styles);