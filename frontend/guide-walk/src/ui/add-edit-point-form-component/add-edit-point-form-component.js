import React, { useEffect, useState } from 'react';
import CSSModules from 'react-css-modules';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { MapAddEditPoint } from '../map-add-edit-point';
import { useForm, Controller } from 'react-hook-form';
import { VIEWPORT } from './constants';

import styles from './add-edit-point-form.module.scss';


const AddEditPointFormComponent = ({ savePoint, editedPoint, names }) => {
  const { register, handleSubmit, control, setValue, errors} = useForm();

  const name = editedPoint ? editedPoint.name : '';
  const description = editedPoint ? editedPoint.description : '';
  const initialCoords = editedPoint ? editedPoint.location : VIEWPORT;

  const [coordinates, setCoordinates] = useState(initialCoords);

  const submitPoint = (point) => {
    point.location = coordinates;
    if (editedPoint) {
      const isEdited = true;
      savePoint(point, isEdited);
    } else {
      savePoint(point);
    }
  };

  useEffect(() => {
    setValue('name', name);
    setValue('description', description);
  }, [name, description, setValue]);

  useEffect(() => {
    setCoordinates(initialCoords);
  }, [initialCoords]);

  return (
    <div styleName='form'>
      <TextField
        inputRef={register({
          required: true,
          validate: {
            occupied: (value) => {
              if(editedPoint){
                return true;
              }
              let isOccupied;
              names.forEach(el => {
                if (value === el){
                  isOccupied = false;
                }
              })
              return isOccupied;
            }
          }
        })}
        name='name' 
        label='Point Name'
        placeholder={'Enter title'}
        styleName='form__input'
        variant='outlined'
        InputLabelProps={{ shrink: true }}
      />

      {errors.name && errors.name.type === 'required' && (
        <p styleName='error'>Enter title of your point.</p>
      )}
    
      {errors.name && errors.name.type === 'occupied' && (
        <p styleName='error'>You already have this point</p>
      )}

      <Controller
        as={TextField}
        control={control}
        name='description'
        label='Description'
        multiline
        rows={4}
        placeholder='Enter description'
        styleName='form__input'
        variant='outlined'
        InputLabelProps={{ shrink: true }}
        rules={{ required: true }}
      />

      { errors.description && <p styleName='error'> Enter description about your point.</p> }

      <MapAddEditPoint
        width={'100%'}
        height={'50vh'}
        zoom={15}
        coordinatesMarker={coordinates}
        setCoordinatesMarker={setCoordinates}
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
