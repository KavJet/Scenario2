import {BaseModel} from "./BaseModel"

export interface TimeProps {
    day: number
    time: number
}

class TimeModel extends BaseModel<TimeProps>{
    private static instance: TimeModel | null = null
    private dayTimer: any
    private paused: boolean = false

    private constructor() {
        super({day: 0, time: 10})
    }

    public static getInstance(): TimeModel {
        if (!TimeModel.instance) {
            TimeModel.instance = new TimeModel()
        }
        return TimeModel.instance
    }

    public getTime(): number {return this.state.time}
    public getDay(): number {return this.state.day}
    
    private resetTimer(): void {
        this.state.time = 10
        this.state.day = 0
        this.paused = false
        this.dayTimer = null
    }

    public startNextDay(): void {
        if (this.state.day<5) {
            this.state.day++
            this.state.time = 10
            this.resumeTimer()
            this.runTimer()
        } else {
            this.endWeek()
        }
        this.notifyListeners()

    }

    private runTimer(): void { //? bad name
        this.dayTimer = setInterval(() => {
            if (!this.paused){
                this.state.time--
                if (this.state.time <= 0) {this.endDay()}
            }
        }, 1000)
    }

    public pauseTimer(): void {
        this.paused = true
        this.notifyListeners()
    }
    
    public resumeTimer(): void {
        this.paused = false
        this.notifyListeners()
    }

    public endDay(): void {
        console.log("day finished")
        if(this.dayTimer) {
            clearInterval(this.dayTimer)
            this.dayTimer = null
            this.state.time = 0
        }
        this.notifyListeners()
    }

    public startWeek(): void {
        this.resetTimer()
        this.startNextDay()
        this.notifyListeners()
    }
    
    public endWeek(): void {
        console.log("week finished")
        this.resetTimer()
        this.notifyListeners()
    }
} 

export default TimeModel.getInstance()