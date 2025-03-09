import EmailApp from "../components/email.tsx"
import Taskbar from "../components/taskbar.tsx"
import "../../styles/demo.css"
import { demoEmails } from "../assets/demoData.ts"

export default function Demo() {
    return (
        <div className="demo-container">
            <EmailApp initialEmails={demoEmails} />
            <Taskbar />
        </div>
    )
}
