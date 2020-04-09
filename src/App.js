import React, { useState } from "react";
import { GlobalStyle } from "./utils/global";
import { lightTheme, darkTheme } from "./utils/theme";
import { ThemeProvider } from "styled-components";
import CardList from "./components/CardList";
import Header from "./components/Header";
import Calendar from "./components/Calendar";

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Header toggleTheme={toggleTheme} />
      <CardList />
      <Calendar />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
