import Sidebar from "@/app/admin/Sidebar";
import { CssVarsProvider, CssBaseline, Box } from "@mui/joy";


export default function Layout(props: { children: React.ReactNode }) {
      return (
        <CssVarsProvider disableTransitionOnChange>
        <CssBaseline />
        <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
          <Sidebar />
          {props.children}
        </Box>
      </CssVarsProvider>
       
      );
  }