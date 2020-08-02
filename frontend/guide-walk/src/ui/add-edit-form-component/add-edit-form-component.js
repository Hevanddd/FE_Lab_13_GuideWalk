import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import AddEditPointFormComponent from './../add-edit-point-form-component';


import { useForm } from "react-hook-form";

import styles from './add-edit-form.module.css';

const routeFocuses = ['Fun', 'SightSeeing', 'Quest'];


export const AddEditFormComponent = () => {

  const [routeFocus, setRouteFocus] = useState('Fun');
  const [addPointForm, toggleAddPointForm] = useState('false');

  const routeFocusHandler = (event) => {
    setRouteFocus(event.target.value);
  };

  const togglePointForm = () => {
    toggleAddPointForm(!addPointForm);
    console.log(addPointForm);
  }

  const points = ['DUPA', 'SRAKA'];

  const pointsList = points.map((point, index) => {
    return(
      <li key={index}>{point}</li>
    )
  })

  const pointForm = addPointForm ? <AddEditPointFormComponent /> : null;


  
  return (
      <FormControl className={styles.form}>

        <TextField
          id="outlined-required"
          label="Route Name"
          placeholder="The Best Route"
          variant="outlined"
        />

        <TextField
          id="outlined-select-currency-native"
          select
          label="Route Focus"
          placeholder="Route Focus"
          value={routeFocus}
          onChange={routeFocusHandler}
          SelectProps={{
            native: true,
          }}
          variant="outlined"
        >
          {routeFocuses.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </TextField>
        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          placeholder="Enter description"
          variant="outlined"
        />
        
        {pointsList}

        <div>
          <IconButton aria-label="delete" onClick={togglePointForm}>
            <AddCircleOutlineOutlinedIcon />
          </IconButton>
          <span>Add new point</span>
        </div>

        {pointForm}

        <Button className={styles.saveBtn} type="submit" color="primary" variant="contained" >
          Save Route
        </Button>
      </FormControl>
  );
};
