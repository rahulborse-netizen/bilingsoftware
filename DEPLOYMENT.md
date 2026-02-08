# Deployment Guide - Tennis Billing Software

## Quick Deploy Options

### Option 1: Render.com (Recommended - Free Tier Available)

1. **Create Account**: Sign up at [render.com](https://render.com)

2. **New Web Service**:
   - Connect your GitHub repository
   - Select the `bilingsoftware` repository
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `gunicorn simple_app:app --bind 0.0.0.0:$PORT`

3. **Environment Variables** (in Render dashboard):
   ```
   FLASK_ENV=production
   SECRET_KEY=your-random-secret-key-here
   PORT=10000
   ```

4. **Deploy**: Click "Create Web Service"

Your app will be live at: `https://your-app-name.onrender.com`

---

### Option 2: Railway.app

1. **Create Account**: Sign up at [railway.app](https://railway.app)

2. **New Project**:
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository

3. **Configure**:
   - Railway auto-detects Python
   - Add environment variables in Settings:
     ```
     FLASK_ENV=production
     SECRET_KEY=your-secret-key
     ```

4. **Deploy**: Railway automatically deploys on git push

---

### Option 3: Heroku

1. **Install Heroku CLI**: [heroku.com/cli](https://devcenter.heroku.com/articles/heroku-cli)

2. **Login & Create App**:
   ```bash
   heroku login
   heroku create your-app-name
   ```

3. **Set Environment Variables**:
   ```bash
   heroku config:set FLASK_ENV=production
   heroku config:set SECRET_KEY=your-secret-key
   ```

4. **Deploy**:
   ```bash
   git push heroku main
   ```

---

### Option 4: VPS (DigitalOcean, AWS, etc.)

1. **SSH into your server**

2. **Install Dependencies**:
   ```bash
   sudo apt update
   sudo apt install python3-pip python3-venv nginx
   ```

3. **Clone & Setup**:
   ```bash
   git clone https://github.com/your-username/bilingsoftware.git
   cd bilingsoftware
   python3 -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   ```

4. **Create Systemd Service** (`/etc/systemd/system/tennis-billing.service`):
   ```ini
   [Unit]
   Description=Tennis Billing Gunicorn
   After=network.target

   [Service]
   User=www-data
   Group=www-data
   WorkingDirectory=/path/to/bilingsoftware
   Environment="PATH=/path/to/bilingsoftware/venv/bin"
   ExecStart=/path/to/bilingsoftware/venv/bin/gunicorn --config gunicorn_config.py simple_app:app

   [Install]
   WantedBy=multi-user.target
   ```

5. **Start Service**:
   ```bash
   sudo systemctl start tennis-billing
   sudo systemctl enable tennis-billing
   ```

6. **Configure Nginx** (`/etc/nginx/sites-available/tennis-billing`):
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           proxy_pass http://127.0.0.1:5001;
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
       }
   }
   ```

7. **Enable Site**:
   ```bash
   sudo ln -s /etc/nginx/sites-available/tennis-billing /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx
   ```

---

## Environment Variables

Create a `.env` file (or set in your hosting platform):

```env
FLASK_ENV=production
SECRET_KEY=change-this-to-a-random-string
PORT=5001
DATABASE_URL=sqlite:///simple_billing.db
```

**Generate a secure SECRET_KEY**:
```python
import secrets
print(secrets.token_hex(32))
```

---

## Database Migration

If you need to migrate data:

```bash
flask db init
flask db migrate -m "Initial migration"
flask db upgrade
```

---

## Production Checklist

- [ ] Set `FLASK_ENV=production`
- [ ] Set a strong `SECRET_KEY`
- [ ] Use PostgreSQL instead of SQLite for production (optional)
- [ ] Enable HTTPS/SSL (Let's Encrypt)
- [ ] Set up regular database backups
- [ ] Configure email notifications (optional)
- [ ] Set up monitoring/logging
- [ ] Test all features after deployment

---

## Troubleshooting

### App won't start
- Check logs: `heroku logs --tail` or check your platform's logs
- Verify all dependencies in `requirements.txt`
- Check environment variables are set

### Database errors
- Ensure database file has write permissions
- For SQLite: Check file path is correct
- For PostgreSQL: Verify connection string

### Port errors
- Ensure `PORT` environment variable is set
- Check firewall rules allow the port

---

## Support

For issues, check:
1. Application logs
2. Server logs
3. Browser console (F12)
4. Network tab for API errors
