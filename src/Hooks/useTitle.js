import { useEffect } from 'react';
import {useTitle} from "../components/title/Title";

export const useSetTitle = (newTitle) => {
    const { setTitle } = useTitle();

    useEffect(() => {
        setTitle(newTitle);

        return () => setTitle('')
    }, [newTitle, setTitle])
};