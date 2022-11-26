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
        localStorage.setItem('exercise' , JSON.stringify(event.target.textContent))
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
                    <MenuItem onClick={handleClose}>Breast</MenuItem>
                    <MenuItem onClick={handleClose}>Shoulders</MenuItem>
                    <MenuItem onClick={handleClose}>Hands</MenuItem>
                    <MenuItem onClick={handleClose}>Legs</MenuItem>
                </div>
            </Menu>
        </div>
    );
}