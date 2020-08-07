import React, { useEffect, useState } from 'react';
import CSSModules from 'react-css-modules';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { MapAddEditPoint } from '../map-add-edit-point';
import { useForm, Controller } from 'react-hook-form';

import styles from './add-edit-point-form.module.scss';

const AddEditPointFormComponent = ({ savePoint, editedPoint }) => {
  const { register, handleSubmit, control, setValue } = useForm();

  const title = (editedPoint && editedPoint.title) || '';
  const description = (editedPoint && editedPoint.description) || '';
  const initialCoords = editedPoint && editedPoint.location;

  const [coordinates, setCoordinates] = useState(initialCoords);

  const submitPoint = (point) => {
    console.log(point);
    point.location = coordinates;
    if (editedPoint) {
      const isEdited = true;
      savePoint(point, isEdited);
    } else {
      savePoint(point);
    }
  };

  const handleOnChange = (e, title) => {
    const value = e.target.value;
    setValue(title, value);
  };

  useEffect(() => {
    setValue('title', title);
    setValue('description', description);
  });

  useEffect(() => {
    setCoordinates(initialCoords);
  }, [initialCoords]);

  return (
    <div styleName='form'>
      <TextField
        inputRef={register}
        name='title'
        label='Point Name'
        placeholder={'Enter title'}
        variant='outlined'
        InputLabelProps={{ shrink: true }}
        onChange={(e) => handleOnChange(e, 'title')}
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
        onChange={(e) => handleOnChange(e, 'description')}
      />

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
