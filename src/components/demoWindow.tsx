import styles from "../../styles/DemoWindow.module.css"
import { OpenWindow } from "../models/DesktopModel"


type demoWindowProps = {
    window: OpenWindow
}

export default function DemoWindow(props: demoWindowProps) {
    return (
        <div className={styles.main}><h1>{props.window}</h1>
             
            <div className={styles.window}></div>
        </div>
    )
}