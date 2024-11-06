import { useEffect, useState } from "react";

function useFetch(url) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, [url]);
    return { data };
}

export default useFetch;
