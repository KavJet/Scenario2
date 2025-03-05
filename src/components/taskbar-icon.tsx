
/**Imports below */
import styles from '../../styles/Taskbar-Icon.module.css'

/**Types here */


/**Props needed */
type IconProps = {
    onClick: (() => void);
    image_src: string;
    alt: string;
}

export default function Icon(props: IconProps) {
    return (
        <div>
        <img
            className = {styles.image}
            src={props.image_src}
            alt={props.alt}
        />
        </div>
    )
}