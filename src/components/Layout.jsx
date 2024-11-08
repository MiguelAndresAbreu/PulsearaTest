import Title from "./title/Title";
import PropTypes from "prop-types";
import styles from "./Layout.module.css";

const Layout = ({children}) => {

    return (
        <div className={styles.background}>
            <div className={styles.title}>
                <Title className>Procedimientos</Title>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}
Layout.propTypes = {
    children: PropTypes.node,
}

export default Layout
