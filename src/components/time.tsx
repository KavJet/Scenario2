import React from 'react'
import styles from "../../styles/time.module.css"
import TimeModel, {TimeProps} from "../models/TimeModel.ts"
import Button from "./button.tsx"
import { useModel } from "../hooks/useModel.ts"

export default function Time() {
    const {day, time} = useModel(TimeModel)
    
    return (
        <>
            <div className={styles.container}> 
                <p>Day: {day}<br/>Time Remaining: {time}</p>
            </div>

            <Button onClick={TimeModel.startWeek} label="Start Week" />
            <Button onClick={TimeModel.startNextDay} label="Start Next Day" />
            <Button onClick={TimeModel.pauseTimer} label="Pause Timer" />
            <Button onClick={TimeModel.resumeTimer} label="Resume Timer" />
            <Button onClick={TimeModel.endDay} label="End Day" />
            <Button onClick={TimeModel.endWeek} label="End Week" />
        </>
    )
}

