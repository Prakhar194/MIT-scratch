import React from 'react';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import SettingsIcon from '@material-ui/icons/Settings';
import FolderIcon from '@material-ui/icons/Folder';
import EditIcon from '@material-ui/icons/Edit';
import BugReportOutlinedIcon from '@material-ui/icons/BugReportOutlined';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#8A2BE2',
  },
  toolbar: {
    minHeight: 40,               // smaller height
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  logo: {
    height: 24,                 // smaller logo height
    marginRight: theme.spacing(1.5),
    fontWeight: 'bold',
    userSelect: 'none',
  },
  menuButton: {
    marginRight: theme.spacing(1),
    textTransform: 'none',
    minWidth: 80,
    padding: '4px 8px',         // smaller padding inside buttons
    fontSize: '0.875rem',       // smaller font size
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(2),
  },
  menuGroup: {
    display: 'flex',
    alignItems: 'center',
  },
  rightButtons: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  separator: {
    marginLeft: theme.spacing(1.5),
    marginRight: theme.spacing(1.5),
    color: 'rgba(255, 255, 255, 0.5)',
  },
  settingsLabel: {
    display: 'flex',
    alignItems: 'center',
  }
}));

function Header() {
  const classes = useStyles();
  const [settingsAnchorEl, setSettingsAnchorEl] = React.useState(null);
  const [fileAnchorEl, setFileAnchorEl] = React.useState(null);
  const [editAnchorEl, setEditAnchorEl] = React.useState(null);

  const handleMenuOpen = (event, setAnchorEl) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (setAnchorEl) => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          {/* Logo */}
          <Typography variant="h6" className={classes.title} style={{ fontSize: 18 }}>
            <span className={classes.logo}>Scratch</span>
          </Typography>

          {/* Menu Buttons Group */}
          <div className={classes.menuGroup}>
            <Button
              color="inherit"
              className={classes.menuButton}
              onClick={(e) => handleMenuOpen(e, setSettingsAnchorEl)}
              startIcon={<SettingsIcon style={{ fontSize: 20 }} />}
              endIcon={<ArrowDropDownIcon style={{ fontSize: 20 }} />}
            >
              Settings
            </Button>
            <Menu
              anchorEl={settingsAnchorEl}
              keepMounted
              open={Boolean(settingsAnchorEl)}
              onClose={() => handleMenuClose(setSettingsAnchorEl)}
            >
              <MenuItem onClick={() => handleMenuClose(setSettingsAnchorEl)}>Option 1</MenuItem>
              <MenuItem onClick={() => handleMenuClose(setSettingsAnchorEl)}>Option 2</MenuItem>
            </Menu>

            <Button
              color="inherit"
              className={classes.menuButton}
              onClick={(e) => handleMenuOpen(e, setFileAnchorEl)}
              startIcon={<FolderIcon style={{ fontSize: 20 }} />}
              endIcon={<ArrowDropDownIcon style={{ fontSize: 20 }} />}
            >
              File
            </Button>
            <Menu
              anchorEl={fileAnchorEl}
              keepMounted
              open={Boolean(fileAnchorEl)}
              onClose={() => handleMenuClose(setFileAnchorEl)}
            >
              <MenuItem onClick={() => handleMenuClose(setFileAnchorEl)}>New</MenuItem>
              <MenuItem onClick={() => handleMenuClose(setFileAnchorEl)}>Load from your computer</MenuItem>
              <MenuItem onClick={() => handleMenuClose(setFileAnchorEl)}>Save to your computer</MenuItem>
            </Menu>

            <Button
              color="inherit"
              className={classes.menuButton}
              onClick={(e) => handleMenuOpen(e, setEditAnchorEl)}
              startIcon={<EditIcon style={{ fontSize: 20 }} />}
              endIcon={<ArrowDropDownIcon style={{ fontSize: 20 }} />}
            >
              Edit
            </Button>
            <Menu
              anchorEl={editAnchorEl}
              keepMounted
              open={Boolean(editAnchorEl)}
              onClose={() => handleMenuClose(setEditAnchorEl)}
            >
              <MenuItem onClick={() => handleMenuClose(setEditAnchorEl)}>Undelete</MenuItem>
              <MenuItem onClick={() => handleMenuClose(setEditAnchorEl)}>Small stage layout</MenuItem>
              <MenuItem onClick={() => handleMenuClose(setEditAnchorEl)}>Turbo Mode</MenuItem>
            </Menu>

            <Button
              color="inherit"
              className={classes.menuButton}
              startIcon={<BugReportOutlinedIcon style={{ fontSize: 20 }} />}
              endIcon={<ArrowDropDownIcon style={{ fontSize: 20 }} />}
            >
              Debug
            </Button>
          </div>

          {/* Right-aligned Buttons */}
          <div className={classes.rightButtons}>
            <Button color="inherit" className={classes.menuButton} style={{ minWidth: 70, fontSize: '0.875rem', padding: '4px 8px' }}>
              Join Scratch
            </Button>
            <span className={classes.separator}>|</span>
            <Button color="inherit" className={classes.menuButton} style={{ minWidth: 70, fontSize: '0.875rem', padding: '4px 8px' }}>
              Sign in
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
