import { useEffect, useState } from "react"
import "../../styles/email.css"

export interface Email {
    subject: string
    sender: { name: string; email: string }
    date: { day: number; time: string }
    replyOptions: { content: string }[]
    body: string
    seen: boolean
    chosenReply: number
    canReply: boolean
}

interface EmailListItemProps {
    email: Email
    onClick: (email: Email) => void
}

function EmailListItem({ email, onClick }: EmailListItemProps) {
    return (
        <div
            onClick={() => onClick(email)}
            className={`email-list-item ${
                !email.seen ? "email-list-item-unseen" : ""
            }`}
        >
            <div className="email-list-item-content">
                <div className="email-list-item-sender">
                    {email.sender.name}
                </div>
                <div className="email-list-item-subject">{email.subject}</div>
            </div>
        </div>
    )
}

interface EmailContentProps {
    email: Email
}

function EmailContent({ email }: EmailContentProps) {
    return (
        <div className="email-content-scroll">
            <h2>{email.subject}</h2>
            <div className="email-content-header">
                <strong>From: </strong>
                {email.sender.name} &lt;{email.sender.email}&gt;
            </div>
            <div className="email-content-date">
                <strong>Date: </strong>
                {email.date.day} at {email.date.time}
            </div>
            <div className="email-content-body">{email.body}</div>
        </div>
    )
}

interface EmailAppProps {
    initialEmails?: Email[]
}

export default function EmailApp({ initialEmails = [] }: EmailAppProps) {
    const [emails, setEmails] = useState<Email[]>([])
    const [selectedEmail, setSelectedEmail] = useState<Email | null>(null)

    useEffect(() => {
        setEmails(initialEmails)
    }, [])

    const handleEmailSelect = (email: Email) => {
        if (!email.seen) {
            setEmails((currentEmails) =>
                currentEmails.map((e) =>
                    e === email ? { ...e, seen: true } : e
                )
            )
        }
        setSelectedEmail(email)
    }

    if (emails.length === 0) {
        return (
            <div className="email-container email-container-empty">
                You have no emails
            </div>
        )
    }

    return (
        <div className="email-container">
            <div className="email-list">
                <div className="email-list-scroll">
                    {emails.map((email, index) => (
                        <EmailListItem
                            key={index}
                            email={email}
                            onClick={handleEmailSelect}
                        />
                    ))}
                </div>
            </div>
            <div className="email-content">
                {!selectedEmail ? (
                    <div className="email-content-empty">
                        Select an email to view
                    </div>
                ) : (
                    <EmailContent email={selectedEmail} />
                )}
            </div>
        </div>
    )
}
