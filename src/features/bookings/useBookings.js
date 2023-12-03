import {useQuery} from "@tanstack/react-query";
import {getBookings} from "../../services/apiBookings.js";
import {useSearchParams} from "react-router-dom";

export function useBookings(){
    const [searchParams] = useSearchParams()

    // FILTER
    const filterValue = searchParams.get("status");
    const filter =
        !filterValue || filterValue === "all"
            ? null
            : {field: "status", value: filterValue};
            // : {field: "totalPrice", value: 5000, method: "gte"};

    const {isLoading, data: bookings, error} = useQuery({
        queryKey: ['bookings', filter],
        queryFn: () => getBookings({filter})
    })

    return {isLoading, bookings, error}
}