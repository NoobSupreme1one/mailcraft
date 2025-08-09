export const premadeTemplates: Array<{ title: string; category: string; html: string }> = [
  { title: "Consultation Invite", category: "Outreach", html: basic("Book a free 30-min consultation", "Let's discuss your project and goals.") },
  { title: "Project Proposal", category: "Sales", html: basic("Proposal for your project", "Please find the proposed scope and next steps.") },
  { title: "Invoice", category: "Billing", html: basic("Your invoice is ready", "Thanks for your business. Invoice attached.") },
  { title: "Payment Reminder", category: "Billing", html: basic("Friendly payment reminder", "Just a reminder your invoice is due soon.") },
  { title: "Onboarding Welcome", category: "Onboarding", html: basic("Welcome aboard!", "Here's what to expect next.") },
  { title: "Weekly Update", category: "Status", html: basic("Weekly project update", "Summary of progress and upcoming tasks.") },
  { title: "Launch Announcement", category: "Marketing", html: basic("We launched!", "Check out the live project and share feedback.") },
  { title: "Feature Announcement", category: "Marketing", html: basic("New feature released", "Here's what's new and improved.") },
  { title: "Case Study", category: "Marketing", html: basic("New case study", "See how we helped a client succeed.") },
  { title: "Testimonial Request", category: "Outreach", html: basic("Could you share a testimonial?", "It would help us a lot.") },
  { title: "Discovery Call Follow-up", category: "Sales", html: basic("Great speaking with you", "Here's a recap and suggested next steps.") },
  { title: "Contract Sent", category: "Legal", html: basic("Contract sent for signature", "Please review and sign at your convenience.") },
  { title: "Kickoff Agenda", category: "PM", html: basic("Kickoff meeting agenda", "Review timeline, deliverables, and responsibilities.") },
  { title: "Handoff", category: "PM", html: basic("Project handoff", "All assets and documentation are included.") },
  { title: "Support Update", category: "Support", html: basic("Support update", "We resolved your issue and next steps are below.") },
  { title: "Referral Ask", category: "Outreach", html: basic("Know anyone who needs help?", "We have availability next month.") },
  { title: "Holiday Greeting", category: "Relationship", html: basic("Happy holidays!", "Wishing you a wonderful season." ) },
  { title: "Event Invite", category: "Marketing", html: basic("Join our webinar", "Save your seat and learn with us.") },
  { title: "Feedback Request", category: "Relationship", html: basic("Quick feedback?", "Two minutes to improve our service.") },
  { title: "NPS Survey", category: "Relationship", html: basic("How did we do?", "Please rate your experience.") },
  { title: "Churn Save", category: "Retention", html: basic("Anything we can do?", "We'd love to keep working together." ) },
  { title: "Winback", category: "Retention", html: basic("We miss you", "Here's what's new since we last worked together.") },
  { title: "Availability Update", category: "Outreach", html: basic("Upcoming availability", "We have openings starting next week.") },
  { title: "Scope Change", category: "PM", html: basic("Scope change notice", "Details of the change and impact.") },
];

function basic(headline: string, sub: string) {
  return `<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1"/><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /><title>${headline}</title></head><body style="margin:0;padding:0;background:#f6f6f6;">
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#f6f6f6;">
    <tr><td/>
      <td style="display:block;max-width:600px;margin:24px auto;padding:10px;">
        <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:8px;overflow:hidden;border:1px solid #e5e5e5;">
          <div style="padding:24px 24px 8px;font-family:Inter,Arial,sans-serif;">
            <h1 style="margin:0 0 8px;font-size:24px;line-height:32px;color:#111111;">${headline}</h1>
            <p style="margin:0 0 16px;font-size:14px;line-height:20px;color:#555555;">${sub}</p>
            <p style="margin:0 0 16px;font-size:14px;line-height:20px;color:#555555;">Hi there,</p>
            <p style="margin:0 0 16px;font-size:14px;line-height:20px;color:#555555;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent, vitae.</p>
            <div>
              <a href="#" style="display:inline-block;background:#111111;color:#ffffff;text-decoration:none;font-size:14px;line-height:20px;padding:10px 16px;border-radius:6px;">Call to action</a>
            </div>
            <p style="margin:16px 0 0;font-size:12px;line-height:18px;color:#888888;">Best regards,<br/>Your Name</p>
          </div>
        </div>
      </td>
    <td/></tr>
  </table>
</body></html>`;
}