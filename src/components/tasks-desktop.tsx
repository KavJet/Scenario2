import styles from "../../styles/Tasks-desktop.module.css"
import React from "react"

//Note: This is a very basic version of the tasks
//For now, it assumes we have an ARRAY storing all the tasks, and this can be filtered to find only the active tasks

type DesktopTaskProps = {
    tasksMasterList: {id: number, title: string, desc: string, active: boolean, complete:boolean}[]
}




export default function TasksDesktop (props: DesktopTaskProps) {
    const [activeTasks, setActiveTasks] = React.useState(props.tasksMasterList.filter(task => task.active));
    const [showTasks, toggleShowTasks] = React.useState(false)

    //EXPECTING: some sort of react state that manages updating completed tasks and updated tasks, which can be passed in here to make visual changes!
    // const tasksIssued = props.tasksIssued;
    // const setTasksIssued = props.setTasksIssued; //likely will not change
    // const tasksCompleted = props.tasksCompleted;
    // const setTasksCompleted = props.setTasksCompleted; //will not be changing, likely

    // useEffect(() => {
    //     setActiveTasks(tasksIssued)
    // },[tasksIssued,tasksCompleted]) //where tasksIssued is a state checking if tasks have been issued - passed in through props. Same goes for tasksCompleted


    return (
        <div className={styles.container}>
            <h2 className={styles.tasks} onClick={() => toggleShowTasks(!showTasks)}>Tasks:</h2>
            {showTasks ? <div className={styles.activeTasksWrapper}>
                {activeTasks.length ? activeTasks.map(item => { return (
                    <div className={styles.activeTask} key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                    </div>
                )}):
                <div className={styles.noActives}><p>No Active Tasks!</p></div>
                }
            </div>:<div></div>}
        </div>
    )
}