import { Email } from "../components/email"

export const demoEmails: Email[] = [
    {
        subject: "Weekly Team Meeting - Sprint Planning",
        sender: {
            name: "John Manager",
            email: "john.manager@company.com",
        },
        date: {
            day: 15,
            time: "10:00 AM",
        },
        replyOptions: [
            { content: "I'll be there" },
            { content: "Can't make it" },
        ],
        body: "Hi team,\n\nLet's meet to discuss our upcoming sprint goals and review last week's progress. Please come prepared with your updates and any blockers you'd like to discuss.\n\nBest regards,\nJohn",
        seen: true,
        chosenReply: 0,
        canReply: false,
    },
    {
        subject: "🎉 Company Summer Party Invitation",
        sender: {
            name: "HR Team",
            email: "hr@company.com",
        },
        date: {
            day: 16,
            time: "2:30 PM",
        },
        replyOptions: [
            { content: "Count me in!" },
            { content: "Sorry, can't make it" },
        ],
        body: "You're invited to our annual summer party!\n\nDate: July 20th\nTime: 4:00 PM - 8:00 PM\nLocation: Central Park\n\nFood, drinks, and fun activities will be provided. Feel free to bring your family!\n\nPlease RSVP by July 10th.",
        seen: false,
        chosenReply: -1,
        canReply: true,
    },
    {
        subject: "Urgent: System Maintenance Notice",
        sender: {
            name: "IT Support",
            email: "it.support@company.com",
        },
        date: {
            day: 16,
            time: "9:15 AM",
        },
        replyOptions: [{ content: "Acknowledged" }],
        body: "Important Notice:\n\nWe will be performing critical system maintenance this Saturday from 10 PM to 2 AM. During this time, some services may be unavailable.\n\nPlease save your work and log out before the maintenance window.",
        seen: true,
        chosenReply: 0,
        canReply: false,
    },
    {
        subject: "New Project Kickoff - E-commerce Platform",
        sender: {
            name: "Sarah Product",
            email: "sarah.product@company.com",
        },
        date: {
            day: 17,
            time: "11:00 AM",
        },
        replyOptions: [
            { content: "I'm interested" },
            { content: "Need more info" },
        ],
        body: "Hello everyone,\n\nWe're starting an exciting new e-commerce platform project. I'd like to schedule a kickoff meeting to discuss the requirements and timeline.\n\nPlease indicate your availability for next week.\n\nBest,\nSarah",
        seen: false,
        chosenReply: -1,
        canReply: true,
    },
    {
        subject: "Quarterly Review Meeting",
        sender: {
            name: "Finance Department",
            email: "finance@company.com",
        },
        date: {
            day: 17,
            time: "3:45 PM",
        },
        replyOptions: [{ content: "Will attend" }],
        body: "Dear all,\n\nThis is a reminder for our quarterly review meeting tomorrow at 2 PM. Please bring your Q2 reports and projections for Q3.\n\nMeeting Room: Conference Room A",
        seen: true,
        chosenReply: -1,
        canReply: true,
    },
    {
        subject: "Office Supply Request Approved",
        sender: {
            name: "Office Admin",
            email: "admin@company.com",
        },
        date: {
            day: 18,
            time: "10:30 AM",
        },
        replyOptions: [{ content: "Thank you" }],
        body: "Your office supply request has been approved. You can pick up your items from the supply room between 2-4 PM today.\n\nRequested items:\n- Notebooks (2)\n- Pens (box)\n- Whiteboard markers",
        seen: false,
        chosenReply: -1,
        canReply: false,
    },
    {
        subject: "🏥 Health Insurance Updates",
        sender: {
            name: "Benefits Team",
            email: "benefits@company.com",
        },
        date: {
            day: 18,
            time: "1:20 PM",
        },
        replyOptions: [{ content: "Need clarification" }],
        body: "Important updates to our health insurance policy:\n\n- New dental coverage options\n- Updated prescription benefits\n- Mental health services expansion\n\nPlease review the attached documents and submit your selections by the end of the month.",
        seen: false,
        chosenReply: -1,
        canReply: true,
    },
    {
        subject: "Client Meeting - Project Status",
        sender: {
            name: "Mike Client",
            email: "mike.client@bigcorp.com",
        },
        date: {
            day: 19,
            time: "9:00 AM",
        },
        replyOptions: [
            { content: "Confirmed" },
            { content: "Reschedule needed" },
        ],
        body: "Hi team,\n\nI'd like to schedule a status update meeting for the ongoing project. Could we meet next Tuesday at 11 AM?\n\nWe'll discuss:\n- Current progress\n- Timeline updates\n- Next steps\n\nBest regards,\nMike",
        seen: true,
        chosenReply: -1,
        canReply: true,
    },
    {
        subject: "🎓 Learning & Development Workshop",
        sender: {
            name: "Training Team",
            email: "training@company.com",
        },
        date: {
            day: 19,
            time: "4:15 PM",
        },
        replyOptions: [
            { content: "Sign me up" },
            { content: "Not interested" },
        ],
        body: "New Workshop Available!\n\nTopic: Advanced Project Management\nDate: Next Thursday\nTime: 1-4 PM\nLocation: Training Room B\n\nLearn essential skills for managing complex projects and teams. Space is limited to 20 participants.",
        seen: false,
        chosenReply: -1,
        canReply: true,
    },
    {
        subject: "Weekend Server Maintenance Complete",
        sender: {
            name: "System Admin",
            email: "sysadmin@company.com",
        },
        date: {
            day: 20,
            time: "7:45 AM",
        },
        replyOptions: [{ content: "Got it" }],
        body: "The scheduled server maintenance has been completed successfully. All systems are now operating normally.\n\nIf you experience any issues, please contact the IT support team.\n\nThank you for your patience.",
        seen: false,
        chosenReply: -1,
        canReply: false,
    },
]
