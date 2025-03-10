import {useState, useEffect} from 'react'
import TimeModel from './TimeModel.ts'

export default function useTime() {
    const [day, setDay] = useState<number>(TimeModel.getDay())
    const [time, setTime] = useState<number>(TimeModel.getTime())

    useEffect(() => {
        const interval = setInterval(() => {
            setDay(TimeModel.getDay());
            setTime(TimeModel.getTime());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const pauseTimer = () => {TimeModel.pauseTimer()}
    const resumeTimer = () => {TimeModel.resumeTimer()}
    const startWeek = () => {TimeModel.startWeek()}
    const startNextDay = () => {TimeModel.startNextDay()}
    const endDay = () => {TimeModel.endDay()}
    const endWeek = () => {TimeModel.endWeek()}

    return {day, time, pauseTimer, resumeTimer, startWeek, startNextDay, endDay, endWeek};

}
