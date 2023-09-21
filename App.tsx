import { useState } from "react";
import { SafeAreaView, StatusBar } from "react-native";

import { ThemeProvider } from "styled-components";

import { theme } from "./src/theme/Theme";
import { Register } from "./src/screens/register";

import { Tomorrow_700Bold_Italic, useFonts } from "@expo-google-fonts/tomorrow";

export default function App() {
  const [currentTheme, setCurrentTheme] = useState(theme.light);
  const [fontsLoaded] = useFonts({ Tomorrow_700Bold_Italic });

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === theme.light ? theme.dark : theme.light);
  };

  return (
    <ThemeProvider theme={Object.assign(currentTheme, theme.typography)}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar />
        {
          fontsLoaded && <Register></Register>
        }
      </SafeAreaView>
    </ThemeProvider>
  );
};
