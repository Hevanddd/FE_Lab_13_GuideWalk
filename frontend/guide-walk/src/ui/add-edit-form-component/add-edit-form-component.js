import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import AddEditPointFormComponent from './../add-edit-point-form-component';
import PointComponent from '../point-component/point-component';
import { useForm, Controller } from "react-hook-form";
import CSSModules from 'react-css-modules';

import styles from './add-edit-form.module.scss';

const routeFocuses = ['Fun', 'SightSeeing', 'Quest'];

const AddEditFormComponent = ({ userInfoDate, getAddedRouteDataStart }) => {
  
  const data = [{
      title: 'Lviv',
      location:{ latitude: 48.841696966703736, longitude: 24.031492762018463 },
      description: 'Very good route',
      id: 1
    },
    {
      title: 'Kyiv',
      location:{ latitude: 47.841696966703736, longitude: 24.031492762018463 },
      description: 'Very good route',
      id: 2
    }
  ];

  const {register, handleSubmit, control} = useForm();

  const [addPointForm, showAddPointForm] = useState(false);
  const [points, changePointList] = useState(data);
  const [editedPoint, setEditedPoint] = useState(false);

  
  const clearPointForm = () => {
    setEditedPoint(false);
    showAddPointForm(false);
  }

  const saveRoute = (route) => {

    route.owner = userInfoDate.id;
    const result = {
      pointArray: points,
      routeInfo: route,
    }
    console.log(result);
    getAddedRouteDataStart(result);
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
    console.log(point);
    point.id = points.length ? points[points.length - 1].id + 1 : 1;
    changePointList([...points, point]);
    clearPointForm();
  }

  const editPoint = (id) => {
    showAddPointForm(false);
    const editedPoint = points.filter((el) => el.id === id)[0];
    setEditedPoint(editedPoint);
    showAddPointForm(true);
  }

  const deletePoint = (id) => {
    const idx = points.findIndex((el) => el.id === id);
    changePointList([
      ...points.slice(0, idx),
      ...points.slice(idx + 1)
    ])
  }

  const pointsList = points.map((point, index) => {
    return <PointComponent key={index} point={point} deletePoint={deletePoint} editPoint={editPoint}/>
  })

  const pointForm = addPointForm ? <AddEditPointFormComponent savePoint={savePoint} editedPoint={editedPoint} /> : null;
  
  return (
    <>
      <form styleName='form' onSubmit={handleSubmit((data) => saveRoute(data))}>

        <TextField
          name="title"
          inputRef={register}
          label="Route Name"
          placeholder="The Best Route"
          variant="outlined"
        />

        <TextField
          name="focus"
          inputRef={register}
          select
          label="Route Focus"
          placeholder="Route Focus"
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
          name="description"
          label="Description"
          multiline
          rows={4}
          placeholder="Enter description"
          variant="outlined"
        />

        <ul styleName='form__pointsList'> 
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

        <Button styleName='form__btn' type="submit" color="primary" variant="contained" >
          Save Route
        </Button>
      </form>
    </>
  );
};

export default CSSModules(AddEditFormComponent, styles);