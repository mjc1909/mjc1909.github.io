import { Link, NavLink } from "react-router-dom";
import styles from './navigation.module.css'
import { useState } from "react";
import { icons } from "../../services/icons";

const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false)


    const toggleNavigation = () => {

      
        setIsOpen(!isOpen)
        
    }
    
    /*<NavLink to={"/album/675ee3953fe111c1af86386f"} className={({ isActive }) => (isActive ? styles.active : "")}>Album</NavLink>*/
    return (
        <div className={styles.navigation}>
            {/* <a href="/">FORSIDE</a> */}

            <a href="/" className={styles.logo}>

                ALBUM/HOOKS
            </a>
            <div className={styles.actions}>

                <div className={`${styles.nav} ${isOpen ? styles.open : ''}` }>
                    <NavLink to={"/"} className={({ isActive }) => (isActive ? styles.active : "")}>Home</NavLink>
                    <NavLink to={"/albums"} className={({ isActive }) => (isActive ? styles.active : "")}>Catalog</NavLink>
                    <NavLink to={"/swiper"} className={({ isActive }) => (isActive ? styles.active : "")}>Swiper</NavLink>
                    <NavLink to={"/swipe"} className={({ isActive }) => (isActive ? styles.active : "")}>Slider</NavLink>
                
                </div>
                
                <div onClick={toggleNavigation}>
                    {icons["FaBars"]}
                </div>

            
         

            </div>
         

        </div>
    );
};
export default Navigation;