import EmailApp from "../components/emailApp.tsx"
import Taskbar from "../components/taskbar"
import "../../styles/demo.css"
import {testEmailTask} from "../tasks/emailTasks"

testEmailTask.start()

export default function Demo() {
    return (
        <div className="demo-container">
            <EmailApp/>
            <Taskbar/>
        </div>
    )
}
