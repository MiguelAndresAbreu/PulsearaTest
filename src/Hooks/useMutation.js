import { useCallback, useReducer, useMemo } from "react";
import { generateClient } from "@aws-amplify/api";

const mutationReducer = (state, action) => {
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

const useMutation = (mutation) => {
    const initialState = { loading: false, data: undefined, errors: undefined };
    const [state, dispatch] = useReducer(mutationReducer, initialState);

    const { loading, data, errors } = state;

    const client = useMemo(() => generateClient({}), []);

    const executeMutation = useCallback(
        (variables) => {
            dispatch({ type: "START" });

            return client
                .graphql({ query: mutation, variables })
                .then((response) => {
                    dispatch({
                        type: "SUCCESS",
                        payload: { data: response.data, errors: response.errors },
                    });
                    return response;
                })
                .catch((error) => {
                    dispatch({ type: "FAILURE", payload: error });
                    throw error;
                });
        },
        [mutation, client]
    );

    return [executeMutation, { data, errors, loading }];
};

export default useMutation;
