import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { MapComponent } from '../map-component/map-component';

import { useForm } from "react-hook-form";

import styles from './add-edit-point-form.module.css';

export const AddEditPointFormComponent = () => {
  
  return (
      <FormControl className={styles.form}>

        <TextField
          id="outlined-required"
          label="Point Name"
          placeholder="Your point"
          variant="outlined"
        />

        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          placeholder="Enter description"
          variant="outlined"
        />

        <MapComponent width={'100vw'} height={'50vh'} zoom={15} />

        <Button className={styles.saveBtn} type="submit" color="secondary" variant="contained" >
          Save Point
        </Button>
      </FormControl>
  );
};
