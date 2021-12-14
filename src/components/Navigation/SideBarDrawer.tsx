import { Box, Drawer, Divider } from "@mui/material";
import Menu from "./Menu";

type Props = {
  open: boolean;
  onClose: () => void;
};

export const SideBarDrawer = ({ open, onClose }: Props) => {
  return (
    <Drawer open={open} onClose={onClose}>
      <Box sx={{ width: 250 }} role="presentation">
        <Menu onClose={onClose} />
        <Divider />
      </Box>
    </Drawer>
  );
};
