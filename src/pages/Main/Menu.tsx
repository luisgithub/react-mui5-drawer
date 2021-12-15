import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import StorageIcon from "@mui/icons-material/Storage";
import BusinessIcon from "@mui/icons-material/Business";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import PeopleIcon from "@mui/icons-material/People";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaidIcon from "@mui/icons-material/Paid";
import BarChartIcon from "@mui/icons-material/BarChart";
import MoneyIcon from "@mui/icons-material/Money";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import BuildIcon from "@mui/icons-material/Build";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { List } from "@mui/material";
import NavMenuItem from "./NavMenuItem";

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
    icon: StorageIcon,
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
    icon: PaidIcon,
  },
  {
    name: "Reportes",

    icon: BarChartIcon,
    items: [
      {
        name: "Reporte 1",
        link: "/reportes/r1",
        icon: MoneyIcon,
      },
      {
        name: "Reporte 2",
        link: "/reportes/r2",
        icon: ShoppingBagIcon,
      },
    ],
  },
  {
    name: "Configuracion",
    icon: BuildIcon,
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
    icon: BuildIcon,
  },
];

const AppMenu: React.FC = () => {
  return (
    <List component="nav" sx={{ width: "100%", color: "#ffffff" }} disablePadding>
      {appMenuItems.map((item, index) => (
        <NavMenuItem {...item} key={index} />
      ))}
    </List>
  );
};

export default AppMenu;
