import React from "react";
import styles from "./Nav.module.css"
import { Link } from "react-router-dom";

class Nav extends React.Component{
    render() {
        return (
            <nav className={styles.nav}>
                <ul className={styles.nav_list}>
                    <Link className={styles.nav_item} to="/about">Про нас</Link>
                    <Link className={styles.nav_item}  to="/contacts">Контакты</Link>
                    <Link  className={styles.nav_item}  to="/cabinet">Кабинет</Link>
                </ul>
            </nav>
        )
    }
}

export default Nav;