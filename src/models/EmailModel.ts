import { demoEmails } from "../assets/demoData"
import { BaseModel } from "./BaseModel.ts"

export interface Email {
    subject: string
    sender: { name: string; email: string }
    date: { day: number; time: string }
    replyOptions: { content: string }[]
    body: string
    seen: boolean
    chosenReply: number
    canReply: boolean
    onReply?: (replyIndex: number) => void
}

// Default email with all fields blank
export const defaultEmail: Email = {
    subject: "",
    sender: {
        name: "",
        email: "",
    },
    date: {
        day: 0,
        time: "",
    },
    replyOptions: [],
    body: "",
    seen: false,
    chosenReply: -1,
    canReply: false,
}

export class EmailModel extends BaseModel<Email[]> {
    private static instance: EmailModel | null = null

    private constructor() {
        super([...demoEmails])
    }

    public static getInstance(): EmailModel {
        if (!EmailModel.instance) {
            EmailModel.instance = new EmailModel()
        }
        return EmailModel.instance
    }

    public addEmail(email: Email): void {
        this.state = [...this.state, email]
        this.notifyListeners()
    }

    public markEmailAsSeen(email: Email): void {
        this.state = this.state.map((e) =>
            e === email ? { ...e, seen: true } : e
        )
        this.notifyListeners()
    }

    public setEmailReply(email: Email, replyIndex: number): void {
        this.state = this.state.map((e) =>
            e === email ? { ...e, chosenReply: replyIndex } : e
        )
        this.notifyListeners()
    }
}

export default EmailModel.getInstance()
