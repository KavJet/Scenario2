import {useState, useEffect} from 'react'
import TimeModel from './TimeModel.ts'

export default function useTime() {
    const [day, setDay] = useState<number>(TimeModel.getDay())
    const [time, setTime] = useState<number>(TimeModel.getTime())

    useEffect(() => {
        const unsubscribe = model.subscribe(() => {
            setState(model.getState())
        })
        return () => unsubscribe()
    }, [model])

    return {day, time};

}
