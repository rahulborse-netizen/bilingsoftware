# 🎾 Enhanced Tennis Billing Software

## 🌟 What's New in This Version

This enhanced version includes **4 major new features** that transform the simple billing software into a comprehensive tennis academy management system:

1. ✨ **Automatic Monthly Excel Reports** - Automated exports at month-end
2. 📦 **Student Package/Plan Tracking** - Prepaid lesson packages with smart alerts
3. 👨‍🏫 **Coach Hour Tracking** - Daily breakdown and payroll calculations
4. 📱 **Mobile-First Design** - Optimized for phones and tablets with touch gestures

---

## 📋 Features Overview

### 1. Automatic Monthly Excel Reports 📊

**What it does:**
- Automatically generates comprehensive Excel reports at the end of each month
- Runs at 11:59 PM on the last day of every month
- Stores reports in the `exports/` folder

**Excel Report Contents:**
- **Sheet 1:** Lessons Summary (all lessons with details)
- **Sheet 2:** Daily Totals (lessons, hours, revenue per day)
- **Sheet 3:** Coach Hours (hours, lessons, earnings per coach)
- **Sheet 4:** Package Usage (lessons deducted from packages)
- **Sheet 5:** Monthly Summary (total statistics)

**Manual Export:**
- Click "Export Month" button on home page for current month
- Or use the regular "Export to Excel" for all-time data

---

### 2. Student Package/Plan Tracking 📦

**What it does:**
- Create prepaid lesson packages for students
- Automatically deduct classes when adding lessons
- Get alerts when packages are running low
- Track remaining classes and balance

**How to use:**

1. **Create a Package:**
   - Navigate to Packages page (bottom navigation)
   - Tap "ADD NEW PACKAGE"
   - Enter student name, package name, total amount, and price per class
   - System automatically calculates total classes
   - Set start date and optional expiry date
   - Save

2. **Using a Package:**
   - When adding a lesson, enter student name
   - If student has active package, it auto-detects
   - "Deduct from package" checkbox appears (auto-checked)
   - Amount auto-fills with package rate
   - After saving, package balance updates automatically

3. **Package Alerts:**
   - 🟢 Green: More than 3 classes remaining
   - 🟡 Yellow: 2-3 classes remaining
   - 🔴 Red: 1 class remaining (ALERT!)
   - Red banner appears on home page when package has ≤1 class

4. **Renewing Packages:**
   - Go to Packages page
   - Click "Renew" on any package
   - Form opens with student name pre-filled
   - Create new package for the student

---

### 3. Coach/Instructor Hour Tracking 👨‍🏫

**What it does:**
- Manage multiple coaches/instructors
- Track hours worked per coach
- View daily breakdown of lessons and hours
- Calculate earnings based on hourly rate

**How to use:**

1. **Add a Coach:**
   - Navigate to Coaches page (bottom navigation)
   - Tap "ADD NEW COACH"
   - Enter name, email (optional), phone (optional)
   - Set hourly rate for payroll calculations
   - Save

2. **Assign Coach to Lesson:**
   - When adding a lesson, select coach from dropdown
   - Coach selection is optional but recommended
   - Hours automatically count toward coach's monthly total

3. **View Coach Statistics:**
   - Go to Coaches page
   - See monthly totals: Hours, Lessons, Earnings
   - Click "Daily Breakdown" for detailed view
   - Shows date-by-date breakdown with totals

4. **Edit Coach Details:**
   - Click "Edit" on coach card
   - Modify name, contact, hourly rate, or status
   - Changes apply immediately

---

### 4. Mobile-First Responsive Design 📱

**What it does:**
- Optimized for phones and tablets
- Large touch-friendly buttons (100px height)
- Bottom navigation bar (like Instagram)
- Card-based layouts on mobile
- Swipe gestures for quick actions
- Touch feedback and haptic vibration

**Mobile Features:**

1. **Bottom Navigation:**
   - 🏠 Home - Dashboard with today's lessons
   - 📦 Packages - Manage student packages
   - 👨‍🏫 Coaches - View coach hours
   - 🔔 Alerts - Notifications (with badge count)
   - 📊 History - View all lessons

2. **Floating Add Button:**
   - Always-visible green + button
   - Quick access to add lessons
   - Only on mobile (hidden on desktop)

3. **Swipe Gestures:**
   - Swipe left on lesson card → Delete
   - Swipe right on lesson card → Edit
   - Pull down from top → Refresh page
   - Long press (800ms) → Quick actions menu

4. **Card-Based Layouts:**
   - Mobile shows lessons as cards (not tables)
   - Large, tappable elements
   - Clear visual hierarchy
   - Easy to read on small screens

5. **Touch Optimizations:**
   - All buttons minimum 60px height
   - Forms use large inputs (65px)
   - Haptic feedback on interactions
   - Visual tap feedback
   - No horizontal scrolling needed

---

## 🚀 Getting Started

### Installation

1. **Install Dependencies:**
```bash
pip install -r requirements.txt
```

2. **Initialize Database:**
```bash
python simple_app.py
```
The database will be created automatically with all new tables.

3. **Access the Application:**
- On the same computer: `http://localhost:5001`
- From mobile device: `http://[YOUR_IP]:5001`
  - Find your IP: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
  - Example: `http://192.168.1.100:5001`

### First-Time Setup

1. **Add Coaches:**
   - Go to Coaches page
   - Add all your instructors
   - Set their hourly rates

2. **Create First Package (Optional):**
   - Go to Packages page
   - Create a test package for a student

3. **Add First Lesson:**
   - Go to Home page
   - Click "ADD NEW LESSON" or floating + button
   - Fill in all details
   - Select a coach
   - Save

---

## 📱 Mobile Setup

### Accessing from Phone/Tablet

1. **Connect to Same WiFi:**
   - Ensure mobile device and server are on same network

2. **Find Server IP Address:**
   - Windows: Open Command Prompt, type `ipconfig`
   - Mac/Linux: Open Terminal, type `ifconfig`
   - Look for IPv4 address (e.g., 192.168.1.100)

3. **Open in Mobile Browser:**
   - Open Safari (iOS) or Chrome (Android)
   - Enter: `http://[YOUR_IP]:5001`
   - Bookmark for quick access

4. **Add to Home Screen (Recommended):**
   - iOS Safari: Tap Share → Add to Home Screen
   - Android Chrome: Menu → Add to Home Screen
   - App icon will appear like a native app

---

## 💡 Usage Tips

### For Daily Use

1. **Morning:**
   - Check home page for today's schedule
   - Review any package expiry alerts
   - Add scheduled lessons for the day

2. **During Lessons:**
   - Use mobile device for quick entry
   - Add lessons as they happen
   - Students with packages auto-deduct

3. **End of Day:**
   - Review today's total
   - Check for any missed lessons

4. **End of Week:**
   - Check coach hours on Coaches page
   - Review package statuses
   - Clear notifications

5. **End of Month:**
   - Monthly export runs automatically
   - Check exports/ folder for Excel file
   - Or manually export via "Export Month" button

### For Package Management

1. **When Student Purchases Package:**
   - Go to Packages page
   - Add new package with details
   - System tracks usage automatically

2. **When Package Runs Low:**
   - Red alert appears on home page
   - Notification created automatically
   - Contact student for renewal

3. **When Package Depletes:**
   - Status changes to "depleted"
   - Can renew or create new package
   - Old package history preserved

### For Coach Management

1. **Track Hours:**
   - Always select coach when adding lesson
   - View monthly totals on Coaches page
   - Check daily breakdown for details

2. **Payroll:**
   - Use monthly export Excel file
   - Coach Hours sheet shows earnings
   - Based on hourly rate × hours worked

---

## 📊 Reports & Exports

### Monthly Export (Automatic)

**Schedule:** Last day of month at 11:59 PM

**Location:** `exports/` folder

**Filename:** `[Month]_[Year].xlsx` (e.g., `January_2026.xlsx`)

**Contents:**
- All lessons for the month
- Daily totals and trends
- Coach hours and payroll
- Package usage statistics
- Summary metrics

### Manual Exports

1. **Current Month:**
   - Click "Export Month" on home page
   - Downloads Excel for current month

2. **All Data:**
   - Click "Export to Excel" on home or history page
   - Downloads all lessons ever recorded

3. **Filtered Data:**
   - Go to History page
   - Filter by specific date
   - Export shows only filtered lessons

---

## 🔔 Notifications System

### Types of Notifications

1. **Package Expiring (High Priority):**
   - Triggered when package has ≤1 class
   - Shows student name and remaining balance
   - Red banner on home page
   - Action: Renew package or add lesson

2. **Monthly Export Complete (Medium Priority):**
   - Triggered when automatic export finishes
   - Shows month name and total revenue
   - Action: Download file

3. **Coach Milestone (Low Priority):**
   - Triggered when coach reaches 100+ hours/month
   - Shows coach name and achievement
   - Action: View coach details

### Managing Notifications

- View all: Go to Notifications page (🔔 icon)
- Mark read: Click "Mark Read" on individual notification
- Mark all read: Click "Mark All Read" button
- Delete: Click "Delete" button
- Filter: Use "Unread Only" filter

---

## 🎨 Customization

### Adjusting Button Sizes

Edit `templates/simple_index.html` or other templates:

```css
.btn-huge {
    min-height: 100px;  /* Change this value */
    font-size: 28px;     /* And this */
}
```

### Changing Colors

Edit the CSS in template files:

```css
.total-box {
    background-color: #28a745;  /* Today's total - green */
}

.month-box {
    background-color: #007bff;  /* Month total - blue */
}
```

### Modifying Package Alert Thresholds

Edit `models.py`:

```python
def get_status_color(self):
    if self.classes_remaining <= 1:  # Red threshold
        return 'danger'
    elif self.classes_remaining <= 3:  # Yellow threshold
        return 'warning'
    else:
        return 'success'  # Green
```

### Changing Export Schedule

Edit `scheduler.py`:

```python
trigger = CronTrigger(
    day='last',  # Last day of month
    hour=23,     # 11 PM (change to desired hour)
    minute=59    # 59 minutes (change to desired minute)
)
```

---

## 🐛 Troubleshooting

### Issue: Mobile device can't access app

**Solution:**
1. Check both devices on same WiFi
2. Try disabling firewall temporarily
3. Use server's actual IP (not localhost)
4. Ensure port 5001 is open

### Issue: Swipe gestures not working

**Solution:**
1. Ensure using mobile browser (Safari/Chrome)
2. Check JavaScript is enabled
3. Try refreshing page
4. Clear browser cache

### Issue: Packages not auto-detecting

**Solution:**
1. Enter exact student name (case-sensitive initially)
2. Check package status is "active"
3. Verify package has classes remaining
4. Refresh page and try again

### Issue: Monthly export didn't run

**Solution:**
1. Check scheduler started (console shows message)
2. Verify server was running at scheduled time
3. Check exports/ folder for file
4. Run manual export as backup

### Issue: Coach hours incorrect

**Solution:**
1. Ensure coach selected when adding lessons
2. Check lesson dates are in correct month
3. View daily breakdown for details
4. Verify hourly rate is set correctly

---

## 📁 File Structure

```
BillingSoftware/
├── simple_app.py           # Main Flask application (enhanced)
├── models.py               # Database models (NEW)
├── scheduler.py            # Monthly export scheduler (NEW)
├── requirements.txt        # Python dependencies (updated)
├── simple_billing.db       # SQLite database
├── exports/                # Monthly Excel files (NEW)
│   ├── January_2026.xlsx
│   ├── February_2026.xlsx
│   └── ...
├── templates/
│   ├── simple_index.html   # Home page (enhanced)
│   ├── simple_history.html # History page (enhanced)
│   ├── packages.html       # Package management (NEW)
│   ├── coaches.html        # Coach management (NEW)
│   └── notifications.html  # Notifications (NEW)
├── static/
│   ├── css/
│   │   ├── style.css       # Original styles
│   │   └── mobile.css      # Mobile-specific styles (NEW)
│   └── js/
│       ├── main.js         # Original JavaScript
│       └── mobile.js       # Mobile features (NEW)
├── MOBILE_TESTING_GUIDE.md # Testing checklist (NEW)
└── README_ENHANCED.md      # This file (NEW)
```

---

## 🔐 Security Notes

1. **Production Deployment:**
   - Change `SECRET_KEY` in simple_app.py
   - Use HTTPS with SSL certificate
   - Set up proper authentication
   - Use production WSGI server (gunicorn, waitress)

2. **Database Backups:**
   - Regular backups of `simple_billing.db`
   - Store backups off-site
   - Monthly exports serve as data backup

3. **Access Control:**
   - App currently has no authentication
   - Suitable for local network use only
   - Add login system for internet access

---

## 📈 Future Enhancements

Possible additions for future versions:

- [ ] User authentication and roles
- [ ] Email notifications for package expiry
- [ ] SMS reminders for lessons
- [ ] Student portal for viewing package balance
- [ ] Attendance tracking
- [ ] Payment integration (Stripe, PayPal)
- [ ] Multi-court/multi-location support
- [ ] Lesson scheduling calendar view
- [ ] Student progress tracking
- [ ] Automated birthday reminders

---

## 🆘 Support

For questions or issues:

1. Check this README first
2. Review MOBILE_TESTING_GUIDE.md for mobile issues
3. Check console for error messages
4. Review the plan file for implementation details

---

## 📝 Version History

### Version 2.0 (Enhanced) - February 2026
- ✨ Added package management system
- 👨‍🏫 Added coach hour tracking
- 📊 Added automatic monthly exports
- 📱 Complete mobile-first redesign
- 🔔 Added notification system
- 💾 Enhanced database with new models
- 🎨 New bottom navigation UI
- 👆 Touch gestures and haptic feedback

### Version 1.0 (Simple) - January 2026
- Basic lesson entry
- Daily/monthly totals
- Excel import/export
- Senior-friendly large text

---

## 🎉 Enjoy Your Enhanced Tennis Billing Software!

This system is designed to make tennis academy management effortless. Focus on coaching while the software handles the administration!

**Happy Coaching! 🎾**
