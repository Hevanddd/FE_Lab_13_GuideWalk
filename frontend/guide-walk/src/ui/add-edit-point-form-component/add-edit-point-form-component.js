import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { MapComponent } from '../map-component/map-component';
import { useForm, Controller } from "react-hook-form";

import styles from './add-edit-point-form.module.css';

export const AddEditPointFormComponent = ({addPoint}) => {
  
    const {register, handleSubmit, control} = useForm();

  return (

      <div className={styles.form}>

        <TextField
          inputRef={register}
          name="point-name"
          label="Point Name"
          placeholder="Your point"
          variant="outlined"
        />
        <Controller as={TextField}
          control={control}
          name="point-description"
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
            handleSubmit((data) => console.log(JSON.stringify(data)))
          }>
            Save Point
        </Button>
      </div>
  );
};
