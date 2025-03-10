import React from 'react'
import styles from "../../styles/time.module.css"
import useTime from "../models/useTime.ts"
import Button from "./button.tsx"

// necessary? 
// 1) is type needed or can they just be passed as props in demo.tsx
// 2) should probably just use the model
interface TimeProps {
    day: number
    time: number
}

export default function Time(props: TimeProps) {
    const { day, time, pauseTimer, resumeTimer, startWeek, startNextDay, endDay, endWeek } = useTime()


    
    return (
        <>
            <div className={styles.container}> 
                <p>Day: {day}<br/>Time Remaining: {time}</p>
            </div>

            <Button onClick={startWeek} label="Start Week" />
            <Button onClick={startNextDay} label="Start Next Day" />
            <Button onClick={pauseTimer} label="Pause Timer" />
            <Button onClick={resumeTimer} label="Resume Timer" />
            <Button onClick={endDay} label="End Day" />
            <Button onClick={endWeek} label="End Week" />
        </>
    )
}

