import {useCallback, useEffect, useMemo, useReducer} from "react";
import { generateClient } from "@aws-amplify/api";

const queryReducer = (state, action) => {
    switch (action.type) {
        case "START":
            return { ...state, loading: true, data: undefined, errors: undefined };
        case "SUCCESS":
            return { ...state, loading: false, data: action.payload.data, errors: action.payload.errors };
        case "FAILURE":
            return { ...state, loading: false, data: undefined, errors: action.payload };
        default:
            return state;
    }
};

const useQuery = (query, { variables, skip } = {}) => {
    const initialState = { loading: true, data: undefined, errors: undefined };
    const [state, dispatch] = useReducer(queryReducer, initialState);

    const { loading, data, errors } = state;

    const client = useMemo(() => generateClient({}), []);
    const executor = useCallback(() => {
        dispatch({ type: "START" });

        client.graphql({ query, variables })
            .then((response) => {
                dispatch({
                    type: "SUCCESS",
                    payload: { data: response.data, errors: response.errors }
                });
            })
            .catch((error) => {
                dispatch({ type: "FAILURE", payload: error });
            });
    }, [client, query, variables]);
    useEffect(() => {
        if (skip) return;

        executor()
    }, [query, variables, skip, client, executor]);

    if (skip) {
        return {};
    }

    return { data, errors, loading, executor};
};

export default useQuery;
