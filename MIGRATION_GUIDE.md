# 📦 Migration Guide: Simple → Enhanced Version

## Overview

This guide helps you upgrade from the Simple Tennis Billing Software (v1.0) to the Enhanced version (v2.0) without losing any data.

---

## ⚠️ Before You Start

### Backup Your Data

**IMPORTANT:** Always backup before upgrading!

```bash
# Copy your database file
copy simple_billing.db simple_billing_backup.db

# Or on Mac/Linux
cp simple_billing.db simple_billing_backup.db
```

---

## 🔄 Migration Steps

### Step 1: Install New Dependencies

The enhanced version needs one additional package:

```bash
pip install APScheduler==3.10.4
```

Or install all requirements:

```bash
pip install -r requirements.txt
```

---

### Step 2: Automatic Database Migration

When you start the enhanced version for the first time, it will automatically create the new tables:

```bash
python simple_app.py
```

The system will:
- ✅ Keep all your existing lesson data
- ✅ Keep all customer names
- ✅ Create new tables (coaches, packages, notifications, exports)
- ✅ Add new columns to existing lessons table

**You should see:**
```
 * Creating database tables...
 * Database tables created successfully
 * Running on http://0.0.0.0:5001
```

---

### Step 3: Verify Your Data

1. **Open the application:** `http://localhost:5001`

2. **Check your lessons:**
   - Go to Home page
   - All today's lessons should be there
   - Go to History page
   - All past lessons should be visible

3. **Check totals:**
   - Today's total should match
   - Month's total should match

If everything looks correct, migration was successful! ✅

---

## 🆕 Setting Up New Features

Now that your data is migrated, set up the new features:

### 1. Add Your Coaches

```
Go to Coaches page → Add each instructor:
- Name
- Email (optional)
- Phone (optional)
- Hourly Rate (for payroll)
```

### 2. Link Past Lessons to Coaches (Optional)

Since old lessons don't have coaches assigned, you can:

**Option A:** Leave them as-is (recommended)
- Old lessons show "–" for coach
- New lessons require coach selection

**Option B:** Manually update important lessons
- Go to History
- Edit each lesson
- Select the coach
- Save

### 3. Create Student Packages

For students with prepaid packages:

```
Go to Packages page → Add packages:
- Customer Name (exact match to student name in lessons)
- Package Name (e.g., "10 Class Package")
- Total Amount Paid
- Price per Class
- Start Date
- Expiry Date (optional)
```

The system will track from this point forward.

### 4. Set Up Notifications

Notifications are automatic! They trigger when:
- Package has ≤1 class remaining
- Monthly export completes
- Coach reaches milestones

No setup needed - just start using packages.

---

## 🔍 Data Compatibility

### What Stays the Same

✅ **All lesson data preserved:**
- Date, Time, Student Name
- Hours, Package field, Invoice Amount
- Created timestamps

✅ **Student names:**
- All student names from past lessons
- Available in autocomplete
- Work with new package system

✅ **Date ranges:**
- History works exactly the same
- Filtering by date unchanged
- Monthly totals calculate correctly

### What's New

🆕 **New lesson fields** (optional):
- Coach assignment
- Package deduction tracking
- Link to package if used

🆕 **New data types:**
- Coaches database
- Packages database
- Notifications database
- Export history database

---

## 📊 Excel Export Compatibility

### Old Excel Files

Your old Excel exports still work! You can:
- Import them into the enhanced version
- Same format, same columns
- New version adds "Coach" column

### New Excel Files

Enhanced version exports include:
- All old fields (Date, Time, Student, Hours, Package, Invoice)
- New field: Coach name
- Multiple sheets (Summary, Totals, Coach Hours, etc.)

**Backward Compatible:**
If you need to go back to simple version, just use the "Lessons Summary" sheet.

---

## 🔄 Rollback Procedure

If you need to go back to the simple version:

### Step 1: Restore Backup

```bash
# Stop the enhanced version (Ctrl+C)

# Restore your backup
copy simple_billing_backup.db simple_billing.db

# Or on Mac/Linux
cp simple_billing_backup.db simple_billing.db
```

### Step 2: Start Simple Version

```bash
# Go to your old simple version folder
cd path/to/old/version

# Start it
python simple_app.py
```

**Note:** You'll lose:
- New packages created
- Coach data
- Notifications
- Any lessons added in enhanced version

---

## ⚙️ Configuration Changes

### What Changed in Files

**simple_app.py:**
- Added new routes for packages, coaches, notifications
- Enhanced lesson creation with package integration
- Added scheduler initialization
- All old routes still work

**templates/simple_index.html:**
- Enhanced with package detection
- Added coach selection
- Mobile-first design
- Desktop view still identical

**templates/simple_history.html:**
- Added bottom navigation
- Mobile optimizations
- Core functionality unchanged

**New files added:**
- `models.py` - Database definitions
- `scheduler.py` - Auto-export scheduler
- `templates/packages.html` - Package management
- `templates/coaches.html` - Coach management
- `templates/notifications.html` - Notifications
- `static/css/mobile.css` - Mobile styles
- `static/js/mobile.js` - Mobile features

---

## 🐛 Common Migration Issues

### Issue: "Table already exists" error

**Cause:** Database partially migrated

**Solution:**
```bash
# Restore backup and try again
copy simple_billing_backup.db simple_billing.db
python simple_app.py
```

---

### Issue: Old lessons don't show coach

**Expected Behavior:** Old lessons show "–" for coach

**Solution:** This is normal. Only new lessons require coach selection.

If you want to add coaches to old lessons:
1. Go to History
2. Click Edit on lesson
3. Select coach
4. Save

---

### Issue: Package not working with old student names

**Cause:** Name mismatch (case-sensitive, extra spaces)

**Solution:**
1. Go to Packages page
2. Edit package
3. Copy exact student name from a lesson
4. Paste into package customer name
5. Save

---

### Issue: Monthly export didn't include old data

**Expected Behavior:** Monthly export only includes lessons from that specific month

**Solution:** 
- For all-time data, use "Export to Excel" button
- Monthly exports are month-specific by design

---

## 📈 Performance After Migration

### Database Size

Enhanced version adds minimal overhead:
- 4 new tables (small)
- 3 new columns to lessons (tiny)
- No impact on performance

### Expected Sizes (approximate):
- 100 lessons: ~50 KB
- 1,000 lessons: ~500 KB
- 10,000 lessons: ~5 MB

Still very lightweight!

### Speed

The enhanced version is optimized:
- Lazy loading for large lists
- Indexed database queries
- Efficient mobile rendering
- No slowdown expected

---

## ✅ Post-Migration Checklist

After migration, verify:

- [ ] All old lessons visible
- [ ] Today's total matches
- [ ] Month's total matches
- [ ] History page works
- [ ] Export to Excel works
- [ ] Can add new lessons
- [ ] New coaches added
- [ ] New packages added (if any)
- [ ] Mobile access works
- [ ] Bottom navigation visible
- [ ] No console errors

---

## 🎉 Migration Complete!

You've successfully upgraded to the enhanced version while keeping all your data!

### Next Steps:

1. **Read the Quick Start:** `QUICK_START_ENHANCED.md`
2. **Explore new features:** Try packages and coaches
3. **Test on mobile:** Access from phone/tablet
4. **Set up auto-export:** Runs automatically at month-end
5. **Share with team:** Show them the new features

---

## 📞 Need Help?

- Check README_ENHANCED.md for feature details
- Review QUICK_START_ENHANCED.md for usage
- Test mobile features with MOBILE_TESTING_GUIDE.md

---

## 💾 Ongoing Backups

Going forward, backup regularly:

### Weekly Backup:
```bash
copy simple_billing.db backups/simple_billing_2026-02-03.db
```

### Before Major Events:
- End of month (before auto-export)
- Before importing large Excel files
- Before bulk operations

### Automated Backups (Optional):

Create `backup.bat` (Windows):
```batch
@echo off
set today=%date:~-4,4%-%date:~-10,2%-%date:~-7,2%
copy simple_billing.db backups\simple_billing_%today%.db
echo Backup created: simple_billing_%today%.db
```

Run weekly or set up Windows Task Scheduler.

---

**Congratulations on your successful migration! 🎾**

Your tennis billing system is now enhanced with powerful new features while keeping all your historical data intact.
