---
sidebar_position: 6
title: Settings
---

# Settings

Customize your workspace, profile, and preferences to match your workflow.

## Account Settings

### Profile Information
Update your personal details:

```yaml
Display Name: Sarah Johnson
Email: sarah@example.com
Phone: +1 (555) 123-4567
Time Zone: Pacific Time (US & Canada)
Language: English
```

### Profile Picture
- Upload custom image
- Use Gravatar
- Choose avatar color

### Password & Security
- Change password
- Enable two-factor authentication (2FA)
- Review active sessions
- Download account data

## Notification Settings

### Email Notifications

```yaml
Task Assignments: Instant
Comments & Mentions: Instant
Project Updates: Daily digest
Due Date Reminders: 1 day before
Weekly Summary: Monday 9 AM
```

### In-App Notifications
Choose what shows in notification center:
- ✅ Task assignments
- ✅ Comments and @mentions
- ✅ Status changes
- ❌ Every task completion
- ✅ Project updates

### Desktop Notifications
Enable browser notifications:
- New assignments
- Urgent tasks
- Mentions
- Messages

### Mobile Push Notifications
Configure mobile app alerts:
- Priority: High-priority only / All
- Quiet hours: 10 PM - 8 AM
- Vibrate: Yes / No

## Workspace Settings

### General Settings

```yaml
Workspace Name: Acme Corporation
Workspace URL: acme.example.com
Default Language: English
Date Format: MM/DD/YYYY
Time Format: 12-hour
First Day of Week: Monday
```

### Branding
- Upload logo
- Choose color scheme
- Custom domain
- Email templates

### Working Hours

```yaml
Time Zone: PST (UTC-8)
Working Days: Monday - Friday
Start Time: 9:00 AM
End Time: 5:00 PM
Breaks: 12:00 PM - 1:00 PM
```

## Privacy Settings

### Who Can See Your Profile
- Everyone in workspace
- Team members only
- Admins only

### Show Activity Status
Display when you're online:
- ✅ Show online status
- ✅ Show "typing..." indicator
- ❌ Show last active time

### Email Visibility
Who can see your email:
- Everyone
- Workspace members
- Only me

## Integrations

### Connected Apps
Link external tools:

| App | Status | Actions |
|-----|--------|---------|
| Slack | ✅ Connected | Disconnect |
| Google Calendar | ✅ Connected | Settings |
| GitHub | ❌ Not connected | Connect |
| Zoom | ✅ Connected | Refresh |

### API Access
Generate API keys:
```
Key: sk_live_abc123...
Created: Oct 1, 2025
Last used: 2 hours ago
[Regenerate] [Delete]
```

### Webhooks
Set up webhooks for:
- Task created
- Task completed
- Comment added
- Project status changed

## Billing & Subscription

### Current Plan
```
Plan: Professional
Price: $12/user/month (billed annually)
Users: 15
Next billing: Nov 1, 2025
Amount: $180
```

### Usage
```
Current Period:
Users: 15 / 20 (75%)
Storage: 42 GB / 100 GB (42%)
API Calls: 12,450 / 50,000 (25%)
```

### Payment Method
```
Visa ending in 4242
Expires: 08/2027
[Update] [Remove]
```

### Invoices
Download past invoices:
- October 2025 - $180.00 [PDF]
- September 2025 - $180.00 [PDF]
- August 2025 - $180.00 [PDF]

## Team Settings

### Default Permissions
Set defaults for new members:
- Can create projects: Yes
- Can invite members: No
- Can export data: Yes
- Can delete tasks: No

### Guest Access
Configure guest settings:
- Allow guests: Yes
- Auto-expire: After 30 days
- Limited to projects: Yes

### Team Roles
Create custom roles:
```
Role: Project Manager
Permissions:
  ✅ Create projects
  ✅ Manage tasks
  ✅ View reports
  ✅ Invite members
  ❌ Billing access
  ❌ Delete workspace
```

## Preferences

### Display Settings
```
Theme: Auto (System)
  - Light mode
  - Dark mode
  - Auto (system preference)
Density: Comfortable
  - Compact (more content)
  - Comfortable (balanced)
  - Spacious (less clutter)
Sidebar: Expanded
```

### Task Defaults
Set default values for new tasks:
```
Default View: List
Default Status: To Do
Default Priority: Medium
Show Subtasks: Collapsed
Auto-assign: No
```

### Keyboard Shortcuts
Enable/disable shortcuts:
- ✅ Global shortcuts
- ✅ Task shortcuts
- ✅ Navigation shortcuts
- ❌ Vim mode

View shortcut cheat sheet: Press `?`

## Data & Privacy

### Export Data
Download all your data:
- Tasks and comments
- Projects and files
- Time entries
- Custom fields

Format: JSON, CSV, or Excel

### Delete Account
Permanently delete your account:

:::danger Warning
This action cannot be undone!
- All your tasks will be unassigned
- Comments will remain (anonymized)
- Personal data will be deleted
:::

## Security Settings

### Two-Factor Authentication (2FA)
Add extra security layer:

1. Click **"Enable 2FA"**
2. Scan QR code with authenticator app
3. Enter verification code
4. Save backup codes

Supported apps:
- Google Authenticator
- Authy
- 1Password
- Microsoft Authenticator

### Active Sessions
Review devices with access:
```
Current Device
  Windows Desktop - Chrome
  Active now
  [This device]

iPhone 13
  Mobile App
  Active 2 hours ago
  [Sign out]

MacBook Pro
  Safari
  Active yesterday
  [Sign out]
```

### Login History
Recent login attempts:
```
Oct 14, 2025 9:15 AM - Success - Windows (Seattle, WA)
Oct 13, 2025 8:30 AM - Success - Windows (Seattle, WA)
Oct 12, 2025 6:45 PM - Failed - Unknown (Tokyo, JP) ⚠️
```

### SSO Configuration
Enterprise single sign-on:
- SAML 2.0
- OAuth 2.0
- Azure AD
- Google Workspace
- Okta

## Advanced Settings

### Labs (Beta Features)
Try experimental features:
- [ ] AI-powered task suggestions
- [x] Advanced analytics
- [ ] Voice commands
- [x] Dark mode v2

### Developer Options
For power users:
- Enable developer mode
- Show task IDs
- API playground
- Webhook logs

### Custom CSS
Add custom styling:
```css
/* Custom workspace theme */
:root {
  --primary-color: #0066cc;
  --sidebar-bg: #f5f5f5;
}
```

## Importing Data

### Import from Other Tools
Migrate from:
- Asana
- Trello
- Jira
- Monday.com
- CSV files

Steps:
1. Click **"Import Data"**
2. Select source
3. Authenticate (if needed)
4. Map fields
5. Preview and confirm
6. Start import

## Keyboard Shortcuts Reference

| Shortcut | Action |
|----------|--------|
| `?` | Show shortcuts |
| `/` | Quick search |
| `C` | Create task |
| `P` | Create project |
| `G + H` | Go to home |
| `G + P` | Go to projects |
| `G + T` | Go to tasks |
| `Cmd/Ctrl + K` | Command palette |
| `Cmd/Ctrl + ,` | Settings |

## Best Practices

:::tip Settings Tips

1. **Enable 2FA** - Protect your account
2. **Configure notifications** - Avoid overwhelm
3. **Set working hours** - Respect boundaries
4. **Review permissions** - Regular security audits
5. **Use integrations** - Connect your tools
6. **Customize views** - Match your workflow
7. **Update regularly** - Keep info current

:::

## Next Steps

- [Explore Features](../features/collaboration)
- [Set Up Integrations](../features/integrations)
- [Configure Automation](../features/automation)

