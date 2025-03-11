
/**Imports below */
import styles from '../../styles/Taskbar.module.css'
import reactLogo from '../assets/react.svg'
import DesktopModel, { OpenWindow } from '../models/DesktopModel'

type IconProps = {
    onClick: () => void;
    image_src: string;
    alt: string;
}

function Icon(props: IconProps) {
    return (
        <div>
        <img
            className = {styles.image}
            src={props.image_src}
            alt={props.alt}
            onClick={props.onClick}
        />
        </div>
    )
}


export default function Taskbar() {

    function handleWindowOpen(window : OpenWindow) : void {
        DesktopModel.manageWindows(window)
    }

    return (
        <div className={styles.main}>
            <ul className={styles.container}>
                <li><Icon onClick={() => handleWindowOpen(OpenWindow.Browser)} image_src={reactLogo} alt='browser'/></li>
                <li><Icon onClick={() => handleWindowOpen(OpenWindow.Email)} image_src={reactLogo} alt='email'/></li>
                <li><Icon onClick={() => handleWindowOpen(OpenWindow.Notes)} image_src={reactLogo} alt='notes'/></li>
            </ul>
        </div>
    )
}