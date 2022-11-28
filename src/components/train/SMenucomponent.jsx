import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './train-styles.css';

export default function SimpleMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (event) => {
        setAnchorEl(null);
        localStorage.setItem('repetition' , JSON.stringify(event.target.textContent))
    };

    return (
        <div>
            <Button style={{color: 'grey', background: '#282c34' , fontSize: '28px'}} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                choose exercise
            </Button>

            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <div className="block-buttons">
                    <MenuItem onClick={handleClose}>1-repetition</MenuItem>
                    <MenuItem onClick={handleClose}>2-repetition</MenuItem>
                    <MenuItem onClick={handleClose}>3-repetition</MenuItem>
                    <MenuItem onClick={handleClose}>4-repetition</MenuItem>
                    <MenuItem onClick={handleClose}>5-repetition</MenuItem>
                    <MenuItem onClick={handleClose}>6-repetition</MenuItem>
                    <MenuItem onClick={handleClose}>7-repetition</MenuItem>
                    <MenuItem onClick={handleClose}>8-repetition</MenuItem>
                    <MenuItem onClick={handleClose}>9-repetition</MenuItem>
                    <MenuItem onClick={handleClose}>10-repetition</MenuItem>
                </div>
            </Menu>
        </div>
    );
}