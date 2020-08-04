import React, { useState, useRef } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import AddEditPointFormComponent from './../add-edit-point-form-component';
import { PointComponent } from '../point-component/point-component';
import { useForm, Controller } from "react-hook-form";

import styles from './add-edit-form.module.css';

const routeFocuses = ['Fun', 'SightSeeing', 'Quest'];

export const AddEditFormComponent = () => {
  const data = [{
      pointName: 'Lviv',
      pointDescription: 'Very good route',
      coords: '',
      id: 1
    },
    {
      pointName: 'Kyiv',
      pointDescription: 'Very good route',
      coords: '',
      id: 2
    }
  ];

  const {register, handleSubmit, control} = useForm();

  const [routeFocus, setRouteFocus] = useState('Fun');
  const [addPointForm, showAddPointForm] = useState(false);
  const [points, changePointList] = useState(data);
  const [editedPoint, setEditedPoint] = useState(false);

  const routeFocusHandler = (event) => {
    setRouteFocus(event.target.value);
  };
  
  const clearPointForm = () => {
    setEditedPoint(false);
    showAddPointForm(false);
  }

  const savePoint = (point, existedId) => {
    if(existedId){
      point.id = existedId;
      const newPointList = points.map((el) => {
        if(el.id === existedId){
          return point;
        }
        return el;
      })
      changePointList(newPointList);
      clearPointForm()
      return true;
    }
    point.id = points.length ? points[points.length - 1].id + 1 : 1;
    changePointList([...points, point]);
    clearPointForm();
  }

  const editPoint = (id) => {
    const editedPoint = points.filter((el) => el.id === id)[0];
    showAddPointForm(true)
    setEditedPoint(editedPoint);
  }

  const deletePoint = (id) => {
    console.log('Delete');
    const idx = points.findIndex((el) => el.id === id);
    changePointList([
      ...points.slice(0, idx),
      ...points.slice(idx + 1)
    ])
  }

  const pointsList = points.map((point) => {
    return <PointComponent key={point.id} point={point} deletePoint={deletePoint} editPoint={editPoint}/>
  })

  const pointForm = addPointForm ? <AddEditPointFormComponent savePoint={savePoint} editedPoint={editedPoint} /> : null;
  
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
            <IconButton aria-label="delete" onClick = {() => {
              clearPointForm();
              showAddPointForm(true);
              }}>
              <AddCircleOutlineOutlinedIcon />
            </IconButton>
            <span>Add new point</span>
          </li>
        </ul>

        {pointForm}

        <Button className={styles.saveBtn} type="submit" color="primary" variant="contained" >
          Save Route
        </Button>
      </form>
    </>
  );
};
