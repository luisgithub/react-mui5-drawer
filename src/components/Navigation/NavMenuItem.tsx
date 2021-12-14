import React from "react";
import PropTypes from "prop-types";
import { Divider, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const AppMenuItemPropTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string,
  icon: PropTypes.elementType,
  items: PropTypes.array,
  level: PropTypes.number,
};

type AppMenuItemPropTypes = PropTypes.InferProps<typeof AppMenuItemPropTypes>;

function NavMenuItem(props: any) {
  const { name, icon: Icon, link, items = [], level = 0 } = props;
  const classes = useStyles();
  const isExpandable = items && items.length > 0;
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(!open);
  }

  const MenuItemRoot = isExpandable ? (
    <ListItem button className={classes.menuItem} onClick={handleClick}>
      {/* Display an icon if any */}
      {!!Icon && (
        <ListItemIcon className={classes.menuItemIcon}>
          <Icon />
        </ListItemIcon>
      )}
      <ListItemText primary={name} inset={!Icon} />
      {/* Display the expand menu if the item has children */}

      {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
    </ListItem>
  ) : (
    <ListItem
      button
      className={clsx(
        classes.menuItem,
        level && level > 0 ? classes.nested : null
      )}
      component={NavLink}
      to={link}
    >
      {/* Display an icon if any */}
      {!!Icon && (
        <ListItemIcon className={classes.menuItemIcon}>
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

NavMenuItem.propTypes = AppMenuItemPropTypes;

const useStyles = makeStyles((theme) =>
  createStyles({
    menuItem: {},
    menuItemIcon: {
      color: "#FFFFFF",
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  })
);

export default NavMenuItem;
