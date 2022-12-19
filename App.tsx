import Create from "@screens/Create";
import Home from "@screens/Home";
import { ThemeProvider } from 'styled-components/native';

import theme from './src/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Home /> */}
      <Create/>
    </ThemeProvider>
  );
}


