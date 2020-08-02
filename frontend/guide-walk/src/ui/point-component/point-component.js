import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';


import styles from './point.module.css';


export const PointComponent = ({name, deletePoint, editPoint}) => {

  const [routeFocus, setRouteFocus] = useState('Fun');
  const [addPointForm, toggleAddPointForm] = useState('false');

  
  return (
    <li>
      <IconButton aria-label="delete" onClick={deletePoint}>
        <DeleteOutlineOutlinedIcon />
      </IconButton>
      <IconButton className={styles.editBtn} aria-label="edit" onClick={editPoint}>
        <EditOutlinedIcon />
      </IconButton>
      <span>{name}</span>
    </li>
  );
};
