# 🚀 Quick Start Guide - Enhanced Tennis Billing

## ⚡ Get Up and Running in 5 Minutes

### Step 1: Install Dependencies (1 minute)

Open terminal/command prompt in the project folder and run:

```bash
pip install -r requirements.txt
```

This installs the new APScheduler dependency for automatic monthly exports.

---

### Step 2: Start the Server (30 seconds)

**Option A: Windows**
```bash
START_SIMPLE.bat
```

**Option B: Command Line**
```bash
python simple_app.py
```

You should see:
```
📅 Monthly export scheduler started!
   - Automatic exports will run at 11:59 PM on the last day of each month
 * Running on http://0.0.0.0:5001
```

---

### Step 3: Access the Application (30 seconds)

**On Your Computer:**
- Open browser: `http://localhost:5001`

**On Your Phone/Tablet:**
1. Make sure your device is on the same WiFi
2. Find your computer's IP address:
   - Windows: `ipconfig` in command prompt
   - Mac: System Preferences → Network
   - Look for something like: `192.168.1.100`
3. Open browser on phone: `http://192.168.1.100:5001`

---

### Step 4: Try the New Features (3 minutes)

#### A. Add a Coach (1 min)

1. Click 🏠 bottom navigation → Coaches icon (👨‍🏫)
2. Tap "ADD NEW COACH" button
3. Fill in:
   - Name: "John Smith"
   - Email: john@example.com
   - Phone: (555) 123-4567
   - Hourly Rate: 50.00
4. Save

#### B. Create a Package (1 min)

1. Click Packages icon (📦) in bottom navigation
2. Tap "ADD NEW PACKAGE"
3. Fill in:
   - Student Name: "Sarah Johnson"
   - Package Name: "10 Class Package"
   - Total Amount: 1000.00
   - Price per Class: 100.00
   - Start Date: Today
4. Save

The system automatically calculates: **10 classes total**

#### C. Add a Lesson Using the Package (1 min)

1. Go back to Home (🏠)
2. Tap the green floating + button (mobile) or "ADD NEW LESSON" (desktop)
3. Fill in:
   - Date: Today
   - Time: 4-5 pm
   - Student Name: Sarah Johnson (type and it auto-detects package!)
4. Watch the magic:
   - Package info appears! ✨
   - "Deduct from package" is auto-checked
   - Amount auto-fills to $100.00
   - Shows: "9 classes remaining after this lesson"
5. Select Coach: John Smith
6. Hours: 1.0
7. Save

#### D. Check the Results

**Home Page:**
- Today's total shows $100.00
- Lesson card shows Sarah Johnson with package info

**Packages Page:**
- Sarah's package now shows:
  - Classes Used: 1
  - Classes Remaining: 9
  - Balance: $900.00

**Coaches Page:**
- John Smith shows:
  - Hours: 1.0
  - Lessons: 1
  - Earnings: $50.00

**Notifications Page:**
- No notifications yet (alerts appear when ≤1 class remaining)

---

### Step 5: Test Mobile Features (Optional)

If on mobile device:

#### Try Swipe Gestures:
- Swipe LEFT on lesson card → Delete option
- Swipe RIGHT on lesson card → Edit
- Pull down from top → Refresh

#### Try Long Press:
- Press and hold on lesson card for 800ms
- Quick actions menu appears
- Choose Edit, Delete, or Cancel

#### Try Bottom Navigation:
- Tap each icon to navigate
- Notice smooth transitions
- Active page is highlighted

---

## 🎯 What You Now Have

✅ **Package System:** Track prepaid lessons automatically  
✅ **Coach Tracking:** Monitor hours and calculate payroll  
✅ **Smart Alerts:** Get notified when packages expire  
✅ **Auto Exports:** Monthly reports generated automatically  
✅ **Mobile Optimized:** Use from your phone anywhere  
✅ **Touch Gestures:** Swipe and tap for quick actions  

---

## 📱 Mobile Quick Tips

### Make it Feel Like an App

**iPhone/iPad:**
1. Open in Safari
2. Tap Share button (square with arrow)
3. Scroll and tap "Add to Home Screen"
4. Name it "Tennis Billing"
5. Tap Add
6. Icon appears on home screen! 🎉

**Android:**
1. Open in Chrome
2. Tap menu (3 dots)
3. Tap "Add to Home screen"
4. Name it "Tennis Billing"
5. Tap Add
6. Icon appears on home screen! 🎉

Now it opens like a native app!

---

## 🔥 Pro Tips

### For Best Experience:

1. **Always Select Coach:** Helps with hour tracking
2. **Use Packages:** Saves time and tracks balances automatically
3. **Check Notifications Daily:** Stay on top of expiring packages
4. **Export Monthly:** Even though it's automatic, manual export is available
5. **Use Mobile:** Optimized for phones - use it courtside!

### Mobile-Specific:

1. **Bookmark the IP:** Save the URL for quick access
2. **Keep Phone Horizontal:** Landscape mode works great for forms
3. **Use Haptic Feedback:** Feel the taps for confirmation
4. **Try Voice Input:** Most phones support voice-to-text for names
5. **Add to Home Screen:** Makes access instant

---

## 🆘 Quick Troubleshooting

### "Can't connect from phone"
- Check WiFi: Both devices on same network?
- Check IP: Using computer's IP, not localhost?
- Check Firewall: Try disabling temporarily
- Check Server: Is simple_app.py still running?

### "Package not auto-detecting"
- Type exact name as saved (try autocomplete)
- Check package status is "active"
- Check package has classes remaining
- Refresh page and try again

### "Swipe not working"
- Must be on mobile browser (not desktop)
- Swipe horizontally, not vertically
- Complete the swipe (go far enough)
- JavaScript must be enabled

### "Coach hours not showing"
- Did you select coach when adding lesson?
- Check lesson date is in current month
- Try clicking "Daily Breakdown" for details

---

## 📊 Test Monthly Export

Want to test the monthly export without waiting until month-end?

1. Go to Home page
2. Click "Export Month" button
3. Downloads Excel for current month
4. Open in Excel/Google Sheets
5. Check all 5 sheets:
   - Lessons Summary
   - Daily Totals
   - Coach Hours
   - Package Usage
   - Monthly Summary

---

## 🎉 You're All Set!

The enhanced system is ready to use. Start adding lessons, managing packages, and tracking coach hours!

### Next Steps:

1. **Add All Your Coaches:** Go to Coaches page and add everyone
2. **Create Real Packages:** Add packages for students who have them
3. **Import Historical Data:** Use "Import" button if you have old Excel files
4. **Test on Mobile:** Try it on your phone/tablet
5. **Read Full README:** Check `README_ENHANCED.md` for all features

---

## 📞 Need Help?

- Full documentation: `README_ENHANCED.md`
- Mobile testing: `MOBILE_TESTING_GUIDE.md`
- Feature details: See the plan file attached

---

**Enjoy your enhanced tennis billing system! 🎾**

Remember: The monthly export runs automatically at 11:59 PM on the last day of each month. Just keep the server running!
