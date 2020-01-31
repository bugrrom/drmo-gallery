import React from 'react';
import { Link} from "react-scroll";
import styles from './NavMenu.module.css';

const menu = [
    {name: 'HOME', to: 'Home'},
    {name: 'MY SKILLS', to: 'My skills'},
    {name: 'WORK', to: 'Project'},
    {name: 'CONTACT', to: 'Contact'},
];

function NavMenu() {
    return (
        <div className={styles.nav}>
            <div className={styles.menu}>
                {menu.map((item, index) => {
                    return(
                        <Link
                            className={styles.men}
                            key={index}
                            to={item.to}
                            smooth={true}
                            offset={0}
                            duration={1000}
                        >
                            <div className={styles.a}>{item.name}</div>


                        </Link>
                    )
                })}
            </div>


        </div>
    );
}

export default NavMenu;
