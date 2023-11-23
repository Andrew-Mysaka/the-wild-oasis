import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles.js";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: var(--color-green-700);
`

function App() {
    return (
        <>
            <GlobalStyles/>
            <div>
                <H1>The Wild Oasis</H1>
            </div>
        </>
    );
}

export default App;
