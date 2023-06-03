import Topbar from "./scences/global/Topbar";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "./scences/global/SidebarContent";
import Dashboard from "./scences/dashboard";
/*import Team from "./scences/team";
import Invoices from "./scences/invoices";
import Contacts from "./scences/contacts";
import Bar from "./scences/bar";
import Form from "./scences/form";
import Line from "./scences/line";
import Pie from "./scences/pie";
import FAQ from "./scences/faq";
import Geography from "./scences/geography";
import Calendar from "./scences/calendar";*/
import { Route, Routes } from "react-router-dom";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Sidebar />
            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                {/*<Route path="/team" element={<Team/>} />
              <Route path="/invoices" element={<Invoices/>} />
              <Route path="/contacts" element={<Contacts/>} />
              <Route path="/bar" element={<Bar/>} />
              <Route path="/form" element={<Form/>} />
              <Route path="/line" element={<Line/>} />
              <Route path="/pie" element={<Pie/>} />
              <Route path="/faq" element={<FAQ/>} />
              <Route path="/geography" element={<Geography/>} />
  <Route path="/calendar" element={<Calendar/>} />*/}
              </Routes>
            </main>
          </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
