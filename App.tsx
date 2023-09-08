import { useState } from "react";
import { Text} from "react-native";
import { StatusBar } from "expo-status-bar";

import { ThemeProvider } from "styled-components";
import styled from "styled-components/native";

import { theme } from "./src/theme/Theme";

export default function App() {
  const [currentTheme, setCurrentTheme] = useState(theme.light);
  
  const toggleTheme = () => {
    setCurrentTheme(currentTheme === theme.light ? theme.dark : theme.light)
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <StatusBar />
      <AppContainer>
        <Text>Gym Ranked - The Maromba is coming</Text>
        <StatusBar style="auto" />
      </AppContainer>
    </ThemeProvider>
  );
}

const AppContainer = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  align-items: center;
  justify-content: center;
`
