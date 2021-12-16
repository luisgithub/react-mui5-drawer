import { styled } from "@mui/system";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "../PageNotFound";

const Main = styled("main")({
  height: "100vh",
  overflow: "auto",
});

const Spacer = styled("div")(({ theme }) => ({
  // appBarSpacer: theme.mixins.toolbar,
}));

const Content = styled("div")({
  flexGrow: 1,
  height: "100vh",
  overflow: "auto",
});

export default function RountesContent() {
  return (
    <>
      <Main>
        <Spacer />
        <Content>
          <Routes>
            {/* <Route path="/" element={DashboardPage} />
              <Route path="/clientes" element={CatalogoClientes} />
              <Route path="/conceptos" element={CatalogoConceptos} />
              <Route path="/costosUnitarios" element={CostosUnitariosPage} />
              <Route path="/empleados" element={EmpleadosPage} />
              <Route path="/obras" element={ObrasPage} />
              <Route path="/nominas" element={PageNotFound} />
              <Route path="/almacenes" element={PageNotFound} />
              <Route path="/cobranza" element={PageNotFound} />

              <Route path="/reportes" element={PageNotFound} />

              <Route path="/configura/usuarios" element={CatalogoUsuarios} />
              <Route path="/configura/sucursales" element={SucursalesPage} />
              <Route path="/proveedores" element={ProveedoresPage} />
              <Route path="/ordenesCompra" element={OrdenCompra} />

              <Route path="/demo" element={Demo} /> */}

            <Route index element={<PageNotFound />} />
          </Routes>
        </Content>
      </Main>
    </>
  );
}
