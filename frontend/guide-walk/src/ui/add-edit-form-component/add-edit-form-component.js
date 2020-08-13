import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import AddEditPointFormComponent from './../add-edit-point-form-component';
import PointComponent from '../point-component/point-component';
import { useForm, Controller } from 'react-hook-form';
import CSSModules from 'react-css-modules';

import styles from './add-edit-form.module.scss';

const routeFocuses = ['Fun', 'SightSeeing', 'Quest'];

const AddEditFormComponent = ({ userInfoDate, userDataAuth, getAddedRouteDataStart }) => {

  const data = [];

  const history = useHistory();
  const { register, handleSubmit, control, errors } = useForm();

  const [addPointForm, setAddPointForm] = useState(false);
  const [points, setPoints] = useState(data);
  const [editedPoint, setEditedPoint] = useState(false);
  const [isEmptyList, setIsEmptyList] = useState(false);
  
  const titles = points.map(el => el.title);

  const clearPointForm = () => {
    setEditedPoint(false);
    setAddPointForm(false);
    setIsEmptyList(false);
  };

  const saveRoute = (route) => {
    if(points.length < 2){
      setIsEmptyList(true);
    } else{
      route.owner = userInfoDate && userInfoDate.id;
      route.ownerName = userDataAuth && userDataAuth.userName;
      const result = {
        pointArray: points,
        routeInfo: route,
      };
      getAddedRouteDataStart(result);
      history.push('/');
    }
  };

  const savePoint = (point, isEdited) => {
    if (isEdited) {
      const index = points.findIndex((el) => el.title === editedPoint.title);
      const copiedPoints = [...points];
      copiedPoints.splice(index, 1, point);

      setPoints(copiedPoints);
      clearPointForm();
    } else {
      setPoints((prevState) => [...prevState, point]);
      clearPointForm();
    }
  };

  const editPoint = (title) => {
    const editedPoint = points.find((el) => el.title === title);
    setEditedPoint(editedPoint);
    setAddPointForm(true);
  };

  const deletePoint = (title) => {
    const index = points.findIndex((el) => el.title === title);
    const copiedPoints = [...points];
    copiedPoints.splice(index, 1);
    setPoints(copiedPoints);
    setAddPointForm(false);
  };

  return (
    <>
      <form styleName='form' onSubmit={handleSubmit((data) => saveRoute(data))}>
        <TextField
          name='title'
          inputRef={register({ required: true })}
          label='Route Name'
          placeholder='The Best Route'
          variant='outlined'
        />

        {errors.title && <p styleName='error'> Enter title of your route </p>}

        <TextField
          name='focus'
          inputRef={register}
          select
          label='Route Focus'
          placeholder='Route Focus'
          SelectProps={{
            native: true,
          }}
          variant='outlined'
        >
          {routeFocuses.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </TextField>

        <Controller
          as={TextField}
          control={control}
          name='description'
          label='Description'
          multiline
          rows={4}
          placeholder='Enter description'
          variant='outlined'
          rules={{ required: true }}
        />

        {errors.description && <p styleName='error'> Enter description about your route</p>}

        <ul styleName='form__pointsList'>
          {points &&
            points.map((point) => {
              return <PointComponent key={point.title} point={point} deletePoint={deletePoint} editPoint={editPoint} />;
            })}
          <li>
            <IconButton
              aria-label='delete'
              onClick={() => {
                clearPointForm();
                setAddPointForm(true);
              }}
            >
              <AddCircleOutlineOutlinedIcon />
            </IconButton>
            <span>Add new point</span>
          </li>
        </ul>

        { isEmptyList && <p styleName='error'> You should enter at least one point.</p> }

        {addPointForm && <AddEditPointFormComponent savePoint={savePoint} editedPoint={editedPoint} titles={titles}/>}

        <Button styleName='form__btn' type='submit' color='primary' variant='contained'>
          Save Route
        </Button>
      </form>
    </>
  );
};

export default CSSModules(AddEditFormComponent, styles);
