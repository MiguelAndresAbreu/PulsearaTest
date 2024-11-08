import React, {useEffect} from "react";
import PropTypes from "prop-types";

export const Title = ({ children }) => {
    useEffect(() => {
        if (children) {
            document.title = children
        }
    }, [children])

    return (
        <h3>
            {children}
        </h3>
    )
}
Title.propTypes = {
    children: PropTypes.string,
}
export default Title
