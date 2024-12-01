import { useEffect } from "react";
import { useRouteError } from "react-router-dom";

export function RootRouteError() {
    const error = useRouteError();

    useEffect(() => {
        if (error) {
            console.error(error);
        }
    }, [error]);

    return (
        <div>Something went wrong</div>
    );
}
