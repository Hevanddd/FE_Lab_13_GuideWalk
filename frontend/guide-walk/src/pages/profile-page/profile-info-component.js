import React, {useState} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { TextField } from '@material-ui/core'; 
import Button from '@material-ui/core/Button';
// import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
// import DeleteIcon from '@material-ui/icons/Delete';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export const ProfileInfoComponent = () => {
    // const [inputValue, setInputValue] = useState();
    const {user, isAuthenticated, logout} = useAuth0();
    
    const userName = user && user['https://username'];
    const userEmail = user && user.name;

    return (
        <div>
            <div>
                <IconButton aria-label="account circle">
                    <AccountCircleIcon />
                </IconButton>
            </div>
            <form>
                <TextField
                    label="Name"
                    variant="outlined"
                    value={userName}
                    InputProps={{
                        readOnly: true,
                    }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <br/>
                <TextField
                    id="standard-read-only-input"
                    label="Email"
                    value={userEmail}
                    autoFocus
                    variant="outlined"
                    InputProps={{
                        readOnly: true,
                    }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </form>
            {isAuthenticated && <Button variant="contained" color="primary" onClick={logout}>Log out</Button>}
        </div>
    )
};
