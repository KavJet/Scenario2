
/**Imports below */
import styles from '../../styles/Taskbar.module.css'
import Icon from './taskbar-icon'
import reactLogo from '../assets/react.svg'

/**Types here */

/**Props needed */


export default function Taskbar() {

    function openBrowser() {
        console.log("Opened the browser");
    }

    function openEmail() {
        console.log("Opened the browser");
    }

    function openNotes() {
        console.log("Opened the browser");
    }

    return (
        <div className={styles.main}>
            <ul className={styles.container}>
                <li><Icon onClick={openBrowser} image_src={reactLogo} alt='browser'/></li>
                <li><Icon onClick={openEmail} image_src={reactLogo} alt='email'/></li>
                <li><Icon onClick={openNotes} image_src={reactLogo} alt='notes'/></li>
            </ul>
        </div>
    )
}