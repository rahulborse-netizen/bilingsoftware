# 🎯 INSTALLATION GUIDE - Help Your Client Install

## Complete Step-by-Step Guide to Install Tennis Billing Software on Client's Device

---

## 📋 BEFORE YOU START

### What Client Needs:
- ✅ A computer (Windows, Mac, or Linux)
- ✅ Internet connection (only for initial setup)
- ✅ 30 minutes for first-time installation
- ✅ Your zip file: TennisBilling_v1.0.zip

### What You'll Do:
- Help client install Python (5 minutes)
- Help extract and setup software (5 minutes)
- Help them run it first time (2 minutes)
- Import their data (2 minutes)
- Test it together (5 minutes)

---

## 🎯 INSTALLATION METHODS

Choose based on your situation:

### **Method 1: Remote Assistance** ⭐ RECOMMENDED
- Use TeamViewer / AnyDesk / Zoom screen share
- You see their screen and guide them
- Fastest and easiest!

### **Method 2: Video Call**
- WhatsApp / Zoom call while they do it
- You tell them what to click
- Good if they're comfortable with computers

### **Method 3: Send Written Instructions**
- Email them detailed steps
- They follow on their own
- You provide email/phone support

---

## 📥 METHOD 1: REMOTE ASSISTANCE (Recommended)

### **Preparation (Before the call):**

1. **Send the zip file to client first**
   - Upload TennisBilling_v1.0.zip to Google Drive
   - Send download link via email
   - Ask them to download it to Desktop

2. **Schedule a call/session**
   - Book 30 minutes with client
   - Choose remote tool: TeamViewer (free) or AnyDesk
   - Send them download link for remote tool

3. **Have ready:**
   - This installation guide
   - Python download link: https://www.python.org/downloads/
   - Your phone (for backup communication)

---

### **During Remote Session:**

#### **STEP 1: Download Python** (5 minutes)

**You say:** "Let's install Python first. It's free software that runs our billing system."

1. Ask client to open browser
2. Go to: https://www.python.org/downloads/
3. Click the big yellow button: **"Download Python"**
4. Wait for download (Python-3.x.x.exe)
5. Click on downloaded file to run installer

**CRITICAL:** When installer opens, tell client:
- ✅ **CHECK the box: "Add Python to PATH"** (very important!)
- Then click: **"Install Now"**
- Wait 2-3 minutes for installation
- Click "Close" when done

**Verify Python is installed:**
```
1. Press Windows Key + R
2. Type: cmd
3. Press Enter (opens black window)
4. Type: python --version
5. Should show: Python 3.x.x
6. If yes, Python installed! ✓
```

---

#### **STEP 2: Extract the Software** (2 minutes)

**You say:** "Now let's unzip the billing software."

1. Ask client to open Desktop (or wherever they downloaded zip)
2. Find: **TennisBilling_v1.0.zip**
3. Right-click on it
4. Choose: **"Extract All..."**
5. Click: **"Extract"** (will create a folder)
6. Open the extracted folder

**They should see these files:**
- simple_app.py
- START_SIMPLE.bat ← Important!
- templates (folder)
- static (folder)
- README_START_HERE.txt
- And more...

---

#### **STEP 3: Install Required Packages** (3 minutes)

**You say:** "Now we need to install some helper programs."

1. In the extracted folder, hold **Shift** and **Right-click** empty space
2. Choose: **"Open PowerShell window here"** or **"Open Command Prompt here"**
3. A window with blue/black background opens
4. Tell them to type exactly: `pip install -r requirements.txt`
5. Press **Enter**
6. Wait 1-2 minutes (lots of text will scroll)
7. When done, should show "Successfully installed..."
8. Close the window

**If error "pip not found":**
```
1. Type instead: python -m pip install Flask Flask-SQLAlchemy openpyxl pandas
2. Press Enter
3. Wait for installation
```

---

#### **STEP 4: Run the Software** (2 minutes)

**You say:** "Great! Now let's start your billing system!"

1. In the folder, find: **START_SIMPLE.bat**
2. **Double-click** it
3. A black window opens with text
4. Wait until you see: **"Running on http://127.0.0.1:5001"**
5. **Don't close this black window!** (keeps software running)

**Important:** Tell client:
- "Keep this black window open"
- "When you see this window, the software is running"
- "To stop: close this window"

---

#### **STEP 5: Open in Browser** (1 minute)

**You say:** "Now let's open it in your browser!"

1. Open **Google Chrome** or **Edge** or **Firefox**
2. In address bar, type: `http://localhost:5001`
3. Press **Enter**
4. **Software appears!** 🎉

**What they should see:**
- Big title: "🎾 Tennis Lessons"
- Green box: "Today's Total $0.00"
- Blue box: "This Month's Total $0.00"
- Big green button: "➕ ADD NEW LESSON"

**If they see this, SUCCESS!** ✓

---

#### **STEP 6: Import Existing Data** (2 minutes)

**You say:** "Now let's import all your existing lessons from Excel."

1. On the software page, find button: **"📥 Import from Excel"**
2. Click it
3. A file picker opens
4. Navigate to the extracted folder
5. Select: **"1st-31 Jan 2026.xlsx"**
6. Click **"Open"**
7. Wait 5-10 seconds
8. Should show: "✅ Imported 1075 lessons!"
9. Numbers in green and blue boxes update!

**Success!** All historical data is now in the system! ✓

---

#### **STEP 7: Test Adding a Lesson** (2 minutes)

**You say:** "Let's try adding a new lesson together!"

1. Click the big green button: **"➕ ADD NEW LESSON"**
2. A form appears
3. Fill in:
   - **Date:** (already filled with today)
   - **Time:** Type: "4-5 pm"
   - **Student Name:** Type: "Test Student"
   - **Hours:** Type: 1.0
   - **Package:** Leave blank (optional)
   - **Amount:** Type: 100.00
4. Click: **"💾 Save"**
5. Lesson appears in the table!
6. Today's Total updates to $100.00!

**Success!** Software is working! ✓

---

#### **STEP 8: Show Daily Use** (3 minutes)

**You say:** "Here's how you'll use it every day..."

**To Start Software:**
1. Go to folder (Desktop or wherever)
2. Double-click: **START_SIMPLE.bat**
3. Open browser: `http://localhost:5001`
4. Start adding lessons!

**To Add a Lesson:**
1. Click: **➕ ADD NEW LESSON**
2. Fill form (10 seconds)
3. Click: **💾 Save**
4. Done!

**To View History:**
1. Click: **📊 History** (top right)
2. See all past lessons
3. Filter by date if needed
4. Click: **📝 Back to Today**

**To Export to Excel:**
1. Click: **📤 Export to Excel**
2. File downloads
3. Open in Excel
4. Print, email, or save!

---

#### **STEP 9: (OPTIONAL) Phone Access** (5 minutes)

**You say:** "Want to use it on your phone? Let me show you!"

**Requirements:**
- Phone on same WiFi as computer
- Computer running the software

**Steps:**
1. On computer, open **Command Prompt** (Windows Key + R, type cmd, Enter)
2. Type: `ipconfig`
3. Look for: "IPv4 Address" (example: 192.168.1.100)
4. Write it down

5. On phone:
   - Connect to same WiFi
   - Open browser (Chrome/Safari)
   - Type: `http://192.168.1.100:5001` (use their IP)
   - Same software appears!
   - Big buttons work great on phone!

**Test:** Add a lesson from phone, see it on computer!

---

#### **STEP 10: Create Desktop Shortcut** (1 minute)

**You say:** "Let's make it easy to start every day."

1. Right-click: **START_SIMPLE.bat**
2. Choose: **"Send to"** → **"Desktop (create shortcut)"**
3. Now there's a shortcut on Desktop!
4. Client can double-click desktop icon to start!

---

### **Final Checklist:**

Go through with client:

- [x] Python installed ✓
- [x] Software extracted ✓
- [x] Packages installed ✓
- [x] Software runs ✓
- [x] Opens in browser ✓
- [x] Data imported (1075 lessons) ✓
- [x] Test lesson added ✓
- [x] Client knows how to start it ✓
- [x] Client knows how to add lessons ✓
- [x] Client knows how to export ✓
- [x] Desktop shortcut created ✓
- [x] (Optional) Phone access working ✓

---

## 📧 METHOD 2: EMAIL INSTRUCTIONS TO CLIENT

If you can't do remote session, send this email:

---

**Subject: Tennis Billing Software - Installation Instructions**

Hi [Client Name],

Please follow these steps to install your Tennis Billing Software:

### **STEP 1: Download Python**

1. Go to: https://www.python.org/downloads/
2. Click "Download Python"
3. Run the downloaded installer
4. ✅ **IMPORTANT:** Check "Add Python to PATH"
5. Click "Install Now"
6. Wait for installation (2-3 minutes)

### **STEP 2: Extract Software**

1. Find the file I sent: TennisBilling_v1.0.zip
2. Right-click → "Extract All"
3. Click "Extract"
4. Open the extracted folder

### **STEP 3: Install Requirements**

1. In the folder, hold Shift + Right-click empty space
2. Choose "Open PowerShell window here"
3. Type: `pip install -r requirements.txt`
4. Press Enter
5. Wait for installation (1-2 minutes)

### **STEP 4: Run Software**

1. Double-click: **START_SIMPLE.bat**
2. A black window opens (don't close it!)
3. Open browser: http://localhost:5001
4. You'll see the software!

### **STEP 5: Import Your Data**

1. Click "📥 Import from Excel"
2. Select: "1st-31 Jan 2026.xlsx"
3. All your lessons will import!

### **STEP 6: Try It!**

1. Click "➕ ADD NEW LESSON"
2. Fill in the form
3. Click "💾 Save"
4. Done!

**Need Help?** Call me at [Your Phone] or reply to this email!

Best regards,
[Your Name]

**Attachments:**
- TennisBilling_v1.0.zip
- Installation_Screenshots.pdf (create screenshots)

---

---

## 🔧 TROUBLESHOOTING GUIDE

### **Problem 1: "Python is not recognized"**

**Cause:** Python not added to PATH during installation

**Solution:**
```
1. Uninstall Python (Settings → Apps → Python → Uninstall)
2. Download Python again
3. Run installer
4. ✅ CHECK "Add Python to PATH" this time!
5. Install
6. Restart computer
7. Try again
```

---

### **Problem 2: "pip is not recognized"**

**Cause:** pip not in PATH

**Solution:**
```
Instead of: pip install -r requirements.txt
Use: python -m pip install -r requirements.txt
```

---

### **Problem 3: "Module not found: flask"**

**Cause:** Requirements not installed

**Solution:**
```
1. Open PowerShell in software folder
2. Type: python -m pip install Flask Flask-SQLAlchemy openpyxl pandas
3. Press Enter
4. Wait for installation
5. Try running again
```

---

### **Problem 4: "Port 5001 already in use"**

**Cause:** Something else using port 5001

**Solution:**
```
1. Close all black windows
2. Restart computer
3. Try again
OR
4. Edit simple_app.py
5. Change: port=5001 to port=5002
6. Access: http://localhost:5002
```

---

### **Problem 5: Can't access from phone**

**Cause:** Phone not on same WiFi, or firewall blocking

**Solution:**
```
1. Check phone WiFi = computer WiFi (same network)
2. Windows: Allow Python through firewall
   - Windows Security → Firewall
   - Allow an app → Python → Allow
3. Try again
4. If still not working, use on computer only (it's fine!)
```

---

### **Problem 6: Browser shows "Can't reach this page"**

**Cause:** Software not running

**Solution:**
```
1. Check black window is open and says "Running on..."
2. If not, double-click START_SIMPLE.bat again
3. Wait for "Running on http://127.0.0.1:5001"
4. Then open browser
```

---

### **Problem 7: Excel import fails**

**Cause:** Wrong file or corrupt data

**Solution:**
```
1. Make sure file is: 1st-31 Jan 2026.xlsx
2. File should be in same folder as software
3. Try closing Excel if it's open
4. Try again
5. If still fails, can manually add lessons (software still works!)
```

---

## 📞 REMOTE TOOLS TO USE

### **Option 1: TeamViewer** (Free)
```
You: Download from teamviewer.com
Client: Download from teamviewer.com
Share ID and password
You can see and control their screen
```

### **Option 2: AnyDesk** (Free)
```
Similar to TeamViewer
Download from anydesk.com
Easier and faster
```

### **Option 3: Chrome Remote Desktop** (Free)
```
Works in browser
remotedesktop.google.com
Both need Chrome browser
```

### **Option 4: Windows Quick Assist** (Built-in Windows)
```
Built into Windows 10/11
Search "Quick Assist" on both computers
Client gives code
You connect
```

---

## ✅ POST-INSTALLATION CHECKLIST

After successful installation, make sure client knows:

### **Daily Use:**
- [x] How to start software (double-click shortcut)
- [x] How to open in browser (http://localhost:5001)
- [x] How to add a lesson (click green button)
- [x] How to edit a lesson (click edit button)
- [x] How to delete a lesson (click delete button)
- [x] That green box shows today's total
- [x] That blue box shows month's total

### **Weekly Use:**
- [x] How to view history (click History button)
- [x] How to filter by date
- [x] How to export to Excel (click Export button)

### **Important Notes:**
- [x] Keep black window open while using
- [x] Close black window to stop software
- [x] Data saved automatically (in simple_billing.db)
- [x] Export to Excel for backup
- [x] No internet needed after installation

### **Contact Info:**
- [x] Your phone number saved
- [x] Your email saved
- [x] Know when to contact you (if issues)

---

## 💡 PRO TIPS FOR SMOOTH INSTALLATION

1. **Schedule at client's convenience**
   - Not when they're busy
   - Weekday morning usually best
   - Allow 30-45 minutes

2. **Test your own internet first**
   - Make sure your screen sharing works
   - Have good internet connection

3. **Be patient**
   - Client might be slower with computers
   - Repeat instructions calmly
   - Use simple words

4. **Take screenshots**
   - Screenshot each step during installation
   - Send to client afterwards
   - They can refer back

5. **Record the session** (with permission)
   - Zoom/Teams can record
   - Client can watch again if forgot
   - Helpful reference

6. **Create a cheat sheet**
   - One-page guide for daily use
   - Print or email to client
   - Keep by their computer

---

## 📄 SAMPLE CHEAT SHEET FOR CLIENT

Create this simple one-pager for client:

```
═══════════════════════════════════════════
   🎾 TENNIS BILLING - DAILY QUICK GUIDE
═══════════════════════════════════════════

📍 START:
  1. Double-click icon on Desktop
  2. Black window opens (keep it open!)
  3. Open browser: http://localhost:5001

✏️ ADD LESSON:
  1. Click: ➕ ADD NEW LESSON
  2. Fill: Time, Name, Hours, Amount
  3. Click: 💾 Save
  4. Done!

👁️ VIEW HISTORY:
  1. Click: 📊 History
  2. Pick date or see all
  3. Click: 📝 Back to Today

📤 EXPORT EXCEL:
  1. Click: 📤 Export to Excel
  2. File downloads
  3. Open in Excel

⏹️ STOP:
  1. Close black window
  2. Close browser

💾 BACKUP:
  - Export to Excel weekly
  - Or copy: simple_billing.db file

📞 HELP:
  Call: [Your Phone]
  Email: [Your Email]

═══════════════════════════════════════════
```

---

## 🎉 YOU'RE READY TO HELP CLIENT!

### **Summary:**

✅ You have the installation guide
✅ You know the steps
✅ You have troubleshooting solutions
✅ You have remote tools ready
✅ You can create a cheat sheet

### **Remember:**
- Be patient and friendly
- Test on your device first (TestInstall folder)
- Schedule dedicated time
- Use remote assistance if possible
- Follow up after installation

### **After Installation:**
- Check in next day
- Make sure they tried adding real lessons
- Answer any questions
- Get testimonial/feedback
- Ask for referrals!

**Good luck with the installation! You've got this! 💪**

---

**Files for reference:**
- This guide (INSTALLATION_GUIDE_FOR_CLIENT.md)
- WHERE_ARE_THE_FILES.txt
- SEND_TO_CLIENT_GUIDE.md
- CLIENT_PACKAGE_INSTRUCTIONS.txt (in zip file)

