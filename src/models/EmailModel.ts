import {demoEmails} from "../assets/demoData"

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

export class EmailModel {
    private static instance: EmailModel | null = null
    private emails: Email[] = []
    private listeners: Set<() => void> = new Set()

    private constructor() {
        // Initialize with demo data
        this.emails = [...demoEmails]
    }

    public static getInstance(): EmailModel {
        if (!EmailModel.instance) {
            EmailModel.instance = new EmailModel()
        }
        return EmailModel.instance
    }

    public getEmails(): Email[] {
        return [...this.emails]
    }

    public addEmail(email: Email): void {
        this.emails = [...this.emails, email]
        this.notifyListeners()
    }

    public markEmailAsSeen(email: Email): void {
        this.emails = this.emails.map((e) =>
            e === email ? {...e, seen: true} : e
        )
        this.notifyListeners()
    }

    public setEmailReply(email: Email, replyIndex: number): void {
        this.emails = this.emails.map((e) =>
            e === email ? {...e, chosenReply: replyIndex} : e
        )
        this.notifyListeners()
    }

    public subscribe(listener: () => void): () => void {
        this.listeners.add(listener)
        return () => this.listeners.delete(listener)
    }

    private notifyListeners(): void {
        this.listeners.forEach((listener) => listener())
    }
}

export default EmailModel.getInstance()
