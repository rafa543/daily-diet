import Routes from "./src/routes";
import { ThemeProvider } from 'styled-components/native';
import { StatusBar, Text, View } from "react-native";

import theme from './src/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
                barStyle="light-content"
                backgroundColor="white"
                translucent
            />
      <Routes/>
    </ThemeProvider>
  );
}


