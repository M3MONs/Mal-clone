import GlobalStyle from "assets/styles/GlobalStyle";
import { Container } from "@material-ui/core";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "assets/styles/theme";
import NavBar from "components/organisms/NavBar/NavBar";

const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.lightBlue};
    min-height: 100vh;
    width: 100%;
    overflow-x: hidden;
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Wrapper>
                    <NavBar />
                    <Container>
                        <h1>Blank Page</h1>
                    </Container>
                </Wrapper>
            </ThemeProvider>
        </>
    );
}

export default App;
