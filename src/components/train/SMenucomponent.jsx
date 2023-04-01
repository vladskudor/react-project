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
        localStorage.setItem('repetition' , JSON.stringify(event.target.textContent));
    };

    return (
        <div>
            <Button style={{color: 'grey', background: '#282c34' , fontSize: '24px' , padding: '10px'}} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                approach
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <div className="block-buttons">
                    <MenuItem onClick={handleClose}>1-approach</MenuItem>
                    <MenuItem onClick={handleClose}>2-approach</MenuItem>
                    <MenuItem onClick={handleClose}>3-approach</MenuItem>
                    <MenuItem onClick={handleClose}>4-approach</MenuItem>
                    <MenuItem onClick={handleClose}>5-approach</MenuItem>
                    <MenuItem onClick={handleClose}>6-approach</MenuItem>
                    <MenuItem onClick={handleClose}>7-approach</MenuItem>
                    <MenuItem onClick={handleClose}>8-approach</MenuItem>
                    <MenuItem onClick={handleClose}>9-approach</MenuItem>
                    <MenuItem onClick={handleClose}>10-approach</MenuItem>
                </div>
            </Menu>
        </div>
    );
}