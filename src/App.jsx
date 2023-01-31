import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import Layout from "./components/layout";

const theme = createTheme({
  palette: {
    // mode: 'dark'
    primary:{
      // main: '#01579b',
      main: '#003c6c',
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Layout />
      </Box>
    </ThemeProvider>
  );
}

export default App;
