import {useEffect, useState} from "react"
import EmailModel, {Email} from "../models/EmailModel"

export function useEmails() {
    const [emails, setEmails] = useState<Email[]>(EmailModel.getEmails())

    useEffect(() => {
        // Subscribe to model changes
        const unsubscribe = EmailModel.subscribe(() => {
            setEmails(EmailModel.getEmails())
        })

        return () => unsubscribe()
    }, [])

    const markEmailAsSeen = (email: Email) => {
        EmailModel.markEmailAsSeen(email)
    }

    const setEmailReply = (email: Email, replyIndex: number) => {
        EmailModel.setEmailReply(email, replyIndex)
    }

    return {
        emails,
        markEmailAsSeen,
        setEmailReply,
    }
}
