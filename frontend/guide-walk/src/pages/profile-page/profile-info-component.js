import React, {useState} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { TextField } from '@material-ui/core'; 
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import styles from './profile-info-component.module.scss';

export const ProfileInfoComponent = ({userAuthData}) => {
    const {isAuthenticated, logout} = useAuth0();
    const userName = userAuthData && userAuthData.userName;
    const userEmail = userAuthData && userAuthData.email;
    // console.log(userName, userEmail);


    return (
        <div className={styles.form}>           
            <form>
                <div className={styles.user_img}>
                    <IconButton aria-label="account circle">
                        <AccountCircleIcon />
                    </IconButton>
                </div>
                <TextField
                    label="Name"
                    variant="outlined"
                    value={userName || ''}
                    InputProps={{
                        readOnly: true,
                    }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    className={styles.user_data}
                />
                {/* <br/> */}
                <TextField
                    id="standard-read-only-input"
                    label="Email"
                    value={userEmail || ''}
                    autoFocus
                    variant="outlined"
                    InputProps={{
                        readOnly: true,
                    }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    className={styles.user_data}
                />
            </form>
            {isAuthenticated && <Button variant="contained" color="primary" onClick={logout}>Log out</Button>}
        </div>
    )
};
