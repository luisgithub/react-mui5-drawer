import { Box, Drawer, Divider, CssBaseline } from "@mui/material";

type Props = {
  open: boolean;
  onClose: () => void;
};

export const SideBarDrawer = ({ open, onClose }: Props) => {
  return (
    <Box sx={{ display: 'flex'}}>
    <CssBaseline />
    <Drawer open={open} onClose={onClose}>
      <Box sx={{ width: 250 }} role="presentation">
       
        <Divider />
      </Box>
    </Drawer>
    </Box>
  );
};
