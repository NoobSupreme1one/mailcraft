export const premadeTemplates: Array<{ title: string; category: string; html: string }> = [
  {
    title: "Cold outreach — Web/mobile app studios",
    category: "Outreach",
    html: basic("Quick wins for your app studio", "A short note on lifting activation & retention."),
  },
  {
    title: "Cold outreach — case-study-led",
    category: "Outreach",
    html: basic("Case study: fast growth plan", "Three quick fixes we used to move key metrics."),
  },
  {
    title: "Cold Outreach — SaaS (B2B/B2C)",
    category: "Outreach",
    html: coldOutreachSaaS(),
  },
  {
    title: "Cold Outreach — Cloud/Hosting & DevOps",
    category: "Outreach",
    html: coldOutreachCloudDevOps(),
  },
  {
    title: "Cold Outreach — Cybersecurity",
    category: "Outreach",
    html: coldOutreachCybersecurity(),
  },
  {
    title: "Cold Outreach — Fintech & Payments",
    category: "Outreach",
    html: coldOutreachFintech(),
  },
  {
    title: "Cold Outreach — AI/ML Platforms",
    category: "Outreach",
    html: coldOutreachAI(),
  },
  {
    title: "Cold Outreach — Marketplaces (B2B/B2C)",
    category: "Outreach",
    html: coldOutreachMarketplaces(),
  },
  {
    title: "Cold Outreach — Telecommunications & ISPs",
    category: "Outreach",
    html: coldOutreachTelecom(),
  },
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

function coldOutreachSaaS() {
  const primary = "#4f46e5"; // Indigo
  const text = "#1f2937"; // Gray-800
  const sub = "#6b7280"; // Gray-500
  const border = "#e5e7eb"; // Gray-200
  const bg = "#f3f4f6"; // Gray-100
  const badge = "#eef2ff"; // Indigo-50
  return `<!doctype html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <title>Drive Activation & Retention — Quick Win Plan</title>
  <style>
    @media (max-width: 600px) {
      .container { padding: 0 16px !important; }
      .card { border-radius: 12px !important; }
      .stack { display: block !important; }
      .stack > * { width: 100% !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background:${bg};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${bg};">
    <tr>
      <td></td>
      <td class="container" style="display:block;max-width:680px;margin:28px auto;padding:0 8px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" class="card" style="background:#fff;border:1px solid ${border};border-radius:16px;overflow:hidden;">
          <tr>
            <td style="background:linear-gradient(135deg, ${primary}, #7c3aed);padding:28px 28px 8px;color:#fff;font-family:Inter,Arial,sans-serif;">
              <div style="display:inline-block;background:${badge};color:${primary};padding:6px 10px;border-radius:20px;font-size:12px;font-weight:600;letter-spacing:.3px;">SaaS Growth • Case Study Inside</div>
              <h1 style="margin:14px 0 6px;font-size:26px;line-height:1.3;">Hey {{FirstName}}, quick idea to lift activation & retention</h1>
              <p style="margin:0 0 10px;font-size:14px;opacity:.95;">Saw {{Company}} is focused on growth this quarter — here’s a 2-week plan we used to move conversion and expansion for a similar product.</p>
            </td>
          </tr>

          <tr>
            <td style="padding:22px 28px 10px;font-family:Inter,Arial,sans-serif;color:${text};">
              <h2 style="margin:0 0 8px;font-size:18px;">Why reach out</h2>
              <p style="margin:0 0 14px;font-size:14px;color:${sub};">Teams like {{Company}} usually hit one of these speed bumps:</p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" class="stack">
                <tr>
                  <td style="width:50%;vertical-align:top;padding-right:8px;">
                    <ul style="margin:0 0 10px;padding-left:18px;color:${text};font-size:14px;line-height:1.6;">
                      <li>Onboarding friction delaying time-to-value</li>
                      <li>Low trial-to-paid conversion</li>
                      <li>Feature discoverability gaps</li>
                    </ul>
                  </td>
                  <td style="width:50%;vertical-align:top;padding-left:8px;">
                    <ul style="margin:0 0 10px;padding-left:18px;color:${text};font-size:14px;line-height:1.6;">
                      <li>Churn from unclear aha moments</li>
                      <li>Limited upsell cues in-product</li>
                      <li>Leaky activation funnels</li>
                    </ul>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:6px 28px 4px;font-family:Inter,Arial,sans-serif;">
              <div style="border:1px solid ${border};border-radius:12px;padding:16px 16px 10px;background:#fafafa;">
                <div style="font-size:12px;font-weight:700;color:${primary};letter-spacing:.3px;margin-bottom:4px;">Mini case study</div>
                <div style="display:flex;gap:14px;align-items:flex-start;">
                  <div style="flex:1;">
                    <p style="margin:0 0 8px;font-size:14px;color:${text};">For a B2B SaaS in {{ProductCategory}}, we simplified onboarding and added targeted prompts.</p>
                    <ul style="margin:0 0 0;padding-left:18px;color:${text};font-size:14px;line-height:1.6;">
                      <li><b>+27% trial → paid</b> within 30 days</li>
                      <li><b>−18% early churn</b> after 6 weeks</li>
                      <li><b>+22% expansion</b> from in-app nudges</li>
                    </ul>
                  </div>
                  <div style="min-width:140px;border-left:1px solid ${border};padding-left:14px;">
                    <div style="font-size:12px;color:${sub};margin:0 0 6px;">Playbook included</div>
                    <ol style="margin:0;padding-left:18px;font-size:13px;color:${text};line-height:1.6;">
                      <li>Map aha moments</li>
                      <li>Trim onboarding steps</li>
                      <li>Contextual prompts</li>
                      <li>Measure cohorts</li>
                    </ol>
                  </div>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td style="padding:18px 28px 6px;font-family:Inter,Arial,sans-serif;color:${text};">
              <h2 style="margin:0 0 8px;font-size:18px;">A quick win for {{Company}}</h2>
              <p style="margin:0 0 12px;font-size:14px;color:${sub};">If helpful, I can share a 1-page teardown of your signup and first-run experience with 3 quick fixes.</p>
              <div>
                <a href="{{BookingLink}}" style="display:inline-block;background:${primary};color:#ffffff;text-decoration:none;font-size:14px;line-height:20px;padding:12px 18px;border-radius:10px;font-weight:600;">Get the 1-page teardown</a>
              </div>
              <p style="margin:14px 0 0;font-size:12px;line-height:18px;color:${sub};">Prefer email? Reply with "send teardown" and I’ll share it.</p>
            </td>
          </tr>

          <tr>
            <td style="padding:20px 28px 24px;font-family:Inter,Arial,sans-serif;border-top:1px solid ${border};color:${sub};">
              <p style="margin:0 0 4px;font-size:12px;">Best,<br/>{{YourName}} — {{Title}}</p>
              <p style="margin:0;font-size:12px;">{{Website}} • {{Calendly}}</p>
            </td>
          </tr>
        </table>
      </td>
      <td></td>
    </tr>
  </table>
</body>
</html>`;
}

function coldOutreachCloudDevOps() {
  const primary = "#0ea5e9"; // Sky
  const accent = "#22d3ee"; // Cyan
  const text = "#0f172a"; // Slate-900
  const sub = "#475569"; // Slate-600
  const border = "#e2e8f0"; // Slate-200
  const bg = "#f8fafc"; // Slate-50
  const badge = "#e0f2fe"; // Sky-100
  return `<!doctype html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <title>Cut Cloud Spend, Boost Reliability — 2-Week Plan</title>
  <style>
    @media (max-width: 600px) {
      .container { padding: 0 16px !important; }
      .card { border-radius: 12px !important; }
      .grid { display: block !important; }
      .grid > * { width: 100% !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background:${bg};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${bg};">
    <tr>
      <td></td>
      <td class="container" style="display:block;max-width:680px;margin:28px auto;padding:0 8px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" class="card" style="background:#fff;border:1px solid ${border};border-radius:16px;overflow:hidden;">
          <tr>
            <td style="background:radial-gradient(1200px 200px at 0% 0%, ${accent}22, transparent), linear-gradient(135deg, ${primary}, #2563eb);padding:28px 28px 8px;color:#fff;font-family:Inter,Arial,sans-serif;">
              <div style="display:inline-block;background:${badge};color:${primary};padding:6px 10px;border-radius:20px;font-size:12px;font-weight:700;letter-spacing:.3px;">Cloud & DevOps • Case Study</div>
              <h1 style="margin:14px 0 6px;font-size:26px;line-height:1.3;">Hi {{FirstName}}, quick way to reduce spend & incidents</h1>
              <p style="margin:0 0 10px;font-size:14px;opacity:.95;">Noticed {{Company}} runs on {{Stack}} — here’s how we cut costs and improved SLOs for a similar environment in 14 days.</p>
            </td>
          </tr>

          <tr>
            <td style="padding:22px 28px 12px;font-family:Inter,Arial,sans-serif;color:${text};">
              <h2 style="margin:0 0 8px;font-size:18px;">Common bottlenecks</h2>
              <p style="margin:0 0 14px;font-size:14px;color:${sub};">Patterns we keep seeing post scale-up:</p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" class="grid">
                <tr>
                  <td style="width:50%;vertical-align:top;padding-right:8px;">
                    <ul style="margin:0 0 10px;padding-left:18px;color:${text};font-size:14px;line-height:1.6;">
                      <li>Over-provisioned compute and idle clusters</li>
                      <li>Chatty microservices causing egress spikes</li>
                      <li>Untuned autoscaling and missing HPA</li>
                    </ul>
                  </td>
                  <td style="width:50%;vertical-align:top;padding-left:8px;">
                    <ul style="margin:0 0 10px;padding-left:18px;color:${text};font-size:14px;line-height:1.6;">
                      <li>Uncached hot paths, noisy neighbors</li>
                      <li>Alert fatigue; weak runbooks</li>
                      <li>Unclear SLOs and error budgets</li>
                    </ul>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:8px 28px 8px;font-family:Inter,Arial,sans-serif;">
              <div style="border:1px solid ${border};border-radius:12px;padding:16px;background:#f9fafb;">
                <div style="font-size:12px;font-weight:800;color:${primary};letter-spacing:.3px;margin-bottom:6px;">Mini case study</div>
                <p style="margin:0 0 10px;font-size:14px;color:${text};">For a cloud-native platform handling ~2B req/month:</p>
                <ul style="margin:0;padding-left:18px;color:${text};font-size:14px;line-height:1.6;">
                  <li><b>−31% cloud bill</b> via rightsizing + autoscaling</li>
                  <li><b>−42% P1 incidents</b> with SLO + runbooks</li>
                  <li><b>+24% latency improvement</b> from caching + egress control</li>
                </ul>
                <div style="margin-top:10px;border-top:1px dashed ${border};padding-top:10px;">
                  <ol style="margin:0;padding-left:18px;font-size:13px;color:${text};line-height:1.6;">
                    <li>Cost & traffic profiling</li>
                    <li>Autoscaling + resource limits</li>
                    <li>Caching and egress policies</li>
                    <li>SLOs, alerts, and runbooks</li>
                  </ol>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td style="padding:18px 28px 10px;font-family:Inter,Arial,sans-serif;color:${text};">
              <h2 style="margin:0 0 8px;font-size:18px;">Offer for {{Company}}</h2>
              <p style="margin:0 0 12px;font-size:14px;color:${sub};">Happy to share a 1-page infra teardown and a 2-week quick-win plan tailored to your stack.</p>
              <div>
                <a href="{{BookingLink}}" style="display:inline-block;background:${primary};color:#ffffff;text-decoration:none;font-size:14px;line-height:20px;padding:12px 18px;border-radius:10px;font-weight:700;">Book an architecture review</a>
              </div>
              <p style="margin:14px 0 0;font-size:12px;line-height:18px;color:${sub};">Or reply "send teardown" and I’ll email it.</p>
            </td>
          </tr>

          <tr>
            <td style="padding:20px 28px 24px;font-family:Inter,Arial,sans-serif;border-top:1px solid ${border};color:${sub};">
              <p style="margin:0 0 4px;font-size:12px;">Best,<br/>{{YourName}} — {{Title}}</p>
              <p style="margin:0;font-size:12px;">{{Website}} • {{Calendly}}</p>
            </td>
          </tr>
        </table>
      </td>
      <td></td>
    </tr>
  </table>
</body>
</html>`;
}

function coldOutreachCybersecurity() {
  const primary = "#ef4444"; // Red-500
  const dark = "#991b1b"; // Red-900
  const text = "#111827"; // Gray-900
  const sub = "#6b7280"; // Gray-500
  const border = "#e5e7eb"; // Gray-200
  const bg = "#fef2f2"; // Red-50
  const badge = "#fee2e2"; // Red-100
  return `<!doctype html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <title>Reduce Risk, Tighten Posture — 14-Day Plan</title>
  <style>
    @media (max-width: 600px) {
      .container { padding: 0 16px !important; }
      .card { border-radius: 12px !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background:${bg};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${bg};">
    <tr>
      <td></td>
      <td class="container" style="display:block;max-width:680px;margin:28px auto;padding:0 8px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" class="card" style="background:#fff;border:1px solid ${border};border-radius:16px;overflow:hidden;">
          <tr>
            <td style="background:linear-gradient(135deg, ${dark}, ${primary});padding:28px;color:#fff;font-family:Inter,Arial,sans-serif;">
              <div style="display:inline-block;background:${badge};color:${dark};padding:6px 10px;border-radius:20px;font-size:12px;font-weight:700;">Cybersecurity • Case Study</div>
              <h1 style="margin:14px 0 6px;font-size:26px;">Hi {{FirstName}}, quick way to close high-risk gaps</h1>
              <p style="margin:0;font-size:14px;opacity:.95;">If {{Company}} handles sensitive data, here’s a fast path to reduce risk without slowing delivery.</p>
            </td>
          </tr>
          <tr>
            <td style="padding:22px 28px 10px;font-family:Inter,Arial,sans-serif;color:${text};">
              <h2 style="margin:0 0 8px;font-size:18px;">Likely issues</h2>
              <ul style="margin:0 0 12px;padding-left:18px;font-size:14px;line-height:1.6;">
                <li>Exposed attack surface in CI/CD and cloud IAM</li>
                <li>Unpatched services; weak SBOM visibility</li>
                <li>Alert noise; missing runbooks and playbooks</li>
              </ul>
              <div style="border:1px solid ${border};border-radius:12px;padding:16px;background:#fff7f7;">
                <div style="font-size:12px;font-weight:800;color:${primary};margin-bottom:6px;">Mini case study</div>
                <ul style="margin:0;padding-left:18px;font-size:14px;line-height:1.6;">
                  <li><b>−70% critical vulns</b> in 21 days</li>
                  <li><b>24h MTTR → 3h</b> via playbooks</li>
                  <li><b>Zero sev-1</b> after IAM hardening</li>
                </ul>
              </div>
              <p style="margin:12px 0 0;font-size:14px;color:${sub};">Includes: IAM review, threat modeling, SBOM + patch SLAs, SIEM tuning.</p>
              <div>
                <a href="{{BookingLink}}" style="display:inline-block;background:${primary};color:#fff;text-decoration:none;font-size:14px;padding:12px 18px;border-radius:10px;font-weight:700;">Get a 1-page risk teardown</a>
              </div>
              <p style="margin:14px 0 0;font-size:12px;color:${sub};">Or reply "send teardown" for email.</p>
            </td>
          </tr>
          <tr>
            <td style="padding:18px 28px 22px;border-top:1px solid ${border};font-family:Inter,Arial,sans-serif;color:${sub};font-size:12px;">
              Best,<br/>{{YourName}} — {{Title}}<br/>{{Website}} • {{Calendly}}
            </td>
          </tr>
        </table>
      </td>
      <td></td>
    </tr>
  </table>
</body>
</html>`;
}

function coldOutreachFintech() {
  const primary = "#16a34a"; // Green-600
  const accent = "#10b981"; // Emerald-500
  const text = "#052e16"; // Green-950
  const sub = "#065f46"; // Emerald-900
  const border = "#d1fae5"; // Emerald-200
  const bg = "#ecfdf5"; // Emerald-50
  const badge = "#d1fae5"; // Emerald-200
  return `<!doctype html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <title>Lift Conversion, Reduce Fraud — 2-Week Plan</title>
  <style>
    @media (max-width: 600px) { .container{padding:0 16px!important;} .card{border-radius:12px!important;} }
  </style>
</head>
<body style="margin:0;padding:0;background:${bg};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${bg};">
    <tr>
      <td></td>
      <td class="container" style="display:block;max-width:680px;margin:28px auto;padding:0 8px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" class="card" style="background:#fff;border:1px solid ${border};border-radius:16px;overflow:hidden;">
          <tr>
            <td style="background:linear-gradient(135deg, ${primary}, ${accent});padding:28px;color:#fff;font-family:Inter,Arial,sans-serif;">
              <div style="display:inline-block;background:${badge};color:${primary};padding:6px 10px;border-radius:20px;font-size:12px;font-weight:800;">Fintech & Payments</div>
              <h1 style="margin:14px 0 6px;font-size:26px;">Hi {{FirstName}}, quick wins for KYC, auth & conversion</h1>
              <p style="margin:0;font-size:14px;opacity:.95;">For {{Company}}, we can tune signup flow, risk rules, and settlement UX.</p>
            </td>
          </tr>
          <tr>
            <td style="padding:22px 28px 10px;font-family:Inter,Arial,sans-serif;color:${text};">
              <h2 style="margin:0 0 8px;font-size:18px;">Where we help</h2>
              <ul style="margin:0 0 12px;padding-left:18px;font-size:14px;line-height:1.6;">
                <li>Reduce drop-off in KYC/AML with progressive steps</li>
                <li>Cut fraud with dynamic risk and device signals</li>
                <li>Speed payouts with clear settlement timelines</li>
              </ul>
              <div style="border:1px solid ${border};border-radius:12px;padding:16px;background:#f0fdf4;">
                <div style="font-size:12px;font-weight:900;color:${primary};margin-bottom:6px;">Mini case study</div>
                <ul style="margin:0;padding-left:18px;font-size:14px;line-height:1.6;">
                  <li><b>+19% signup completion</b> post KYC revamp</li>
                  <li><b>−28% chargebacks</b> via risk tuning</li>
                  <li><b>−36% support tickets</b> on settlement clarity</li>
                </ul>
              </div>
              <div style="margin-top:12px;">
                <a href="{{BookingLink}}" style="display:inline-block;background:${primary};color:#fff;text-decoration:none;font-size:14px;padding:12px 18px;border-radius:10px;font-weight:800;">Review my payments funnel</a>
              </div>
              <p style="margin:14px 0 0;font-size:12px;color:${sub};">Prefer email? Reply "send teardown".</p>
            </td>
          </tr>
          <tr>
            <td style="padding:18px 28px 22px;border-top:1px solid ${border};font-family:Inter,Arial,sans-serif;color:${sub};font-size:12px;">
              Best,<br/>{{YourName}} — {{Title}}<br/>{{Website}} • {{Calendly}}
            </td>
          </tr>
        </table>
      </td>
      <td></td>
    </tr>
  </table>
</body>
</html>`;
}

function coldOutreachAI() {
  const primary = "#7c3aed"; // Violet-600
  const accent = "#06b6d4"; // Cyan-500
  const text = "#111827"; // Gray-900
  const sub = "#6b7280"; // Gray-500
  const border = "#e5e7eb"; // Gray-200
  const bg = "#f5f3ff"; // Violet-50
  const badge = "#ede9fe"; // Violet-100
  return `<!doctype html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <title>Accelerate Adoption — AI/ML UX Quick Wins</title>
  <style>@media (max-width:600px){.container{padding:0 16px!important}.card{border-radius:12px!important}}</style>
</head>
<body style="margin:0;padding:0;background:${bg};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${bg};">
    <tr>
      <td></td>
      <td class="container" style="display:block;max-width:680px;margin:28px auto;padding:0 8px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" class="card" style="background:#fff;border:1px solid ${border};border-radius:16px;overflow:hidden;">
          <tr>
            <td style="background:linear-gradient(135deg, ${primary}, ${accent});padding:28px;color:#fff;font-family:Inter,Arial,sans-serif;">
              <div style="display:inline-block;background:${badge};color:${primary};padding:6px 10px;border-radius:20px;font-size:12px;font-weight:800;">AI/ML Platforms</div>
              <h1 style="margin:14px 0 6px;font-size:26px;">Hi {{FirstName}}, ship clearer value from day one</h1>
              <p style="margin:0;font-size:14px;opacity:.95;">For {{Company}}, we can surface aha moments and guardrails to lift adoption.</p>
            </td>
          </tr>
          <tr>
            <td style="padding:22px 28px 10px;font-family:Inter,Arial,sans-serif;color:${text};">
              <h2 style="margin:0 0 8px;font-size:18px;">Common gaps</h2>
              <ul style="margin:0 0 12px;padding-left:18px;font-size:14px;line-height:1.6;">
                <li>Unclear guidance on prompts, datasets, or evaluation</li>
                <li>Cold start friction; hidden capabilities</li>
                <li>Governance and safety not visible in UX</li>
              </ul>
              <div style="border:1px solid ${border};border-radius:12px;padding:16px;background:#faf5ff;">
                <div style="font-size:12px;font-weight:900;color:${primary};margin-bottom:6px;">Mini case study</div>
                <ul style="margin:0;padding-left:18px;font-size:14px;line-height:1.6;">
                  <li><b>+34% weekly active</b> adding guided prompts</li>
                  <li><b>−22% failures</b> with validations & examples</li>
                  <li><b>+18% expansion</b> highlighting premium features</li>
                </ul>
              </div>
              <div style="margin-top:12px;">
                <a href="{{BookingLink}}" style="display:inline-block;background:${primary};color:#fff;text-decoration:none;font-size:14px;padding:12px 18px;border-radius:10px;font-weight:800;">Share a UX teardown</a>
              </div>
              <p style="margin:14px 0 0;font-size:12px;color:${sub};">Or reply "send teardown" and I’ll email it.</p>
            </td>
          </tr>
          <tr>
            <td style="padding:18px 28px 22px;border-top:1px solid ${border};font-family:Inter,Arial,sans-serif;color:${sub};font-size:12px;">
              Best,<br/>{{YourName}} — {{Title}}<br/>{{Website}} • {{Calendly}}
            </td>
          </tr>
        </table>
      </td>
      <td></td>
    </tr>
  </table>
</body>
</html>`;
}

function coldOutreachMarketplaces() {
  const primary = "#ea580c"; // Orange-600
  const accent = "#f59e0b"; // Amber-500
  const text = "#1f2937"; // Gray-800
  const sub = "#6b7280"; // Gray-500
  const border = "#fde68a"; // Amber-200
  const bg = "#fffbeb"; // Amber-50
  const badge = "#fef3c7"; // Amber-100
  return `<!doctype html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <title>Fix Liquidity Loops — 2-Week Wins</title>
  <style>@media (max-width:600px){.container{padding:0 16px!important}.card{border-radius:12px!important}}</style>
</head>
<body style="margin:0;padding:0;background:${bg};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${bg};">
    <tr>
      <td></td>
      <td class="container" style="display:block;max-width:680px;margin:28px auto;padding:0 8px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" class="card" style="background:#fff;border:1px solid ${border};border-radius:16px;overflow:hidden;">
          <tr>
            <td style="background:linear-gradient(135deg, ${primary}, ${accent});padding:28px;color:#1f2937;font-family:Inter,Arial,sans-serif;">
              <div style="display:inline-block;background:${badge};color:${primary};padding:6px 10px;border-radius:20px;font-size:12px;font-weight:900;">Marketplaces</div>
              <h1 style="margin:14px 0 6px;font-size:26px;">Hi {{FirstName}}, 2-week plan to lift liquidity</h1>
              <p style="margin:0;font-size:14px;opacity:.95;">Targeted nudges and supply-demand matching for {{Company}}.</p>
            </td>
          </tr>
          <tr>
            <td style="padding:22px 28px 10px;font-family:Inter,Arial,sans-serif;color:${text};">
              <h2 style="margin:0 0 8px;font-size:18px;">Where we focus</h2>
              <ul style="margin:0 0 12px;padding-left:18px;font-size:14px;line-height:1.6;">
                <li>Activation loops for both sides</li>
                <li>Ranking, search, and trust signals</li>
                <li>Reactivation and repeat purchase nudges</li>
              </ul>
              <div style="border:1px solid ${border};border-radius:12px;padding:16px;background:#fff7ed;">
                <div style="font-size:12px;font-weight:900;color:${primary};margin-bottom:6px;">Mini case study</div>
                <ul style="margin:0;padding-left:18px;font-size:14px;line-height:1.6;">
                  <li><b>+25% GMV</b> via ranking + promos</li>
                  <li><b>+18% seller activation</b> with better onboarding</li>
                  <li><b>−20% churn</b> with trust badges</li>
                </ul>
              </div>
              <div style="margin-top:12px;">
                <a href="{{BookingLink}}" style="display:inline-block;background:${primary};color:#fff;text-decoration:none;font-size:14px;padding:12px 18px;border-radius:10px;font-weight:900;">Review marketplace strategy</a>
              </div>
              <p style="margin:14px 0 0;font-size:12px;color:${sub};">Reply "send teardown" for email.</p>
            </td>
          </tr>
          <tr>
            <td style="padding:18px 28px 22px;border-top:1px solid ${border};font-family:Inter,Arial,sans-serif;color:${sub};font-size:12px;">
              Best,<br/>{{YourName}} — {{Title}}<br/>{{Website}} • {{Calendly}}
            </td>
          </tr>
        </table>
      </td>
      <td></td>
    </tr>
  </table>
</body>
</html>`;
}

function coldOutreachTelecom() {
  const primary = "#0ea5e9"; // Sky-500
  const accent = "#38bdf8"; // Sky-400
  const text = "#0f172a"; // Slate-900
  const sub = "#475569"; // Slate-600
  const border = "#e2e8f0"; // Slate-200
  const bg = "#f1f5f9"; // Slate-100
  const badge = "#e0f2fe"; // Sky-100
  return `<!doctype html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <title>Reduce Churn, Improve NPS — 2-Week Plan</title>
  <style>@media (max-width:600px){.container{padding:0 16px!important}.card{border-radius:12px!important}}</style>
</head>
<body style="margin:0;padding:0;background:${bg};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${bg};">
    <tr>
      <td></td>
      <td class="container" style="display:block;max-width:680px;margin:28px auto;padding:0 8px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" class="card" style="background:#fff;border:1px solid ${border};border-radius:16px;overflow:hidden;">
          <tr>
            <td style="background:linear-gradient(135deg, ${primary}, ${accent});padding:28px;color:#fff;font-family:Inter,Arial,sans-serif;">
              <div style="display:inline-block;background:${badge};color:${primary};padding:6px 10px;border-radius:20px;font-size:12px;font-weight:900;">Telecom & ISPs</div>
              <h1 style="margin:14px 0 6px;font-size:26px;">Hi {{FirstName}}, quick wins for retention & CX</h1>
              <p style="margin:0;font-size:14px;opacity:.95;">For {{Company}}, we can streamline onboarding, outage comms, and plan upgrades.</p>
            </td>
          </tr>
          <tr>
            <td style="padding:22px 28px 10px;font-family:Inter,Arial,sans-serif;color:${text};">
              <h2 style="margin:0 0 8px;font-size:18px;">Where to improve</h2>
              <ul style="margin:0 0 12px;padding-left:18px;font-size:14px;line-height:1.6;">
                <li>Outage notifications and proactive credits</li>
                <li>Self-serve troubleshooting and plan clarity</li>
                <li>Contextual upsells during peak usage</li>
              </ul>
              <div style="border:1px solid ${border};border-radius:12px;padding:16px;background:#f8fafc;">
                <div style="font-size:12px;font-weight:900;color:${primary};margin-bottom:6px;">Mini case study</div>
                <ul style="margin:0;padding-left:18px;font-size:14px;line-height:1.6;">
                  <li><b>−17% churn</b> with better comms</li>
                  <li><b>+21% NPS</b> in one quarter</li>
                  <li><b>+16% ARPU</b> from personalized upgrades</li>
                </ul>
              </div>
              <div style="margin-top:12px;">
                <a href="{{BookingLink}}" style="display:inline-block;background:${primary};color:#fff;text-decoration:none;font-size:14px;padding:12px 18px;border-radius:10px;font-weight:900;">Share CX teardown</a>
              </div>
              <p style="margin:14px 0 0;font-size:12px;color:${sub};">Reply "send teardown" to get it via email.</p>
            </td>
          </tr>
          <tr>
            <td style="padding:18px 28px 22px;border-top:1px solid ${border};font-family:Inter,Arial,sans-serif;color:${sub};font-size:12px;">
              Best,<br/>{{YourName}} — {{Title}}<br/>{{Website}} • {{Calendly}}
            </td>
          </tr>
        </table>
      </td>
      <td></td>
    </tr>
  </table>
</body>
</html>`;

function coldoutreachproblempaincasestudyled() {
  return `<!doctype html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <title>Cold outreach (problem/pain — case-study-led</title>
  <style>
    @media (max-width: 600px) {
      .container { padding: 0 16px !important; }
      .card { border-radius: 12px !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f8fafc;">
    <tr>
      <td></td>
      <td class="container" style="display:block;max-width:600px;margin:32px auto;padding:0 20px;">
        <div style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 6px -1px rgba(0,0,0,0.1);border:1px solid #e5e7eb;">
          
          <!-- Header -->
          <div style="background:linear-gradient(135deg, #4f46e5, #7c3aed);padding:32px 28px;color:#ffffff;text-align:center;">
            <div style="display:inline-block;background:rgba(255,255,255,0.15);padding:6px 12px;border-radius:20px;font-size:12px;font-weight:600;margin-bottom:16px;">
              CASE-STUDY-LED
            </div>
            <h1 style="margin:0 0 12px;font-size:26px;line-height:1.3;font-weight:700;">
              {{HEADLINE}}
            </h1>
            <p style="margin:0;font-size:16px;opacity:0.9;line-height:1.5;">
              {{SUBHEADLINE}}
            </p>
          </div>

          <!-- Content -->
          <div style="padding:32px 28px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;">
            <h2 style="margin:0 0 16px;font-size:18px;color:#1f2937;">Hi {{FIRST_NAME}},</h2>
            
            <p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:#4b5563;">
              {{OPENING_PARAGRAPH}}
            </p>

            <!-- Value Proposition -->
            <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:20px;margin:24px 0;">
              <h3 style="margin:0 0 12px;font-size:16px;color:#1f2937;font-weight:600;">{{VALUE_PROP_TITLE}}</h3>
              <p style="margin:0;font-size:14px;line-height:1.6;color:#6b7280;">
                {{VALUE_PROP_DESCRIPTION}}
              </p>
            </div>

            <p style="margin:0 0 28px;font-size:15px;line-height:1.6;color:#4b5563;">
              {{CLOSING_PARAGRAPH}}
            </p>

            <!-- CTA -->
            <div style="text-align:center;">
              <a href="{{CTA_LINK}}" style="display:inline-block;background:#4f46e5;color:#ffffff;text-decoration:none;font-size:15px;font-weight:600;padding:14px 28px;border-radius:8px;box-shadow:0 4px 14px 0 rgba(79, 70, 229, 0.39);">
                {{CTA_TEXT}}
              </a>
            </div>

            <p style="margin:24px 0 0;font-size:13px;line-height:1.5;color:#9ca3af;text-align:center;">
              {{FOLLOWUP_TEXT}}
            </p>
          </div>

          <!-- Footer -->
          <div style="background:#f9fafb;border-top:1px solid #e5e7eb;padding:20px 28px;color:#6b7280;">
            <p style="margin:0 0 4px;font-size:14px;">Best regards,</p>
            <p style="margin:0 0 2px;font-size:14px;font-weight:600;color:#1f2937;">{{YOUR_NAME}}</p>
            <p style="margin:0;font-size:13px;">{{YOUR_TITLE}} | {{COMPANY}}</p>
          </div>

        </div>
      </td>
      <td></td>
    </tr>
  </table>
</body>
</html>`;
}

function coldoutreachproblempaincasestudyledvaluefirstWebmobileappstudios() {
  return `<!doctype html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <title>Cold outreach (problem/pain, case-study-led, value-first) — Web/mobile app studios</title>
  <style>
    @media (max-width: 600px) {
      .container { padding: 0 16px !important; }
      .card { border-radius: 12px !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f8fafc;">
    <tr>
      <td></td>
      <td class="container" style="display:block;max-width:600px;margin:32px auto;padding:0 20px;">
        <div style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 6px -1px rgba(0,0,0,0.1);border:1px solid #e5e7eb;">
          
          <!-- Header -->
          <div style="background:linear-gradient(135deg, #4f46e5, #7c3aed);padding:32px 28px;color:#ffffff;text-align:center;">
            <div style="display:inline-block;background:rgba(255,255,255,0.15);padding:6px 12px;border-radius:20px;font-size:12px;font-weight:600;margin-bottom:16px;">
              WEB/MOBILE APP STUDIOS
            </div>
            <h1 style="margin:0 0 12px;font-size:26px;line-height:1.3;font-weight:700;">
              {{HEADLINE}}
            </h1>
            <p style="margin:0;font-size:16px;opacity:0.9;line-height:1.5;">
              {{SUBHEADLINE}}
            </p>
          </div>

          <!-- Content -->
          <div style="padding:32px 28px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;">
            <h2 style="margin:0 0 16px;font-size:18px;color:#1f2937;">Hi {{FIRST_NAME}},</h2>
            
            <p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:#4b5563;">
              {{OPENING_PARAGRAPH}}
            </p>

            <!-- Value Proposition -->
            <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:20px;margin:24px 0;">
              <h3 style="margin:0 0 12px;font-size:16px;color:#1f2937;font-weight:600;">{{VALUE_PROP_TITLE}}</h3>
              <p style="margin:0;font-size:14px;line-height:1.6;color:#6b7280;">
                {{VALUE_PROP_DESCRIPTION}}
              </p>
            </div>

            <p style="margin:0 0 28px;font-size:15px;line-height:1.6;color:#4b5563;">
              {{CLOSING_PARAGRAPH}}
            </p>

            <!-- CTA -->
            <div style="text-align:center;">
              <a href="{{CTA_LINK}}" style="display:inline-block;background:#4f46e5;color:#ffffff;text-decoration:none;font-size:15px;font-weight:600;padding:14px 28px;border-radius:8px;box-shadow:0 4px 14px 0 rgba(79, 70, 229, 0.39);">
                {{CTA_TEXT}}
              </a>
            </div>

            <p style="margin:24px 0 0;font-size:13px;line-height:1.5;color:#9ca3af;text-align:center;">
              {{FOLLOWUP_TEXT}}
            </p>
          </div>

          <!-- Footer -->
          <div style="background:#f9fafb;border-top:1px solid #e5e7eb;padding:20px 28px;color:#6b7280;">
            <p style="margin:0 0 4px;font-size:14px;">Best regards,</p>
            <p style="margin:0 0 2px;font-size:14px;font-weight:600;color:#1f2937;">{{YOUR_NAME}}</p>
            <p style="margin:0;font-size:13px;">{{YOUR_TITLE}} | {{COMPANY}}</p>
          </div>

        </div>
      </td>
      <td></td>
    </tr>
  </table>
</body>
</html>`;
}
}
