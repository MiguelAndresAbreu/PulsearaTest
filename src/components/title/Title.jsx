import React, {useEffect} from "react";
import PropTypes from "prop-types";

import styles from "../Layout.module.css";

export const Title = ({ children }) => {
    useEffect(() => {
        if (children) {
            document.title = children
        }
    }, [children])

    return (
        <h3 className={styles.text}>
            {children}
        </h3>
    )
}
Title.propTypes = {
    children: PropTypes.string,
}
export default Title
