import AppBar from '@mui/material/AppBar';
import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';



interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
    return (
        <>
        <AppBar position="static" >
        <Toolbar sx={
            {
                backgroundColor:'black'
            }
        }>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon /> 
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mui typescript
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
        
        </>
  );
};
export default Header;

