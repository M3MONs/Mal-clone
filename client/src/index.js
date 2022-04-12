import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "assets/styles/GlobalStyle";
import { theme } from "assets/styles/theme";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
