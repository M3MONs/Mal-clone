import GlobalStyle from "assets/styles/GlobalStyle";
import { Container } from "@material-ui/core";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "assets/styles/theme";
import NavBar from "components/organisms/NavBar/NavBar";
import Home from "./Home";

const Wrapper = styled.div`
    /* background-color: ${({ theme }) => theme.colors.lightBlue}; */
    min-height: 100vh;
    width: 100%;
    overflow-x: hidden;
`;

const StyledContainer = styled(Container)`
    && {
        padding: 0px;
    }
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Wrapper>
                    <NavBar />
                    <StyledContainer minwidth='sm'>
                        <Home />
                    </StyledContainer>
                </Wrapper>
            </ThemeProvider>
        </>
    );
}

export default App;
