import React, { useState, useRef } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import AddEditPointFormComponent from './../add-edit-point-form-component';
import { PointComponent } from '../point-component/point-component';
import { useForm, Controller } from "react-hook-form";
import Portal from '@material-ui/core/Portal';

import styles from './add-edit-form.module.css';

const routeFocuses = ['Fun', 'SightSeeing', 'Quest'];


export const AddEditFormComponent = () => {

  const {register, handleSubmit, control} = useForm();

  const [routeFocus, setRouteFocus] = useState('Fun');
  const [addPointForm, toggleAddPointForm] = useState('false');

  const container = useRef(null);

  const routeFocusHandler = (event) => {
    setRouteFocus(event.target.value);
  };

  const togglePointForm = () => {
    toggleAddPointForm(!addPointForm);
    console.log(addPointForm);
  }

  const addPoint = (point) => {
    points.push(point);
    console.log('Done')
    togglePointForm();
  }

  const editPoint = (point) => {
    console.log('Edit');
  }

  const deletePoint = (point) => {
    console.log('Delete');
  }

  const points = ['Lviv', 'Kyiv'];


  const pointsList = points.map((point, index) => {
    return <PointComponent key={index} name={point} deletePoint={deletePoint} editPoint={editPoint}/>
  })

  const pointForm = addPointForm ? null : <AddEditPointFormComponent addPoint={addPoint} /> ;
  
  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit((data)=> console.log(JSON.stringify(data)))}>

        <TextField
          name="route-name"
          inputRef={register}
          label="Route Name"
          placeholder="The Best Route"
          variant="outlined"
        />

        <TextField
          name="route-focus"
          inputRef={register}
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

        <Controller as={TextField}
          control={control}
          name="route-description"
          label="Description"
          multiline
          rows={4}
          placeholder="Enter description"
          variant="outlined"
        />

        <ul className={styles.pointsList}> 
          {pointsList}
          <li>
            <IconButton aria-label="delete" onClick={togglePointForm}>
              <AddCircleOutlineOutlinedIcon />
            </IconButton>
            <span>Add new point</span>
          </li>
        </ul>

        {pointForm}
        <Portal container={container.current}>
        </Portal>

        <div ref={container} />

        <Button className={styles.saveBtn} type="submit" color="primary" variant="contained" >
          Save Route
        </Button>
      </form>
      
    </>
  );
};
