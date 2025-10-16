---
sidebar_position: 3
title: Technical FAQ
---

# Technical FAQ

Technical questions about features, compatibility, and functionality.

## System Requirements

### What are the minimum requirements?

**For Web App:**
- Modern browser (Chrome, Firefox, Safari, Edge)
- Internet connection
- JavaScript enabled
- Cookies enabled

**For Desktop App:**
- Windows 10+, macOS 10.14+, or Linux (Ubuntu 18.04+)
- 4 GB RAM minimum
- 500 MB disk space
- Internet connection

**For Mobile App:**
- iOS 14+ or Android 9+
- 100 MB free space
- Internet connection

### Which browsers are supported?

**Fully Supported:**
- Chrome 110+ ✅ (Recommended)
- Firefox 110+ ✅
- Safari 16+ ✅
- Edge 110+ ✅

**Limited Support:**
- Older versions (some features may not work)
- Internet Explorer (not supported)

### Do you support older browsers?

We support browsers from the last 2 years. Older browsers may:
- Have reduced functionality
- Display incorrectly
- Performance issues
- Security vulnerabilities

**Recommendation:** Use the latest browser version.

## Features

### Can I work offline?

**Desktop App:**
- ✅ Limited offline access
- View cached projects
- Create/edit tasks
- Auto-sync when online

**Mobile App:**
- ✅ Full offline mode
- Download projects for offline
- All changes sync later

**Web App:**
- ❌ Requires internet
- Use desktop/mobile for offline

### Does it work on multiple devices?

Yes! Access from:
- Multiple computers
- Desktop app + web
- Mobile devices
- All devices sync in real-time

### Can I use it on my phone?

Yes! We have native apps:
- **iOS**: iPhone & iPad (App Store)
- **Android**: Phones & tablets (Google Play)

Features match desktop version.

### Is there a dark mode?

Yes! Three options:
- **Light mode**: Traditional white
- **Dark mode**: Easy on eyes
- **Auto**: Follows system preference

Set in Settings → Appearance → Theme

### Can I customize the interface?

**All Plans:**
- Choose theme (light/dark)
- Adjust layout density
- Customize dashboard
- Create custom views

**Enterprise:**
- Custom branding
- Custom colors
- Custom domain
- Custom CSS

### Does it support multiple languages?

Currently supported:
- English (US/UK)
- Spanish
- French
- German
- Portuguese
- Japanese
- More coming soon!

Set in Settings → Preferences → Language

## Data & Storage

### Where is my data stored?

**Primary locations:**
- United States (default)
- European Union
- United Kingdom
- Canada
- Australia
- Singapore

Enterprise can choose location.

**Infrastructure:**
- AWS/Google Cloud
- SOC 2 certified
- Multiple redundancy
- Daily backups

### How secure is my data?

**Security measures:**
- AES-256 encryption at rest
- TLS 1.3 encryption in transit
- Two-factor authentication
- Regular security audits
- SOC 2 Type II certified
- GDPR compliant

See [Security page](/docs/advanced/security) for details.

### Can I export all my data?

Yes! Export formats:
- **JSON**: Complete data dump
- **CSV**: Tasks, projects, time entries
- **PDF**: Reports
- **Excel**: Formatted reports

Go to Settings → Export Data

### What happens if I delete something?

**Tasks/Projects:**
- Soft delete (goes to trash)
- Recoverable for 30 days
- Permanent delete after 30 days

**Files:**
- Soft delete initially
- Recoverable for 30 days
- Retained in backups for 90 days

**Account:**
- Data retained for 90 days
- Permanent deletion after 90 days
- Can request immediate deletion

### How long are backups kept?

**Backups:**
- Daily backups
- Retained for 90 days
- Multiple geographic locations
- Point-in-time recovery

**Enterprise:**
- Custom retention periods
- More frequent backups
- Faster recovery

## Integrations

### What integrations are available?

**Communication:**
- Slack, Microsoft Teams, Discord

**Email:**
- Gmail, Outlook, Apple Mail

**Development:**
- GitHub, GitLab, Bitbucket, Jira

**Calendar:**
- Google Calendar, Outlook Calendar

**Storage:**
- Google Drive, Dropbox, OneDrive

**And 100+ more!**

See [Integrations page](/docs/features/integrations) for full list.

### Do integrations cost extra?

**Free Plan:**
- Basic integrations included

**Professional:**
- All integrations included
- No extra cost

**Enterprise:**
- All integrations
- Custom integrations available

### Can you build a custom integration?

Yes! Several options:
- **API**: Build yourself
- **Webhooks**: Real-time events
- **Zapier**: No-code integration
- **Custom**: We build it (Enterprise)

See [API Documentation](/docs/api/overview)

## API

### Is there an API?

Yes! Full REST API available:
- Create/read/update/delete
- All data accessible
- Real-time webhooks
- GraphQL also available

Documentation: [API Overview](/docs/api/overview)

### Are there rate limits?

Yes, by plan:

```
Free: 1,000 requests/hour
Professional: 10,000 requests/hour
Enterprise: Custom (higher limits)
```

Response headers show remaining quota.

### Which programming languages are supported?

Our API works with any language. Official SDKs:
- JavaScript/TypeScript
- Python
- Ruby
- PHP
- Go

Community SDKs also available.

### Can I use webhooks?

Yes! Webhooks notify your server when events occur:
- Task created/updated/completed
- Comment added
- Project status changed
- And more...

See [Webhook Documentation](/docs/api/webhooks)

## Mobile Apps

### Is the mobile app free?

Yes! Included with all plans:
- Free plan: Mobile app included
- Professional: Mobile app included
- Enterprise: Mobile app included

### Does it have all features?

Yes! The mobile app includes:
- All task management
- Projects & boards
- Comments & collaboration
- File uploads
- Notifications
- Offline mode
- And more!

### Can I scan documents?

Yes! Mobile app can:
- Take photos
- Scan documents
- Upload directly to tasks
- OCR text recognition (coming soon)

### Does it work with Apple Watch/Android Wear?

**iOS:**
- Apple Watch app available
- View tasks
- Quick actions
- Notifications

**Android:**
- Wear OS support
- View tasks
- Notifications

## Performance

### Why is it slow?

**Common causes:**
- Slow internet connection
- Old browser version
- Too many browser tabs
- Large projects (1000+ tasks)
- Heavy browser extensions

**Solutions:**
- Check internet speed
- Update browser
- Close unused tabs
- Archive old projects
- Disable extensions
- Try desktop app

See [Performance Guide](/docs/advanced/performance)

### How can I improve performance?

**Best practices:**
- Use latest browser
- Enable hardware acceleration
- Clear cache regularly
- Archive completed projects
- Use desktop app
- Compress large files

### What's the uptime?

**Current SLA:**
- Target: 99.9% uptime
- Actual: 99.95% (last 12 months)
- Max downtime: ~4 hours/year
- Actual: ~2 hours/year

Check [Status Page](https://status.example.com)

## Troubleshooting

### I can't log in!

**Try these steps:**
1. Check email/password spelling
2. Reset password
3. Clear browser cache
4. Try different browser
5. Disable VPN temporarily
6. Check if Caps Lock is on

Still stuck? Contact support.

### I'm not receiving emails!

**Check:**
1. Spam/junk folder
2. Email settings in app
3. Email address is correct
4. Our domain not blocked

**Add to safe senders:**
- notifications@example.com
- support@example.com

### Files won't upload!

**Possible causes:**
- File too large (>100 MB)
- Poor connection
- Browser issue
- Storage limit reached

**Try:**
- Compress file
- Check file size
- Try different browser
- Check storage quota

### The app keeps crashing!

**Desktop App:**
1. Restart the app
2. Update to latest version
3. Clear app cache
4. Reinstall if needed

**Mobile App:**
1. Force close app
2. Update app
3. Restart device
4. Reinstall if needed

**Web App:**
1. Refresh page (Cmd/Ctrl + R)
2. Clear browser cache
3. Try incognito mode
4. Try different browser

## Privacy & Compliance

### Are you GDPR compliant?

Yes! We comply with GDPR:
- Data portability
- Right to be forgotten
- Data processing agreements
- Privacy by design
- Consent management
- Breach notification

### Are you HIPAA compliant?

Yes! For healthcare:
- Business Associate Agreement (BAA)
- Encryption
- Audit logs
- Access controls
- Enterprise plan required

### Do you sell my data?

**Never!** We:
- ❌ Don't sell data
- ❌ Don't mine data for ads
- ❌ Don't share with third parties
- ✅ Only use for service delivery
- ✅ You own your data

### Can I request my data?

Yes! Under GDPR/CCPA:
1. Email privacy@example.com
2. Request data export
3. Receive within 30 days
4. Includes all your data

Or export directly in Settings.

## Advanced Features

### What's the API rate limit?

**By plan:**
```
Free: 1,000 req/hour
Professional: 10,000 req/hour
Enterprise: 100,000+ req/hour (custom)
```

### Can I self-host?

**Not currently available.**

We offer:
- Cloud hosting (recommended)
- Private cloud (Enterprise)
- Dedicated instances (Enterprise)
- Custom deployments (Enterprise)

Contact sales for options.

### Do you offer SSO?

Yes! Enterprise plan includes:
- SAML 2.0
- OAuth 2.0
- Azure AD
- Google Workspace
- Okta
- OneLogin
- Custom providers

### Can I use a custom domain?

Yes! Enterprise feature:
- help.yourcompany.com
- docs.yourcompany.com
- Custom subdomain
- SSL included
- Easy setup

## Still Have Questions?

**Get Technical Help:**
- 📧 Email: support@example.com
- 💬 Live Chat: In app
- 📚 Documentation: You're here!
- 🎥 Video Tutorials: YouTube
- 🤝 Community: Forum

**Response Times:**
- Free: Community support
- Professional: 24-48 hours
- Enterprise: &lt; 4 hours

We're here to help! 🚀

