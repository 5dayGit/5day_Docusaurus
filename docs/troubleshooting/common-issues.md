---
sidebar_position: 1
title: Common Issues
---

# Common Issues

Quick solutions to frequently encountered problems.

## Login Issues

### Can't Log In

**Problem:** Unable to access your account

**Solutions:**

1. **Check your credentials**
   ```
   ✓ Correct email address
   ✓ Correct password (case-sensitive)
   ✓ Caps Lock off
   ```

2. **Reset your password**
   - Click "Forgot Password?"
   - Enter your email
   - Check inbox for reset link
   - Create new password

3. **Clear browser cache**
   ```
   Chrome/Edge: Cmd/Ctrl + Shift + Delete
   Firefox: Cmd/Ctrl + Shift + Delete
   Safari: Cmd + Option + E
   ```

4. **Try incognito/private mode**
   - Opens without extensions
   - Fresh session
   - Rules out cache issues

5. **Disable VPN temporarily**
   - VPN may block access
   - Try without VPN
   - If works, whitelist our domain

### Two-Factor Authentication Problems

**Problem:** Can't access 2FA code

**Solutions:**

1. **Use backup codes**
   - Saved during 2FA setup
   - Each code works once
   - Settings → Security → Backup Codes

2. **Resync authenticator app**
   - Check device time is correct
   - Sync with internet time
   - Regenerate code

3. **Contact support**
   - Email: support@example.com
   - Provide: Email, last known password
   - We'll verify identity and help

### Account Locked

**Problem:** Too many failed login attempts

**Solution:**
- Wait 15 minutes
- Account auto-unlocks
- Then try logging in
- Or reset password

## Performance Issues

### Slow Loading

**Problem:** App loads slowly

**Quick fixes:**

1. **Check internet speed**
   ```
   Visit: fast.com or speedtest.net
   Minimum: 1 Mbps
   Recommended: 10 Mbps+
   ```

2. **Clear browser cache**
   - Old cache can slow things
   - Clear and reload
   - See improvement immediately

3. **Update browser**
   - Old versions are slower
   - Update to latest
   - Chrome 110+ recommended

4. **Close other tabs**
   - Too many tabs = slow browser
   - Close unused tabs
   - Free up memory

5. **Disable extensions**
   - Extensions can slow down
   - Try incognito mode
   - Disable unnecessary extensions

6. **Try desktop app**
   - Often faster than web
   - Better caching
   - Download: example.com/download

### App Freezing or Crashing

**Problem:** App becomes unresponsive

**Solutions:**

**Web App:**
```
1. Hard refresh: Cmd/Ctrl + Shift + R
2. Clear cache
3. Try different browser
4. Check for browser updates
```

**Desktop App:**
```
1. Restart application
2. Update to latest version
3. Clear application cache:
   - Windows: %AppData%\ProductApp
   - Mac: ~/Library/Application Support/ProductApp
4. Reinstall if needed
```

**Mobile App:**
```
1. Force close app
2. Clear app cache
3. Update app
4. Restart device
5. Reinstall if needed
```

## File Upload Issues

### Can't Upload Files

**Problem:** File upload fails

**Check:**

1. **File size**
   ```
   Maximum: 100 MB per file
   Too large? Compress or split
   ```

2. **File type**
   ```
   Supported: Most common types
   Not supported: Executables (.exe, .app)
   ```

3. **Storage quota**
   ```
   Check: Settings → Storage
   Free: 2 GB
   Professional: 100 GB
   Upgrade or delete old files
   ```

4. **Internet connection**
   ```
   Upload requires stable connection
   Check connection
   Try smaller file first
   ```

**Solutions:**
- Compress large files
- Use desktop app (more reliable)
- Split into smaller files
- Check storage limits

### File Upload Stuck

**Problem:** Upload doesn't complete

**Solutions:**

1. **Wait and don't refresh**
   - Large files take time
   - Progress bar shows status
   - Wait for completion

2. **Check connection**
   - Connection dropped?
   - Upload starts over
   - Use stable connection

3. **Cancel and retry**
   - Click cancel
   - Wait a moment
   - Try again

4. **Try different browser**
   - May be browser issue
   - Chrome usually most reliable

## Notification Issues

### Not Receiving Notifications

**Problem:** Missing email or push notifications

**Email Notifications:**

1. **Check spam folder**
   - Our emails might be filtered
   - Add to safe senders
   - Move to inbox

2. **Verify email address**
   ```
   Settings → Profile
   Check email is correct
   Verify if needed
   ```

3. **Check notification settings**
   ```
   Settings → Notifications
   Ensure not set to "Off"
   Check specific event settings
   ```

4. **Add to safe senders**
   ```
   Add these to contacts:
   - notifications@example.com
   - support@example.com
   ```

**Push Notifications:**

1. **Check app permissions**
   ```
   iOS: Settings → Product → Notifications → Allow
   Android: Settings → Apps → Product → Notifications → Enabled
   ```

2. **Check in-app settings**
   ```
   Settings → Notifications
   Enable push notifications
   Choose notification types
   ```

3. **Reinstall app**
   - Sometimes fixes permission issues
   - Won't lose data
   - Log back in

### Too Many Notifications

**Problem:** Notification overload

**Solutions:**

1. **Switch to daily digest**
   ```
   Settings → Notifications
   Email: Daily digest
   Reduces email volume
   ```

2. **Mute projects**
   ```
   Project → Settings → Mute
   No notifications from that project
   Still can view manually
   ```

3. **Configure Do Not Disturb**
   ```
   Settings → Notifications → Quiet Hours
   Set: 10 PM - 8 AM
   Weekend: All day
   ```

4. **Adjust notification types**
   ```
   Turn off:
   - Every task completion
   - Low priority updates
   
   Keep on:
   - Mentions
   - Assignments
   - High priority
   ```

## Search Issues

### Search Not Working

**Problem:** Can't find items

**Solutions:**

1. **Check spelling**
   - Typos prevent matches
   - Try different terms
   - Use simpler keywords

2. **Remove filters**
   - Filters may be too restrictive
   - Clear all filters
   - Try search again

3. **Check archived items**
   ```
   Include archived: Yes
   May be in archived projects
   ```

4. **Wait for indexing**
   - New items index quickly
   - Usually instant
   - Rare delays up to 1 minute

5. **Use advanced search**
   ```
   Click search filters
   Narrow by:
   - Project
   - Date
   - Assignee
   - Labels
   ```

### Search Results Incomplete

**Problem:** Expected items missing

**Check:**

1. **Permissions**
   - Can only search what you can see
   - Private projects excluded
   - Ask admin for access

2. **Date range**
   - Default: Last 90 days
   - Expand date range
   - Try "All time"

3. **Deleted items**
   - Deleted items don't appear
   - Check trash folder
   - Restore if needed

## Integration Issues

### Slack Integration Not Working

**Problem:** Slack notifications not appearing

**Solutions:**

1. **Reconnect integration**
   ```
   Settings → Integrations → Slack
   Disconnect
   Reconnect
   Authorize again
   ```

2. **Check channel permissions**
   - Bot needs channel access
   - Invite bot to channel
   - /invite @ProductBot

3. **Verify notification settings**
   ```
   Which events to send?
   Which channel?
   Settings correct?
   ```

4. **Check Slack workspace**
   - App approved by admin?
   - Enterprise workspaces may block

### GitHub Integration Issues

**Problem:** Commits not linking

**Solutions:**

1. **Check commit message format**
   ```
   Correct: "Fix bug #TASK-123"
   Correct: "Update UI TASK-456"
   Correct: "#789 Add feature"
   
   Must include task ID
   ```

2. **Verify repository connection**
   ```
   Settings → Integrations → GitHub
   Repository connected?
   Permissions granted?
   ```

3. **Refresh connection**
   - Disconnect GitHub
   - Reconnect
   - Reauthorize access

### Calendar Sync Issues

**Problem:** Tasks not appearing in calendar

**Solutions:**

1. **Check sync settings**
   ```
   Settings → Integrations → Calendar
   What syncs: Tasks with due dates
   Calendar: Correct one selected?
   ```

2. **Refresh calendar**
   - May take a few minutes
   - Click refresh in calendar app
   - Check "Product" calendar visible

3. **Check task due dates**
   - Only tasks with due dates sync
   - Add due dates to tasks
   - Should appear in minutes

## Mobile App Issues

### App Won't Sync

**Problem:** Changes not syncing

**Solutions:**

1. **Check connection**
   ```
   WiFi or mobile data on?
   Connection stable?
   Try toggling airplane mode
   ```

2. **Force sync**
   - Pull down to refresh
   - Or Settings → Sync Now
   - Wait for completion

3. **Check storage**
   - Device storage full?
   - Free up space
   - Try syncing again

4. **Reinstall app**
   - Last resort
   - Won't lose cloud data
   - Log back in to sync

### Battery Drain

**Problem:** App using too much battery

**Solutions:**

1. **Disable background sync**
   ```
   App Settings → Background Sync
   Change to: WiFi only
   Or: Manual sync
   ```

2. **Reduce sync frequency**
   ```
   Every 15 minutes (default)
   Change to: Every hour
   Saves battery
   ```

3. **Disable push notifications**
   - Use email instead
   - Check app periodically
   - Significant battery savings

4. **Update app**
   - Newer versions more efficient
   - Check for updates
   - Install latest version

## Data Issues

### Missing Data

**Problem:** Tasks or projects disappeared

**Check:**

1. **Archived items**
   ```
   View → Show Archived
   May have been archived
   Restore if needed
   ```

2. **Trash/Deleted items**
   ```
   Settings → Trash
   Recoverable for 30 days
   Restore before permanent deletion
   ```

3. **Filters**
   - May be filtering out items
   - Clear all filters
   - Try again

4. **Permissions changed**
   - Lost access to project?
   - Contact project admin
   - Request access

### Data Not Saving

**Problem:** Changes not persisting

**Solutions:**

1. **Check connection**
   ```
   Stable internet required
   "Offline" indicator shown?
   Changes save when online
   ```

2. **Don't close immediately**
   - Wait for "Saved" indicator
   - Auto-save every few seconds
   - Manual save: Cmd/Ctrl + S

3. **Check permissions**
   - Do you have edit access?
   - May be view-only
   - Ask admin for permissions

4. **Browser issues**
   - Clear cache
   - Update browser
   - Try different browser

## Still Need Help?

If these solutions don't work:

### Contact Support

**Email:** support@example.com
Include:
- Description of problem
- Steps to reproduce
- Screenshots (if applicable)
- Browser/device info
- Error messages

**Live Chat:**
- Click chat icon (bottom right)
- Available during business hours
- Quick responses

**Response Times:**
- Free: 48-72 hours
- Professional: 24-48 hours
- Enterprise: &lt; 4 hours

### Check Status Page

**status.example.com**
- Current system status
- Ongoing incidents
- Scheduled maintenance
- Performance metrics

### Community Forum

**community.example.com**
- Ask other users
- Search past solutions
- Share experiences
- Community help

We're here to help! 🙂

