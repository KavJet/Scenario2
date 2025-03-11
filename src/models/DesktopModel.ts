import {BaseModel} from "./BaseModel"

export enum OpenWindow {Closed,Browser,Email,Notes}


export class DesktopModel extends BaseModel<OpenWindow>{
    private static instance: DesktopModel | null = null

    private constructor() {
        super(OpenWindow.Closed)
    }

    public static getInstance(): DesktopModel {
        if(!DesktopModel.instance) {
            DesktopModel.instance = new DesktopModel()
        }
        return DesktopModel.instance
    }

    public manageWindows(window: OpenWindow): void {
        this.setState(window)
        console.log("ManageWindows called: ", this.getState())
        this.notifyListeners()
    }
}

export default DesktopModel.getInstance()