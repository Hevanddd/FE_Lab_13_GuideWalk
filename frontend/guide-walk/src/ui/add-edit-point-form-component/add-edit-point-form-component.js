import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { MapComponent } from '../map-component/map-component';
import { useForm, Controller } from "react-hook-form";

import styles from './add-edit-point-form.module.css';

export const AddEditPointFormComponent = ({savePoint, editedPoint}) => {
  
  const {register, handleSubmit, control, setValue} = useForm();
  
  const defaultName = editedPoint ? editedPoint.pointName : '';  
  const defaultDescription = editedPoint ? editedPoint.pointDescription : '';
  const defaultCoords = editedPoint ? editedPoint.pointCoords : null;
  
  useEffect(() => {
    setValue('pointName', defaultName);
    setValue('pointDescription', defaultDescription);
  });
  
  const submitPoint = (point) => {
    // Add function from MAP
    point.coords = '1, 2';
    if(editedPoint){
      savePoint(point, editedPoint.id);
    } else{
      savePoint(point);
    }
  }



  return (
      <div className={styles.form}>
        <TextField
          inputRef={register}
          name="pointName"
          label="Point Name"
          placeholder="Your point"
          variant="outlined"
        />
        
        <Controller as={TextField}
          control={control}
          name="pointDescription"
          label="Description"
          multiline
          rows={4}
          placeholder="Enter description"
          variant="outlined"
        />

        <MapComponent width={'100%'} height={'50vh'} zoom={15} />

        <Button  className = {styles.saveBtn}
          type = "button"
          color = "secondary"
          variant = "contained"
          onClick = {
            handleSubmit((data) => submitPoint(data))
          }>
            Save Point
        </Button>
      </div>
  );
};
