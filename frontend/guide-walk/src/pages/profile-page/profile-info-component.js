import React, {useState} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { TextField } from '@material-ui/core'; 

export const ProfileInfoComponent = () => {
    // const [inputValue, setInputValue] = useState();
    const {user} = useAuth0();
    
    const userName = user && user['https://username'];
    const userEmail = user && user.name;

    return (
        <div>
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
      {isAuthenticated && <button onClick={logout}>Log out</button>}
            </div>
    )
};
