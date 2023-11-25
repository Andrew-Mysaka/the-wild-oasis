import Heading from "../ui/Heading";
import Row from "../ui/Row";
import {useEffect} from "react";
import {getCabins} from "../services/apiCabins.js";

function Cabins() {
    useEffect(() => {
        getCabins().then(data=>console.log(data))
    }, []);

    return (
        <Row type="horizontal">
            <Heading as="h1">All cabins</Heading>
            <p>TEST</p>
            <img src={'https://eczlrzibstkthjfgjxej.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg?t=2023-11-25T18%3A46%3A34.064Z'} alt={'Cabin #1'}/>
        </Row>
    );
}

export default Cabins;
