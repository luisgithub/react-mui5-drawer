import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { Collapse, Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

export const AppMenuItemPropTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string,
  icon: PropTypes.elementType,
  items: PropTypes.array,
  level: PropTypes.number,
};

export default function NavMenuItem(props: any) {
  const theme = useTheme();
  const { name, icon: Icon, link, items = [], level = 0 } = props;
  const isExpandable = items && items.length > 0;
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(!open);
  }

  const MenuItemRoot = isExpandable ? (
    <ListItem button onClick={handleClick}>
      {/* Display an icon if any */}
      {!!Icon && (
        <ListItemIcon sx={{ color: "#FFFFFF" }}>
          <Icon />
        </ListItemIcon>
      )}
      <ListItemText primary={name} inset={!Icon} />
      {/* Display the expand menu if the item has children */}

      {open ? <ExpandLess /> : <ExpandMore />}
    </ListItem>
  ) : (
    <ListItem button sx={{ ...(level && level > 0 && { paddingLeft: theme.spacing(4) }) }} component={NavLink} to={link}>
      {/* Display an icon if any */}
      {!!Icon && (
        <ListItemIcon sx={{ color: "#FFFFFF" }}>
          <Icon />
        </ListItemIcon>
      )}
      <ListItemText primary={name} inset={!Icon} />
    </ListItem>
  );

  const MenuItemChildren = isExpandable ? (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <Divider />
      <List component="div" disablePadding>
        {items.map((item: any, index: number) => (
          <NavMenuItem {...item} key={index} level={level + 1} />
        ))}
      </List>
    </Collapse>
  ) : null;

  return (
    <>
      {MenuItemRoot}
      {MenuItemChildren}
    </>
  );
}
