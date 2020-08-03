import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';


import styles from './point.module.css';


export const PointComponent = ({point, deletePoint, editPoint}) => {

  const [routeFocus, setRouteFocus] = useState('Fun');
  const [addPointForm, toggleAddPointForm] = useState('false');

  const {pointName, id} = point;
  return (
    <li>
      <IconButton aria-label="delete" onClick={() => deletePoint(id)}>
        <DeleteOutlineOutlinedIcon />
      </IconButton>
      <IconButton className={styles.editBtn} aria-label="edit" onClick={() => editPoint(id)}>
        <EditOutlinedIcon />
      </IconButton>
      <span>{pointName}</span>
    </li>
  );
};
