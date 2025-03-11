import { BaseModel } from "./BaseModel";

export interface TimeProps {
  day: number;
  time: number;
}

class TimeModel extends BaseModel<TimeProps> {
  private static instance: TimeModel | null = null;
  private dayTimer: any;
  private paused: boolean = false;

  private constructor() {
    super({ day: 0, time: 10 });
  }

  public static getInstance(): TimeModel {
    if (!TimeModel.instance) {
      TimeModel.instance = new TimeModel();
    }
    return TimeModel.instance;
  }

  public getTime(): number {
    return this.getState().time;
  }
  private setTime(time: number): void {
      this.setState({... this.getState(), time})
  }

  public getDay(): number {
  return this.getState().day;
  }
  private setDay(day: number): void {
      this.setState({... this.getState(), day})
  }



  private resetTimer(): void {
    this.setTime(10)
    this.setDay(0)
    this.paused = false;
    this.dayTimer = null;
  }

  public startNextDay(): void {
    if (this.getDay() < 5) {
      this.setDay(this.getDay() + 1);
      this.setTime(10)
      this.resumeTimer();
      this.runTimer();
    } else {
      this.endWeek();
    }
  }

  private runTimer(): void {
    //? bad name
    console.log("running timer");
    this.dayTimer = setInterval(() => {
      if (!this.paused) {
        this.setTime(this.getTime() - 1);
        this.notifyListeners();
        if (this.getTime() <= 0) {
          this.endDay();
        }
      }
    }, 1000);
  }

  public pauseTimer(): void {
    this.paused = true;
  }

  public resumeTimer(): void {
    this.paused = false;
  }

  public endDay(): void {
    console.log("day finished");
    if (this.dayTimer) {
      clearInterval(this.dayTimer);
      this.dayTimer = null;
      this.setTime(0)
    }
  }

  public startWeek(): void {
    this.resetTimer();
    this.startNextDay();
  }

  public endWeek(): void {
    console.log("week finished");
    this.resetTimer();
  }
}

export default TimeModel.getInstance();
