import React, { useEffect, useState } from "react";
import Axios from "../AxiosInstance";
import { useQuery } from "@tanstack/react-query";
export function AxiosTutorial() {
//   const [data, setData] = useState(null);
    const { data: AxiosTutorial, isLoading, error } = useQuery(["AxiosTutorial"], async () => {
        try {const response = await Axios.get("/");
            return response.data
        } catch (error) {console.log(error);
        }
    });

    if (isLoading) {
        return <h1>Loading....</h1>
    }

    if (error) {
        console.log(error);
        return <h1>Error</h1>
    }
    return <h1>{AxiosTutorial}</h1>
}
