import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CSSModules from 'react-css-modules';

import styles from './point.module.scss';

const PointComponent = ({point, deletePoint, editPoint}) => {
  const {title, id} = point;
  return (
    <li>
      <IconButton aria-label="delete" onClick={() => deletePoint(id)}>
        <DeleteOutlineOutlinedIcon />
      </IconButton>
      <IconButton styleName='edit-btn' aria-label='edit' onClick={() => editPoint(id)}>
        <EditOutlinedIcon />
      </IconButton>
      <span>{title}</span>
    </li>
  );
};

export default CSSModules(PointComponent, styles);