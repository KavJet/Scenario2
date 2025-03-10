class TimeModel {
    private static instance: TimeModel | null = null
    private day: number = 0
    private timeRemaining: number = 10
    private dayTimer: any
    private paused: boolean = false

    public static getInstance(): TimeModel {
        if (!TimeModel.instance) {
            TimeModel.instance = new TimeModel()
        }
        return TimeModel.instance
    }

    public getTime(): number {return this.timeRemaining}
    public getDay(): number {return this.day}
    
    private resetTimer(): void {
        this.timeRemaining = 10
        this.day = 0
        this.paused = false
        this.dayTimer = null
    }

    public startNextDay(): void {
        if (this.day<5) {
            this.day++
            this.timeRemaining = 10
            this.resumeTimer()
            this.runTimer()
        } else {
            this.endWeek()
        }

    }

    private runTimer(): void { //? bad name
        this.dayTimer = setInterval(() => {
            if (!this.paused){
                this.timeRemaining--
                if (this.timeRemaining <= 0) {this.endDay()}
            }
        }, 1000)
    }

    public pauseTimer(): void {this.paused = true}
    public resumeTimer(): void {this.paused = false}

    public endDay(): void {
        console.log("day finished")
        if(this.dayTimer) {
            clearInterval(this.dayTimer)
            this.dayTimer = null
            this.timeRemaining = 0
        }
    }

    public startWeek(): void {
        this.resetTimer()
        this.startNextDay()
    }
    
    public endWeek(): void {
        console.log("week finished")
        this.resetTimer()
    }
} 

export default TimeModel.getInstance()