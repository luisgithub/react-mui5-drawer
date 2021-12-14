import { Inbox, Mail } from "@mui/icons-material";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from "@mui/icons-material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import BusinessIcon from "@mui/icons-material/Business";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import PeopleIcon from "@mui/icons-material/People";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import BarChartIcon from "@mui/icons-material/BarChart";
import PaidIcon from "@mui/icons-material/Paid";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import SettingsIcon from "@mui/icons-material/Settings";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import ConstructionIcon from "@mui/icons-material/Construction";

interface MenuProps {
  onClose: () => void;
}

const appMenuItems = [
  {
    name: "Dashboard",
    link: "/",
    icon: DashboardIcon,
  },
  {
    name: "Clientes",
    link: "/clientes",
    icon: AccountBoxIcon,
  },
  {
    name: "Obras",
    link: "/obras",
    icon: BusinessIcon,
  },
  {
    name: "Conceptos",
    link: "/conceptos",
    icon: Storage,
  },
  // {
  //     name: 'Costos Unitarios',
  //     link: '/costosUnitarios',
  //     icon: IconAssignment,
  // },
  {
    name: "Empleados",
    link: "/empleados",
    icon: EmojiPeopleIcon,
  },
  {
    name: "Nomina",
    link: "/nominas",
    icon: PeopleIcon,
  },
  {
    name: "Proveedores",
    link: "/proveedores",
    icon: LocalShippingIcon,
  },
  {
    name: "Cobranza",
    link: "/cobranza",
    icon: PointOfSaleIcon,
  },
  {
    name: "Reportes",

    icon: BarChartIcon,
    items: [
      {
        name: "Reporte 1",
        link: "/reportes/r1",
        icon: PaidIcon,
      },
      {
        name: "Reporte 2",
        link: "/reportes/r2",
        icon: LocalShippingIcon,
      },
    ],
  },
  {
    name: "Configuracion",
    icon: SettingsIcon,
    items: [
      {
        name: "Usuarios",
        link: "/configura/usuarios",
        icon: SupervisorAccountIcon,
      } /*
            {
                name: 'Sucursales',
                link: '/configura/sucursales',
                icon: HomeWorkIcon,
            }, */,
    ],
  },
  {
    name: "* DEMO *",
    link: "/demo",
    icon: ConstructionIcon,
  },
];

export default function Menu({ onClose }: MenuProps) {
  return (
    <>
      <List>
        {appMenuItems.map((text, index) => (
          <ListItem key={text} onClick={onClose}>
            <ListItemIcon>
              {index % 2 === 0 ? <Inbox /> : <Mail />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </>
  );
}
