import GlobalStyles from "./styles/GlobalStyles.js";
import Heading from "./ui/Heading.jsx";
import styled from "styled-components";
import Row from "./ui/Row.jsx";
import Button from "./ui/Button.jsx";
import Input from "./ui/Input.jsx";

const StyledApp = styled.main`
  //background-color: orangered;
  padding: 20px;
`

function App() {
    return (
        <>
            <GlobalStyles/>
            <StyledApp>
                <Row>
                    <Row type={'horizontal'}>
                        <Heading as={"h1"}>The Wild Oasis</Heading>

                        <div>
                            <Heading as={"h2"}>Check in and out</Heading>
                            <Button>Check in</Button>
                            <Button variation={'secondary'} size={'small'}>Check out</Button>
                        </div>
                    </Row>
                    <Row>
                        <Heading as={"h3"}>Form</Heading>
                        <form>
                            <Input type={'number'} placeholder={'Number of guests'}/>
                            <Input type={'number'} placeholder={'Number of guests'}/>
                        </form>
                    </Row>
                </Row>
            </StyledApp>
        </>
    );
}

export default App;
