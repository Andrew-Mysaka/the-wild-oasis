import GlobalStyles from "./styles/GlobalStyles.js";
import Heading from "./ui/Heading.jsx";

function App() {
    return (
        <>
            <GlobalStyles/>
            <div>
                <Heading as={"h1"}>The Wild Oasis</Heading>
                <Heading as={"h2"}>The Wild Oasis</Heading>
                <Heading as={"h3"}>The Wild Oasis</Heading>
            </div>
        </>
    );
}

export default App;
