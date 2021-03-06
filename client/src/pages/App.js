import { Container } from "@material-ui/core";
import styled from "styled-components";
import NavBar from "components/organisms/NavBar/NavBar";
import Home from "./Home/Home";
import Footer from "components/organisms/Footer/Footer";

const Wrapper = styled.div`
    min-height: 100vh;
    width: 1060px;
    margin: 0 auto;
`;

const StyledContainer = styled(Container)`
    && {
        padding: 0px 0px 10px;
        border: 1px solid ${({ theme }) => theme.colors.gray};
    }
`;

function App() {
    return (
        <>
            <Wrapper>
                <NavBar />
                <StyledContainer minwidth='sm'>
                    <Home />
                </StyledContainer>
            </Wrapper>
            <Footer />
        </>
    );
}

export default App;
