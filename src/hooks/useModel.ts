import {useEffect, useState} from "react"

import {BaseModel} from "../models/BaseModel.ts";

export function useModel<T>(model: BaseModel<T>): T {
    const [state, setState] = useState<T>(model.getState())

    useEffect(() => {
        const unsubscribe = model.subscribe(() => {
            setState(model.getState())
        })
        return () => unsubscribe()
    }, [model])

    return state
}
