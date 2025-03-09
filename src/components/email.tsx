import React from "react"
import "../../styles/email.css"

export interface Email {
    subject: string
    sender: { name: string; email: string }
    date: { day: number; time: string }
    replyOptions: { content: string }[]
    body: string
}

interface EmailAppProps {
    emails: Email[]
}

export default function EmailApp({ emails }: EmailAppProps) {
    const [selectedEmail, setSelectedEmail] = React.useState<Email | null>(null)

    if (!emails || emails.length === 0) {
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
                        <div
                            key={index}
                            onClick={() => setSelectedEmail(email)}
                            className="email-list-item"
                        >
                            <div className="email-list-item-sender">
                                {email.sender.name}
                            </div>
                            <div className="email-list-item-subject">
                                {email.subject}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="email-content">
                {!selectedEmail ? (
                    <div className="email-content-empty">
                        Select an email to view
                    </div>
                ) : (
                    <div className="email-content-scroll">
                        <h2>{selectedEmail.subject}</h2>
                        <div className="email-content-header">
                            <strong>From: </strong>
                            {selectedEmail.sender.name} &lt;
                            {selectedEmail.sender.email}&gt;
                        </div>
                        <div className="email-content-date">
                            <strong>Date: </strong>
                            {selectedEmail.date.day} at{" "}
                            {selectedEmail.date.time}
                        </div>
                        <div className="email-content-body">
                            {selectedEmail.body}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
