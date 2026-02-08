# 🎾 Tennis Billing Software

A comprehensive, **fully offline-capable** tennis academy management system with package tracking, coach management, automated reporting, and analytics dashboard.

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

### 📊 **Analytics Dashboard** (NEW!)
- Revenue trends (last 30 days)
- Coach performance metrics
- Student statistics
- Package status overview
- Interactive charts and graphs
- Top 5 students & coaches leaderboards

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
- PWA support (installable as app)

### 🌐 **100% Offline Capable** (NEW!)
- ✅ Works completely offline (no internet required)
- ✅ Service Worker for caching
- ✅ PWA manifest for app installation
- ✅ All assets bundled locally
- ✅ Offline fallback scripts included

## 🚀 Quick Start

### Prerequisites
- Python 3.10 or higher
- pip (Python package manager)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rahulborse-netizen/bilingsoftware.git
   cd bilingsoftware
   ```

2. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Download offline assets (optional but recommended):**
   ```bash
   python download_offline_assets.py
   ```
   *Note: App works with fallback scripts even without this step!*

4. **Start the server:**
   ```bash
   python simple_app.py
   ```

5. **Access the application:**
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

## 🌐 Offline Mode

The app is **100% offline-capable**! After the first visit (to cache assets), it works completely without internet.

### Testing Offline Mode:
1. Open the app in browser
2. Open DevTools (F12) → Network tab
3. Check "Offline" checkbox
4. Refresh - **Everything still works!** ✅

See `OFFLINE_README.md` for detailed offline setup instructions.

## 📖 Documentation

- **Quick Start**: This README
- **Offline Setup**: `OFFLINE_SETUP.md` or `OFFLINE_README.md`
- **Deployment**: `DEPLOYMENT.md`
- **Changelog**: `CHANGELOG.md`

## 🏗️ Tech Stack

- **Backend:** Flask 3.0.0, Python 3.11+
- **Database:** SQLite with SQLAlchemy
- **Frontend:** Bootstrap 5.3 (local), Vanilla JavaScript
- **Charts:** Chart.js 4.4.0 (local) + offline fallback
- **Scheduler:** APScheduler 3.10.4
- **Excel:** openpyxl 3.1.5

## 📁 Project Structure

```
bilingsoftware/
├── simple_app.py              # Main Flask application
├── models.py                  # Database models
├── scheduler.py               # Auto-export scheduler
├── requirements.txt           # Python dependencies
├── download_offline_assets.py # Download script for offline assets
├── Procfile                   # Heroku/Render deployment
├── wsgi.py                    # WSGI entry point
├── gunicorn_config.py         # Production server config
├── templates/                 # HTML templates
│   ├── base.html              # Modern base template
│   ├── simple_index.html     # Home page
│   ├── simple_history.html   # History view
│   ├── packages.html         # Package management
│   ├── coaches.html          # Coach management
│   ├── notifications.html    # Notification center
│   └── analytics.html        # Analytics dashboard (NEW!)
├── static/
│   ├── lib/                  # Offline assets
│   │   ├── bootstrap.min.css
│   │   ├── bootstrap.bundle.min.js
│   │   ├── chart.umd.min.js
│   │   └── icons.css
│   ├── css/
│   │   ├── style.css
│   │   ├── mobile.css
│   │   └── bootstrap-fallback.css
│   ├── js/
│   │   ├── main.js
│   │   ├── mobile.js
│   │   ├── offline-bootstrap.js
│   │   └── offline-charts.js
│   ├── sw.js                  # Service Worker (offline support)
│   └── manifest.json          # PWA Manifest
└── exports/                   # Monthly Excel files
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

## 🚀 Deployment

The app is ready to deploy on:
- **Render.com** (recommended - free tier)
- **Railway.app** (easy deployment)
- **Heroku** (classic platform)
- **VPS** (DigitalOcean, AWS, etc.)

See `DEPLOYMENT.md` for detailed instructions.

## 📊 Database Schema

### Tables
- **lessons** - Core lesson tracking
- **coaches** - Coach/instructor management
- **student_packages** - Package tracking
- **notifications** - Alert system
- **monthly_exports** - Export history

## 🎨 Features Overview

### Desktop View
- Clean, modern interface
- Large buttons and text
- Easy navigation
- Analytics dashboard with charts

### Mobile View
- Card-based layouts
- Bottom navigation
- Touch-optimized controls
- Swipe gestures
- PWA installable

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

For issues or questions:
1. Check the documentation files
2. Review the FAQ
3. Open an issue on GitHub

## 🎉 Acknowledgments

Built with ❤️ for tennis academies and coaches worldwide.

---

**Version 2.1** - Enhanced with Analytics Dashboard, Offline Support, Modern UI, and Production Deployment Ready

Made with 🎾 for Tennis Academies
