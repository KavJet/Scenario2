import { Task } from "../taskManager"
import EmailModel from "../models/EmailModel"
import { defaultEmail } from "../assets/demoData"

export const testEmailTask = new Task(
    "1",
    "Test",
    "Test",
    (executeNextStage: () => void) => {
        EmailModel.addEmail({
            ...defaultEmail,
            subject: "Test",
            replyOptions: [{ content: "Test" }],
            canReply: true,
            onReply: (replyIndex: number) => {
                executeNextStage()
            },
        })
    },
    (executeNextStage: () => void) => {
        EmailModel.addEmail({
            ...defaultEmail,
            subject: "The test worked",
            replyOptions: [{ content: "Test" }],
        })
    }
)
