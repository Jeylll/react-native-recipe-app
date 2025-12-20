// services/useFetch.ts
import { useEffect, useState } from "react";

const useFetch = <T>(fetchFunction: () => Promise<T>, autoFetch = true) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = async () => {
        const startTime = Date.now(); // Track start time

        try {
            setLoading(true);
            setError(null);
            const result = await fetchFunction();
            setData(result);
        } catch (err) {
            setError(err instanceof Error ? err : new Error("An error has occurred."));
            setData(null);
        } finally {
            // Ensure loading shows for at least 1 second
            const elapsedTime = Date.now() - startTime;
            const minLoadingTime = 1000; // 1 second minimum

            if (elapsedTime < minLoadingTime) {
                const remainingTime = minLoadingTime - elapsedTime;
                setTimeout(() => {
                    setLoading(false);
                }, remainingTime);
            } else {
                setLoading(false);
            }
        }
    };

    const reset = () => {
        setData(null);
        setLoading(false);
        setError(null);
    };

    useEffect(() => {
        if (autoFetch) {
            fetchData();
        }
    }, []);

    return { data, loading, error, refetch: fetchData, reset };
};

export default useFetch;