import {Fragment, useState} from "react";
import SideBarComponent from "./SideBarComponent";
import styles from './SideBar.module.scss'
import MenuIcon from '@mui/icons-material/Menu';

const SideBar = () => {
    const [clicked, setClicked] = useState(false);
    const isMobile = window.innerWidth < 510
    return (
        <Fragment>
            {!isMobile ? <SideBarComponent />
                :
                <div className={styles.mobileSidebar}>
                    <MenuIcon className={styles.burger} onClick={() => setClicked((prevState) => !prevState)} />
                    {clicked && <SideBarComponent />}
                </div>}
        </Fragment>
    );
};
export default SideBar;
