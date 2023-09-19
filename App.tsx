import { useState } from "react";
import { StatusBar } from "expo-status-bar";

import styled from "styled-components/native";
import { ThemeProvider } from "styled-components";

import { OutlineButton } from "./src/components/outlineButton";
import { theme } from "./src/theme/Theme";

export default function App() {
  const [currentTheme, setCurrentTheme] = useState(theme.light);
  
  const toggleTheme = () => {
    setCurrentTheme(currentTheme === theme.light ? theme.dark : theme.light)
  };

  return (
    <ThemeProvider theme={Object.assign(currentTheme, theme.font)}>
      <StatusBar />
      <AppContainer>
        <AppText>Gym Ranked - The Maromba is coming</AppText>
        <OutlineButton onPress={() => toggleTheme()}  style={{width: '100%'}}>
          ser maromba
        </OutlineButton>
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
  padding: 16px;
`

const AppText = styled.Text`
  color: ${({theme}) => theme.colors.font.title};
  padding: 16px;
`
