import {Task} from "../taskManager"
import EmailModel, {defaultEmail} from "../models/EmailModel"

export const testEmailTask = new Task(
    "1",
    "Test",
    "Test",
    (executeNextStage: () => void) => {
        EmailModel.addEmail({
            ...defaultEmail,
            subject: "Test",
            replyOptions: [{content: "Test"}],
            canReply: true,
            onReply: () => {
                executeNextStage()
            },
        })
    },
    (executeNextStage: () => void) => {
        EmailModel.addEmail({
            ...defaultEmail,
            subject: "The test worked",
            replyOptions: [{content: "Test"}],
            canReply: true,
            onReply: () => {
                executeNextStage();
            }
        })
    },
    () => {
        console.log("Here is the next stage")
    }
)
