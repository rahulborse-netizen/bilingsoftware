# 🎾 Enhanced Tennis Billing Software

A comprehensive, mobile-first tennis academy management system with package tracking, coach management, and automated reporting.

![Version](https://img.shields.io/badge/version-2.0-blue)
![Python](https://img.shields.io/badge/python-3.11+-green)
![Flask](https://img.shields.io/badge/flask-3.0.0-red)
![License](https://img.shields.io/badge/license-MIT-yellow)

## ✨ Features

### 📦 **Package Management**
- Create prepaid lesson packages for students
- Automatic class deduction
- Real-time balance tracking
- Color-coded status indicators (🟢 🟡 🔴)
- Smart expiry alerts

### 👨‍🏫 **Coach Hour Tracking**
- Manage multiple coaches/instructors
- Automatic hour tracking per lesson
- Daily breakdown reports
- Payroll calculations with hourly rates
- Monthly statistics dashboard

### 🔔 **Smart Notifications**
- Package expiry alerts
- Monthly export completion notices
- Coach milestone achievements
- Priority-based notification system
- In-app notification center

### 📊 **Automated Monthly Exports**
- Automatic Excel generation at month-end
- 5-sheet comprehensive reports:
  - Lessons Summary
  - Daily Totals
  - Coach Hours
  - Package Usage
  - Monthly Summary
- Manual export option available

### 📱 **Mobile-First Design**
- Optimized for phones and tablets
- Large touch-friendly buttons (100px height)
- Bottom navigation bar (app-like experience)
- Swipe gestures (left to delete, right to edit)
- Long-press quick actions
- Pull-to-refresh
- Haptic feedback
- PWA support (installable as app)

### 💼 **Core Features**
- Simple lesson entry and tracking
- Daily and monthly revenue totals
- Complete lesson history
- Excel import/export
- Senior-friendly large text
- Responsive design

## 🚀 Quick Start

### Prerequisites

- Python 3.11 or higher
- pip (Python package manager)

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/YOUR_USERNAME/tennis-billing-software.git
cd tennis-billing-software
```

2. **Install dependencies:**
```bash
pip install -r requirements.txt
```

3. **Start the server:**
```bash
python simple_app.py
```

4. **Access the application:**
- Desktop: `http://localhost:5001`
- Mobile: `http://[YOUR_IP]:5001`

### 📱 Mobile Access

1. Find your computer's IP address:
   - Windows: `ipconfig`
   - Mac/Linux: `ifconfig`

2. On your mobile device (same WiFi):
   - Open browser
   - Go to: `http://YOUR_IP:5001`
   - Add to home screen for app-like experience

## 📖 Documentation

- **[Quick Start Guide](QUICK_START_ENHANCED.md)** - Get up and running in 5 minutes
- **[Complete Guide](README_ENHANCED.md)** - Detailed feature documentation
- **[Mobile Testing](MOBILE_TESTING_GUIDE.md)** - Comprehensive testing checklist
- **[Migration Guide](MIGRATION_GUIDE.md)** - Upgrade from v1.0
- **[After Restart](START_AFTER_RESTART.md)** - Quick restart instructions

## 🎯 Usage

### Adding a Coach
1. Navigate to Coaches page (👨‍🏫)
2. Click "ADD NEW COACH"
3. Enter details and hourly rate
4. Save

### Creating a Package
1. Navigate to Packages page (📦)
2. Click "ADD NEW PACKAGE"
3. Enter student name and package details
4. System auto-calculates total classes
5. Save

### Adding a Lesson
1. Click the green + button (mobile) or "ADD NEW LESSON"
2. Enter student name (auto-detects packages)
3. Select coach
4. Fill in time and hours
5. If student has package, it auto-deducts
6. Save

### Mobile Gestures
- **Swipe left** on lesson → Delete
- **Swipe right** on lesson → Edit
- **Long press** (800ms) → Quick menu
- **Pull down** from top → Refresh

## 🏗️ Tech Stack

- **Backend:** Flask 3.0.0, Python 3.11+
- **Database:** SQLite with SQLAlchemy
- **Frontend:** Bootstrap 5.3, Vanilla JavaScript
- **Scheduler:** APScheduler 3.10.4
- **Excel:** openpyxl 3.1.5

## 📁 Project Structure

```
BillingSoftware/
├── simple_app.py           # Main Flask application
├── models.py               # Database models
├── scheduler.py            # Auto-export scheduler
├── requirements.txt        # Python dependencies
├── simple_billing.db       # SQLite database
├── START_SIMPLE.bat        # Quick start script
├── templates/              # HTML templates
│   ├── simple_index.html   # Home page
│   ├── simple_history.html # History view
│   ├── packages.html       # Package management
│   ├── coaches.html        # Coach management
│   └── notifications.html  # Notification center
├── static/
│   ├── css/
│   │   ├── style.css       # Main styles
│   │   └── mobile.css      # Mobile-specific
│   └── js/
│       ├── main.js         # Core JavaScript
│       └── mobile.js       # Mobile features
└── exports/                # Monthly Excel files
```

## 🔧 Configuration

### Changing Server Port

Edit `simple_app.py`:
```python
app.run(host='0.0.0.0', port=5001, debug=True)  # Change 5001 to desired port
```

### Monthly Export Schedule

Edit `scheduler.py`:
```python
trigger = CronTrigger(
    day='last',  # Last day of month
    hour=23,     # 11 PM
    minute=59    # 59 minutes
)
```

## 📊 Database Schema

### Tables
- **lessons** - Core lesson tracking
- **coaches** - Coach/instructor management
- **student_packages** - Package tracking
- **notifications** - Alert system
- **monthly_exports** - Export history

## 🎨 Screenshots

### Desktop View
- Clean, senior-friendly interface
- Large buttons and text
- Easy navigation

### Mobile View
- Card-based layouts
- Bottom navigation
- Touch-optimized controls
- Swipe gestures

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For issues or questions:
1. Check the documentation in the `docs` folder
2. Review the [FAQ](README_ENHANCED.md#-troubleshooting)
3. Open an issue on GitHub

## 📈 Roadmap

- [ ] User authentication
- [ ] Email notifications
- [ ] SMS reminders
- [ ] Student portal
- [ ] Online payment integration
- [ ] Multi-location support
- [ ] Attendance tracking
- [ ] Progress reports

## 🎉 Acknowledgments

Built with ❤️ for tennis academies and coaches worldwide.

## 📞 Contact

For business inquiries or custom development, please reach out through GitHub.

---

**Version 2.0** - Enhanced with Package Management, Coach Tracking, Automated Exports, and Mobile-First Design

Made with 🎾 for Tennis Academies
