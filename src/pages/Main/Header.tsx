import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import {
  Badge,
  Box,
  CssBaseline,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AccountCircle,
  NotificationsActive,
  NotificationsNone,
} from "@mui/icons-material";
// import Auth, { doLogout } from "state/Auth";

// const drawerWidth = 240;

interface HeaderProps {
  onToggle: () => void;
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  //   ...(open && {
  //     marginLeft: drawerWidth,
  //     width: `calc(100% - ${drawerWidth}px)`,
  //     transition: theme.transitions.create(["width", "margin"], {
  //       easing: theme.transitions.easing.sharp,
  //       duration: theme.transitions.duration.enteringScreen,
  //     }),
  //   }),
}));

export default function Header({ onToggle }: HeaderProps) {
  //   const user = useContext(Auth.State);
  //   const dispatch = useContext(Auth.Dispatch);
  const theme = useTheme();

  const notifications = {};
  const [anchorAccountEl, setAnchorAccountEl] =
    React.useState<null | HTMLElement>(null);
  const [anchorNotificationsEl, setAnchorNotificationsEl] =
    React.useState<null | HTMLElement>(null);

  const handleNotificationsMenuClose = () => {
    setAnchorNotificationsEl(null);
  };

  const handleAccountClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorAccountEl(event.currentTarget);
  };

  const handleAccountMenuClose = () => {
    setAnchorAccountEl(null);
  };

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  return (
    <>
      <CssBaseline />
      <AppBar position="absolute" sx={{ paddingRight: 24 }}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: "0 8px",
            ...theme.mixins.toolbar,
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={onToggle}
            edge="start"
            sx={{
              marginRight: "12px",
              // ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="h2"
            sx={{
              display: "flex",
              flexGrow: 1,
              color: theme.palette.primary.dark,
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                height: 36,
                marginRight: 6,
                backgroundImage: `url('/logo.png')`,
              }}
            ></Box>
            {"userInfo?.empresa"} - {"userInfo?.sucursal"}
          </Typography>
          <Tooltip title="Notificaciones">
            <IconButton>
              {notifications > 0 ? (
                <Badge badgeContent={notifications} color="primary">
                  <NotificationsActive />
                </Badge>
              ) : (
                <NotificationsNone />
              )}
            </IconButton>
          </Tooltip>
          <Menu
            id="notificationsMenu"
            anchorEl={anchorNotificationsEl}
            keepMounted
            open={Boolean(anchorNotificationsEl)}
            onClose={handleNotificationsMenuClose}
          >
            <MenuItem>Notificacion 1</MenuItem>
            <MenuItem>Notificacion 2</MenuItem>
            <MenuItem>Notificacion 3</MenuItem>
          </Menu>

          <Tooltip title="Perfil de Usuario">
            <IconButton onClick={handleAccountClick} color="inherit">
              <AccountCircle />
              <Typography component="h2" variant="h6" color="inherit">
                {"userInfo?.nombre"}
              </Typography>
            </IconButton>
          </Tooltip>

          <Menu
            id="accountMenu"
            anchorEl={anchorAccountEl}
            keepMounted
            open={Boolean(anchorAccountEl)}
            onClose={handleAccountMenuClose}
          >
            <MenuItem>Perfil de Usuario</MenuItem>
            <MenuItem onClick={() => console.log("hola")}>Salir</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
}
