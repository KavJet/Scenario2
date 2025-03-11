import Taskbar from './taskbar.tsx'
import DeskTasks from './tasks-desktop.tsx'
import { DemoTasks } from "../assets/demoTasks.ts"
import DemoWindow from './demoWindow.tsx'
import { useModel } from '../hooks/useModel'
import DesktopModel, { OpenWindow } from '../models/DesktopModel'


export default function Desktop() {
    const desktop = useModel(DesktopModel)

    return (
        <div>
            <DeskTasks tasksMasterList={DemoTasks}/>
            {desktop == OpenWindow.Closed || !desktop ? (<></>) : (
                <DemoWindow window={desktop} />
            )}
            <Taskbar />
        </div>
    )
}