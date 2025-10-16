---
sidebar_position: 2
title: Error Messages
---

# Error Messages

Understand and resolve common error messages.

## Authentication Errors

### "Invalid email or password"

**Meaning:** Login credentials incorrect

**Solutions:**
1. Check spelling of email and password
2. Ensure Caps Lock is off
3. Try copy-pasting password (avoid typos)
4. Use "Forgot Password?" to reset

---

### "Account locked. Too many failed attempts"

**Meaning:** Security lockout after 5 failed logins

**Solutions:**
1. Wait 15 minutes for automatic unlock
2. Use "Forgot Password?" to reset immediately
3. Contact support if urgent

---

### "Two-factor authentication required"

**Meaning:** 2FA enabled but code not provided

**Solutions:**
1. Open authenticator app
2. Enter 6-digit code
3. If lost, use backup codes
4. Contact support if no access

---

### "Session expired. Please log in again"

**Meaning:** Been logged in too long (security timeout)

**Solutions:**
1. Click "Log In" button
2. Re-enter credentials
3. Check "Keep me logged in" for longer sessions

---

### "Invalid reset token or token expired"

**Meaning:** Password reset link is old (> 24 hours)

**Solutions:**
1. Request new password reset
2. Use link within 24 hours
3. Check you're using latest email

## Permission Errors

### "You don't have permission to perform this action"

**Meaning:** Insufficient access rights

**Solutions:**
1. Check your role:
   - Guest: Very limited
   - Member: Basic access
   - Admin: Full access
2. Contact workspace owner or admin
3. Request permission elevation

---

### "This project is private"

**Meaning:** You don't have access to this project

**Solutions:**
1. Ask project owner to invite you
2. Request access via share link
3. Check if you were removed by mistake

---

### "You can only view this resource"

**Meaning:** Read-only access, cannot edit

**Solutions:**
1. Request edit permissions from project admin
2. Comment instead of editing
3. Create your own copy (if allowed)

## File Upload Errors

### "File too large. Maximum size is 100 MB"

**Meaning:** File exceeds upload limit

**Solutions:**
1. Compress the file
2. Split into multiple files
3. Use external hosting (Google Drive, Dropbox)
4. Share link instead of uploading

---

### "File type not supported"

**Meaning:** File type is blocked (usually executables)

**Solutions:**
1. Compress into .zip file
2. Convert to supported format
3. Upload to external storage and share link

---

### "Storage quota exceeded"

**Meaning:** Workspace storage is full

**Check current usage:**
```
Settings → Storage
Free: 2 GB
Professional: 100 GB
```

**Solutions:**
1. Delete old files
2. Remove large attachments
3. Archive old projects
4. Upgrade plan for more storage

---

### "Upload failed. Please try again"

**Meaning:** Network or server issue during upload

**Solutions:**
1. Check internet connection
2. Retry upload
3. Try smaller file first
4. Use desktop app (more reliable)
5. Try different browser

## Network Errors

### "Connection lost. Reconnecting..."

**Meaning:** Internet connection interrupted

**Solutions:**
1. Check WiFi/ethernet connection
2. Toggle airplane mode (mobile)
3. Restart router
4. Try mobile hotspot
5. Contact ISP if persistent

---

### "Failed to connect to server"

**Meaning:** Can't reach our servers

**Solutions:**
1. Check [status page](https://status.example.com)
2. Try different network
3. Disable VPN temporarily
4. Check firewall settings
5. Wait and retry (may be temporary)

---

### "Request timeout"

**Meaning:** Server didn't respond in time

**Solutions:**
1. Slow connection - try again
2. Check internet speed (minimum 1 Mbps)
3. Try when network is less busy
4. Use wired connection instead of WiFi

## API Errors

### "401 Unauthorized"

**Meaning:** Invalid or missing API key

**Solutions:**
```javascript
// Correct format
headers: {
  'Authorization': 'Bearer YOUR_API_KEY'
}

// Check:
1. API key is correct
2. Not expired
3. Proper format
4. Correct header name
```

---

### "403 Forbidden"

**Meaning:** API key lacks required permissions

**Solutions:**
1. Check API key permissions
2. Generate new key with correct permissions
3. Contact admin for proper access

---

### "404 Not Found"

**Meaning:** Resource doesn't exist

**Solutions:**
```javascript
// Common causes:
1. Wrong ID in URL
2. Resource was deleted
3. Typo in endpoint
4. Wrong API version

// Example correct URL:
https://api.example.com/v1/tasks/TASK-123
```

---

### "429 Too Many Requests"

**Meaning:** Rate limit exceeded

**Rate limits:**
```
Free: 1,000 requests/hour
Professional: 10,000 requests/hour
Enterprise: Custom limits

Response headers:
X-RateLimit-Remaining: 0
X-RateLimit-Reset: 1634234567
```

**Solutions:**
1. Wait for reset time (shown in header)
2. Implement exponential backoff
3. Cache responses
4. Use webhooks instead of polling
5. Upgrade for higher limits

---

### "500 Internal Server Error"

**Meaning:** Something wrong on our end

**Solutions:**
1. Not your fault - server issue
2. Try again in a few minutes
3. Check [status page](https://status.example.com)
4. Contact support if persists
5. We're likely already working on it

## Validation Errors

### "This field is required"

**Meaning:** Required information missing

**Solutions:**
1. Fill in the marked field
2. Check for empty fields
3. Ensure all required (*) fields completed

---

### "Invalid email address"

**Meaning:** Email format is incorrect

**Examples:**
```
❌ johnemail.com (missing @)
❌ john@email (missing domain)
❌ @email.com (missing username)
✅ john@email.com (correct)
```

---

### "Password must be at least 12 characters"

**Meaning:** Password too short

**Requirements:**
```
Minimum: 12 characters
Must include:
  ✓ Uppercase letter (A-Z)
  ✓ Lowercase letter (a-z)
  ✓ Number (0-9)
  ✓ Special character (!@#$%^&*)
```

**Tip:** Use a password manager

---

### "This name is already taken"

**Meaning:** Duplicate workspace/project name

**Solutions:**
1. Choose different name
2. Add number or date (e.g., "Project 2025")
3. Use more specific name

---

### "Invalid date format"

**Meaning:** Date not in expected format

**Expected formats:**
```
MM/DD/YYYY (US)
DD/MM/YYYY (EU)
YYYY-MM-DD (ISO)

Examples:
10/14/2025
14/10/2025
2025-10-14
```

## Sync Errors

### "Sync failed. Changes saved locally"

**Meaning:** Changes saved on device but not synced to cloud

**Solutions:**
1. Check internet connection
2. Manual sync: Pull down to refresh
3. Wait and auto-retry
4. Don't close app until synced

---

### "Conflict detected. Please refresh"

**Meaning:** Someone else edited same item

**Solutions:**
1. Refresh page
2. Copy your changes (if needed)
3. Apply changes again
4. Use collaboration features to avoid conflicts

---

### "Offline mode. Changes will sync when online"

**Meaning:** No internet, working offline

**What happens:**
1. Changes queued locally
2. Auto-sync when connection restored
3. Keep app open for sync
4. Check sync icon for status

## Integration Errors

### "Failed to connect to Slack"

**Meaning:** Slack integration not working

**Solutions:**
1. Reconnect integration
2. Check Slack workspace permissions
3. Verify bot invited to channel
4. Try disconnecting and reconnecting

---

### "GitHub authentication failed"

**Meaning:** GitHub connection lost

**Solutions:**
1. Revoke and reconnect
2. Check GitHub permissions
3. Generate new personal access token
4. Verify repository access

---

### "Calendar sync error"

**Meaning:** Can't sync with calendar

**Solutions:**
1. Reauthorize calendar access
2. Check calendar app permissions
3. Verify correct calendar selected
4. Try disconnecting and reconnecting

## Payment Errors

### "Payment failed"

**Meaning:** Card charge unsuccessful

**Common reasons:**
1. Insufficient funds
2. Expired card
3. Incorrect billing address
4. Bank declined transaction
5. International transaction blocked

**Solutions:**
1. Update payment method
2. Contact your bank
3. Try different card
4. Use PayPal alternative

---

### "Invalid card number"

**Meaning:** Card number format incorrect

**Check:**
```
✓ Correct number of digits
✓ No typos
✓ No spaces (we add them)
✓ Card not expired
```

---

### "Subscription expired"

**Meaning:** Payment failed and grace period ended

**Solutions:**
1. Update payment method
2. Settings → Billing → Update Card
3. Contact billing@example.com if urgent
4. We'll restore access upon payment

## Unknown Errors

### "Something went wrong. Please try again"

**Meaning:** Generic error (we're not sure what happened)

**Solutions:**
1. Refresh page
2. Try again
3. Clear cache
4. Try different browser
5. Contact support with details:
   - What you were doing
   - Exact error message
   - Time it occurred
   - Browser/device info

---

### "Oops! An unexpected error occurred"

**Meaning:** Rare, unforeseen error

**What to do:**
1. Note what you were doing
2. Take screenshot if possible
3. Refresh and try again
4. Contact support if persists

---

### Error code: ERR_XXX_XXX

**Meaning:** Specific technical error

**Contact support with:**
- Full error code
- Error message
- What triggered it
- Steps to reproduce

We can diagnose and fix!

## Browser-Specific Errors

### "Please enable JavaScript"

**Meaning:** JavaScript is disabled

**Solutions:**
```
Chrome: Settings → Privacy → Site Settings → JavaScript
Firefox: about:config → javascript.enabled → true
Safari: Preferences → Security → Enable JavaScript
```

---

### "Cookies are disabled"

**Meaning:** Browser blocking cookies

**Solutions:**
```
Chrome: Settings → Privacy → Cookies → Allow all
Firefox: Settings → Privacy → Accept cookies
Safari: Preferences → Privacy → Uncheck "Block all cookies"
```

---

### "This browser is not supported"

**Meaning:** Browser too old

**Supported:**
- Chrome 110+
- Firefox 110+
- Safari 16+
- Edge 110+

**Solution:** Update to latest version

## Getting Help

### When to Contact Support

Contact us if:
- Error persists after trying solutions
- Error blocks critical work
- Error code shown
- Unusual or confusing error
- Need immediate assistance (Enterprise)

### How to Report Errors

Include:
1. **Exact error message**
2. **What you were doing**
3. **Steps to reproduce**
4. **Screenshots** (if applicable)
5. **Browser/device info**
6. **Your account email**
7. **Time error occurred**

### Contact Methods

**Email:** support@example.com
- Include all info above
- Response: 24-48 hours (Professional)
- Response: &lt; 4 hours (Enterprise)

**Live Chat:**
- Click chat icon (bottom right)
- Available during business hours
- Quick responses for simple issues

**Emergency (Enterprise only):**
- Phone support
- Priority escalation
- Immediate assistance

## Prevention Tips

:::tip Avoid Common Errors

1. **Keep browser updated** - Latest version = fewer errors
2. **Stable internet** - Use reliable connection
3. **Save frequently** - Don't lose work
4. **Check permissions** - Know your access level
5. **Read error messages** - They usually explain the issue
6. **Try simple fixes first** - Refresh, logout/login, clear cache
7. **Don't panic** - Most errors are easily fixed

:::

---

**Remember:** Most errors are temporary and easily resolved. Try the solutions above, and contact us if you need help! 🙂

