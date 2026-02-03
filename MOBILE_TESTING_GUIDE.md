# Mobile Testing Guide for Enhanced Tennis Billing Software

## 📱 Overview

This guide provides comprehensive testing procedures for the enhanced tennis billing software on mobile devices (iOS and Android).

---

## 🎯 Testing Devices

### Minimum Requirements
- **iOS:** iPhone 12 or newer, iOS 15+, Safari
- **Android:** Android 10+, Chrome browser

### Recommended Test Devices
- [ ] iPhone (Safari) - iOS 16+
- [ ] Android Phone (Chrome) - Android 12+
- [ ] iPad (Safari) - iPadOS 16+
- [ ] Android Tablet (Chrome) - Android 12+

---

## ✅ Pre-Testing Checklist

1. [ ] Server is running on accessible IP address (not localhost)
2. [ ] Mobile device is on the same WiFi network as server
3. [ ] Access app via `http://[SERVER_IP]:5001`
4. [ ] Clear browser cache before testing
5. [ ] Enable JavaScript
6. [ ] Test in both portrait and landscape modes

---

## 🧪 Test Scenarios

### 1. HOME PAGE / LESSON ENTRY

#### Visual Tests
- [ ] Page loads within 2 seconds
- [ ] All buttons are large and easy to tap (minimum 60px height)
- [ ] Bottom navigation bar is visible and fixed at bottom
- [ ] Today's total and month's total are clearly displayed
- [ ] Floating + button is visible (mobile only)
- [ ] No horizontal scrolling required

#### Functionality Tests
- [ ] **Add Lesson (Floating Button):**
  - Tap floating + button
  - Modal opens with form
  - All form fields are large and easy to fill
  - Can select date with native date picker
  - Can input time (e.g., "4-5 pm")
  - Student name autocomplete works
  - Coach dropdown populated with coaches
  - Package detection works when student has active package
  - Save button works and lesson appears

- [ ] **Edit Lesson:**
  - Tap "Edit" button on lesson card
  - All fields populate correctly
  - Can modify and save changes
  - Changes reflect immediately

- [ ] **Delete Lesson:**
  - Tap "Delete" button
  - Confirmation dialog appears
  - Lesson is removed after confirmation

- [ ] **Package Integration:**
  - Enter student name with active package
  - Package info appears automatically
  - "Deduct from package" checkbox is checked
  - Amount auto-fills with package rate
  - Warning appears if last class
  - Package balance updates after save

---

### 2. PACKAGES PAGE

#### Visual Tests
- [ ] Package cards display correctly
- [ ] Color-coded borders (green/yellow/red) based on remaining classes
- [ ] All text is readable
- [ ] Filter buttons are large and accessible
- [ ] Bottom navigation works

#### Functionality Tests
- [ ] **Add Package:**
  - Tap "ADD NEW PACKAGE" button
  - Modal opens
  - Can enter customer name
  - Can enter package details
  - Total classes auto-calculates
  - Save creates package successfully

- [ ] **View Package:**
  - Tap "View" button on package card
  - Package details display

- [ ] **Renew Package:**
  - Tap "Renew" button
  - Confirmation dialog appears
  - Form opens with customer name pre-filled

- [ ] **Filter Packages:**
  - Tap "All" - shows all packages
  - Tap "Active" - shows only active
  - Tap "Expiring" - shows packages with ≤3 classes
  - Tap "Depleted" - shows depleted packages

- [ ] **Package Alerts:**
  - Package with 1 class remaining shows red banner on home
  - Tapping banner navigates to packages page

---

### 3. COACHES PAGE

#### Visual Tests
- [ ] Coach cards display properly
- [ ] Stats (hours, lessons, earnings) are prominent
- [ ] Contact info is tappable (phone number as link)
- [ ] Bottom navigation works

#### Functionality Tests
- [ ] **Add Coach:**
  - Tap "ADD NEW COACH" button
  - Modal opens with form
  - All fields accessible
  - Can set hourly rate
  - Save creates coach successfully

- [ ] **Edit Coach:**
  - Tap "Edit" button on coach card
  - All fields populate correctly
  - Can modify and save
  - Changes reflect immediately

- [ ] **View Daily Breakdown:**
  - Tap "Daily Breakdown" button
  - Modal opens with breakdown table
  - Shows date, hours, lessons, earnings
  - Total row at bottom
  - Table is scrollable if needed

- [ ] **Monthly Stats:**
  - Current month stats display correctly
  - Hours, lessons, and earnings calculate properly

---

### 4. NOTIFICATIONS PAGE

#### Visual Tests
- [ ] Notification cards display clearly
- [ ] Unread notifications highlighted (blue background)
- [ ] Icons display correctly (⚠️ 📊 🏆)
- [ ] Time ago displays (e.g., "2 hours ago")
- [ ] Priority indicators visible

#### Functionality Tests
- [ ] **Mark as Read:**
  - Tap "Mark Read" on unread notification
  - Notification style changes
  - Badge count decreases

- [ ] **Mark All Read:**
  - Tap "Mark All Read" button
  - All notifications marked as read
  - Badge disappears from bottom nav

- [ ] **Delete Notification:**
  - Tap "Delete" button
  - Confirmation appears
  - Notification removed

- [ ] **Navigation from Notifications:**
  - Tap "View Package" button - navigates to packages
  - Tap "View Coach" button - navigates to coaches

- [ ] **Filter Notifications:**
  - Tap "All" - shows all
  - Tap "Unread Only" - shows only unread

---

### 5. HISTORY PAGE

#### Visual Tests
- [ ] Date filter displays properly
- [ ] Total amount prominently displayed
- [ ] Export button accessible
- [ ] Bottom navigation works
- [ ] Table/cards readable

#### Functionality Tests
- [ ] **Filter by Date:**
  - Tap date picker
  - Select date
  - Lessons filter automatically

- [ ] **Show All:**
  - Tap "Show All" button
  - All recent lessons display

- [ ] **Export to Excel:**
  - Tap "EXPORT TO EXCEL" button
  - File downloads successfully
  - Can open file in Excel/Sheets app

---

### 6. BOTTOM NAVIGATION

#### Visual Tests
- [ ] Fixed at bottom of screen
- [ ] Icons large and clear (32px)
- [ ] Labels readable
- [ ] Active state highlighted
- [ ] Badge shows on Alerts if notifications exist

#### Functionality Tests
- [ ] **Home Navigation:**
  - Tap Home icon
  - Navigates to home page
  - Active state highlights

- [ ] **Packages Navigation:**
  - Tap Packages icon
  - Navigates to packages page
  - Active state highlights

- [ ] **Coaches Navigation:**
  - Tap Coaches icon
  - Navigates to coaches page
  - Active state highlights

- [ ] **Alerts Navigation:**
  - Tap Alerts icon
  - Navigates to notifications page
  - Badge count visible if unread notifications

- [ ] **History Navigation:**
  - Tap History icon
  - Navigates to history page
  - Active state highlights

---

### 7. MOBILE-SPECIFIC FEATURES

#### Touch Interactions
- [ ] **Tap Feedback:**
  - Buttons have visual feedback on tap
  - Cards slightly scale on tap
  - Haptic feedback works (if device supports)

- [ ] **Swipe Gestures on Lesson Cards:**
  - Swipe left on lesson card - shows delete option
  - Swipe right on lesson card - opens edit
  - Card animates during swipe
  - Swipe cancels if not completed

- [ ] **Long Press:**
  - Long press on lesson card (800ms)
  - Quick actions menu appears
  - Can edit, delete, or cancel
  - Menu closes when tapping outside

- [ ] **Pull to Refresh:**
  - Pull down from top when at scroll position 0
  - "Release to refresh" indicator appears
  - Page reloads on release

#### Responsive Behavior
- [ ] **Portrait Mode:**
  - All elements stack vertically
  - Cards display properly
  - Forms are scrollable
  - Bottom nav visible

- [ ] **Landscape Mode:**
  - Layout adjusts appropriately
  - All elements accessible
  - No clipping or overflow
  - Bottom nav remains functional

- [ ] **Keyboard:**
  - Keyboard appears when focusing input
  - Page scrolls to keep input visible
  - Can dismiss keyboard
  - Form submits correctly

---

### 8. EXPORT FUNCTIONALITY

#### Monthly Export
- [ ] **Manual Export:**
  - Tap "Export Month" button on home
  - Excel file downloads
  - File contains all sheets:
    - Lessons Summary
    - Daily Totals
    - Coach Hours
    - Package Usage (if any)
    - Monthly Summary

- [ ] **File Contents:**
  - All lesson data present
  - Coach names display correctly
  - Package info included
  - Totals calculate correctly
  - Date formats correct

#### Import
- [ ] **Import Excel:**
  - Tap "Import" button
  - File picker opens
  - Select Excel file
  - File imports successfully
  - Success message shows count
  - Lessons appear in list

---

### 9. PERFORMANCE TESTS

#### Loading Times
- [ ] Home page loads < 2 seconds
- [ ] Packages page loads < 2 seconds
- [ ] Coaches page loads < 2 seconds
- [ ] Modal opens < 300ms
- [ ] Form submission < 1 second
- [ ] Navigation between pages < 500ms

#### Smooth Scrolling
- [ ] Scrolling is smooth (60fps)
- [ ] No lag when scrolling long lists
- [ ] Bottom nav stays fixed during scroll
- [ ] Pull-to-refresh works smoothly

#### Memory Usage
- [ ] App doesn't slow down after extended use
- [ ] Can add 20+ lessons without issues
- [ ] Multiple page transitions work smoothly

---

### 10. OFFLINE BEHAVIOR

- [ ] **Network Loss:**
  - Disconnect WiFi/data
  - App shows offline indicator (optional)
  - Forms don't submit
  - Error messages are clear

- [ ] **Network Restore:**
  - Reconnect network
  - App functions normally
  - Pending actions can be retried

---

### 11. ACCESSIBILITY TESTS

#### Text Sizing
- [ ] All text is readable (minimum 20px)
- [ ] Headings are prominent (minimum 32px)
- [ ] Form labels are clear (minimum 24px)
- [ ] Button text is large (minimum 22px)

#### Touch Targets
- [ ] All buttons minimum 60px height
- [ ] Floating button 80px diameter
- [ ] Bottom nav items easy to tap
- [ ] Form inputs minimum 65px height
- [ ] Adequate spacing between tappable elements

#### Color Contrast
- [ ] All text meets contrast ratio requirements
- [ ] Status indicators (red/yellow/green) are clear
- [ ] Links are distinguishable
- [ ] Active states are obvious

---

### 12. CROSS-BROWSER TESTING

#### iOS Safari
- [ ] All features work
- [ ] Date picker is native iOS picker
- [ ] Bottom nav doesn't interfere with Safari UI
- [ ] Forms submit correctly
- [ ] Swipe gestures don't conflict with Safari

#### Android Chrome
- [ ] All features work
- [ ] Date picker is native Android picker
- [ ] Bottom nav position correct
- [ ] Back button behavior correct
- [ ] Swipe gestures work properly

#### Other Browsers (Optional)
- [ ] Firefox Mobile
- [ ] Samsung Internet
- [ ] Edge Mobile

---

### 13. INTEGRATION TESTS

#### Complete Workflow: Add Lesson with Package
1. [ ] Start on home page
2. [ ] Tap floating + button
3. [ ] Enter student name with active package
4. [ ] Package info auto-loads
5. [ ] Checkbox "Deduct from package" is checked
6. [ ] Amount auto-fills
7. [ ] Select coach from dropdown
8. [ ] Select date and time
9. [ ] Tap Save
10. [ ] Lesson appears on home
11. [ ] Package balance decreases
12. [ ] Notification created if low balance

#### Complete Workflow: Add New Package
1. [ ] Navigate to Packages page via bottom nav
2. [ ] Tap "ADD NEW PACKAGE"
3. [ ] Enter customer name
4. [ ] Enter package details
5. [ ] Total classes auto-calculates
6. [ ] Save package
7. [ ] Package appears in list
8. [ ] Color-coded correctly

#### Complete Workflow: View Coach Hours
1. [ ] Navigate to Coaches page
2. [ ] Find coach with lessons
3. [ ] Tap "Daily Breakdown"
4. [ ] Breakdown displays correctly
5. [ ] Can scroll through dates
6. [ ] Total calculates correctly
7. [ ] Close modal
8. [ ] Can edit coach info

---

## 🐛 Bug Reporting

When reporting bugs, include:

1. **Device Info:**
   - Device model
   - OS version
   - Browser and version

2. **Steps to Reproduce:**
   - Detailed step-by-step
   - What you expected
   - What actually happened

3. **Screenshots/Videos:**
   - Visual proof helps debugging

4. **Console Errors:**
   - Open browser console
   - Copy any error messages

---

## ✅ Sign-Off Checklist

After completing all tests:

- [ ] All core features work on iOS
- [ ] All core features work on Android
- [ ] No critical bugs found
- [ ] Performance is acceptable
- [ ] UI/UX is smooth and intuitive
- [ ] Accessibility requirements met
- [ ] Ready for production use

---

## 📝 Notes

- Test in real-world conditions (varying network speeds)
- Test with actual data (not just test data)
- Test edge cases (empty states, maximum values)
- Test with multiple users/coaches/packages
- Test error scenarios (network failures, invalid inputs)

---

## 🎉 Testing Complete

Once all items are checked off, the mobile experience is validated and ready for deployment!

**Tester Name:** ___________________________

**Date:** ___________________________

**Signature:** ___________________________
