"""
Database Models for Enhanced Tennis Billing Software
Includes: Coaches, Student Packages, Notifications, Monthly Exports
"""
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime, date

db = SQLAlchemy()


class Lesson(db.Model):
    """Enhanced Lesson Model with Coach and Package tracking"""
    __tablename__ = 'lessons'
    
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.Date, nullable=False, default=date.today)
    time = db.Column(db.String(50), nullable=False)
    student_name = db.Column(db.String(200), nullable=False)
    hours = db.Column(db.Float, nullable=False)
    package = db.Column(db.String(100))  # Legacy field
    invoice_amount = db.Column(db.Float, nullable=False)
    
    # New fields for enhanced features
    coach_id = db.Column(db.Integer, db.ForeignKey('coaches.id'), nullable=True)
    package_id = db.Column(db.Integer, db.ForeignKey('student_packages.id'), nullable=True)
    deducted_from_package = db.Column(db.Boolean, default=False)
    
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    # Relationships
    coach = db.relationship('Coach', backref='lessons')
    student_package = db.relationship('StudentPackage', backref='lessons')
    
    def to_dict(self):
        return {
            'id': self.id,
            'date': self.date.strftime('%Y-%m-%d'),
            'time': self.time,
            'student_name': self.student_name,
            'hours': self.hours,
            'package': self.package,
            'invoice_amount': self.invoice_amount,
            'coach_id': self.coach_id,
            'coach_name': self.coach.name if self.coach else None,
            'package_id': self.package_id,
            'deducted_from_package': self.deducted_from_package
        }


class Coach(db.Model):
    """Coach/Instructor Model for hour tracking"""
    __tablename__ = 'coaches'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable=False)
    email = db.Column(db.String(200))
    phone = db.Column(db.String(50))
    hourly_rate = db.Column(db.Float, default=0.0)  # For payroll calculations
    status = db.Column(db.String(20), default='active')  # active/inactive
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email,
            'phone': self.phone,
            'hourly_rate': self.hourly_rate,
            'status': self.status,
            'created_at': self.created_at.strftime('%Y-%m-%d %H:%M:%S')
        }
    
    def get_monthly_hours(self, year, month):
        """Calculate total hours for a specific month"""
        from sqlalchemy import extract
        month_lessons = Lesson.query.filter(
            Lesson.coach_id == self.id,
            extract('year', Lesson.date) == year,
            extract('month', Lesson.date) == month
        ).all()
        return sum(lesson.hours for lesson in month_lessons)
    
    def get_daily_breakdown(self, year, month):
        """Get daily breakdown of hours for a month"""
        from sqlalchemy import extract
        month_lessons = Lesson.query.filter(
            Lesson.coach_id == self.id,
            extract('year', Lesson.date) == year,
            extract('month', Lesson.date) == month
        ).order_by(Lesson.date, Lesson.time).all()
        
        breakdown = {}
        for lesson in month_lessons:
            date_key = lesson.date.strftime('%Y-%m-%d')
            if date_key not in breakdown:
                breakdown[date_key] = {
                    'date': lesson.date,
                    'hours': 0,
                    'lessons': 0,
                    'earnings': 0
                }
            breakdown[date_key]['hours'] += lesson.hours
            breakdown[date_key]['lessons'] += 1
            breakdown[date_key]['earnings'] += lesson.hours * self.hourly_rate
        
        return sorted(breakdown.values(), key=lambda x: x['date'])


class StudentPackage(db.Model):
    """Student Package/Plan Model for tracking prepaid lesson packages"""
    __tablename__ = 'student_packages'
    
    id = db.Column(db.Integer, primary_key=True)
    customer_name = db.Column(db.String(200), nullable=False)
    package_name = db.Column(db.String(200), nullable=False)  # e.g., "10 Class Package"
    total_amount = db.Column(db.Float, nullable=False)  # Total paid amount
    amount_per_class = db.Column(db.Float, nullable=False)  # Price per class
    
    # Calculated fields
    total_classes = db.Column(db.Integer, nullable=False)  # total_amount / amount_per_class
    classes_used = db.Column(db.Integer, default=0)
    classes_remaining = db.Column(db.Integer, nullable=False)
    balance_remaining = db.Column(db.Float, nullable=False)
    
    start_date = db.Column(db.Date, default=date.today)
    expiry_date = db.Column(db.Date, nullable=True)
    status = db.Column(db.String(20), default='active')  # active/expired/depleted
    
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    def to_dict(self):
        return {
            'id': self.id,
            'customer_name': self.customer_name,
            'package_name': self.package_name,
            'total_amount': self.total_amount,
            'amount_per_class': self.amount_per_class,
            'total_classes': self.total_classes,
            'classes_used': self.classes_used,
            'classes_remaining': self.classes_remaining,
            'balance_remaining': self.balance_remaining,
            'start_date': self.start_date.strftime('%Y-%m-%d'),
            'expiry_date': self.expiry_date.strftime('%Y-%m-%d') if self.expiry_date else None,
            'status': self.status,
            'status_color': self.get_status_color(),
            'created_at': self.created_at.strftime('%Y-%m-%d')
        }
    
    def get_status_color(self):
        """Return color code based on remaining classes"""
        if self.status != 'active':
            return 'secondary'
        elif self.classes_remaining <= 1:
            return 'danger'  # Red
        elif self.classes_remaining <= 3:
            return 'warning'  # Yellow
        else:
            return 'success'  # Green
    
    def deduct_class(self):
        """Deduct one class from the package"""
        if self.classes_remaining > 0:
            self.classes_used += 1
            self.classes_remaining -= 1
            self.balance_remaining = self.classes_remaining * self.amount_per_class
            
            if self.classes_remaining == 0:
                self.status = 'depleted'
            
            self.updated_at = datetime.utcnow()
            return True
        return False
    
    def needs_renewal_alert(self):
        """Check if package needs renewal alert"""
        return self.status == 'active' and self.classes_remaining <= 1


class Notification(db.Model):
    """Notification Model for alerts and messages"""
    __tablename__ = 'notifications'
    
    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(50), nullable=False)  # package_expiring, monthly_export, coach_milestone
    title = db.Column(db.String(200), nullable=False)
    message = db.Column(db.Text, nullable=False)
    priority = db.Column(db.String(20), default='medium')  # low/medium/high
    
    # Related entities
    student_name = db.Column(db.String(200))
    package_id = db.Column(db.Integer, db.ForeignKey('student_packages.id'), nullable=True)
    coach_id = db.Column(db.Integer, db.ForeignKey('coaches.id'), nullable=True)
    
    is_read = db.Column(db.Boolean, default=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    # Relationships
    package = db.relationship('StudentPackage', backref='notifications')
    coach = db.relationship('Coach', backref='notifications')
    
    def to_dict(self):
        return {
            'id': self.id,
            'type': self.type,
            'title': self.title,
            'message': self.message,
            'priority': self.priority,
            'student_name': self.student_name,
            'package_id': self.package_id,
            'coach_id': self.coach_id,
            'is_read': self.is_read,
            'created_at': self.created_at.strftime('%Y-%m-%d %H:%M:%S'),
            'time_ago': self.get_time_ago()
        }
    
    def get_time_ago(self):
        """Get human-readable time ago"""
        now = datetime.utcnow()
        diff = now - self.created_at
        
        seconds = diff.total_seconds()
        
        if seconds < 60:
            return "just now"
        elif seconds < 3600:
            minutes = int(seconds / 60)
            return f"{minutes} minute{'s' if minutes != 1 else ''} ago"
        elif seconds < 86400:
            hours = int(seconds / 3600)
            return f"{hours} hour{'s' if hours != 1 else ''} ago"
        else:
            days = int(seconds / 86400)
            return f"{days} day{'s' if days != 1 else ''} ago"


class MonthlyExport(db.Model):
    """Monthly Export Model for tracking auto-generated Excel reports"""
    __tablename__ = 'monthly_exports'
    
    id = db.Column(db.Integer, primary_key=True)
    month = db.Column(db.Integer, nullable=False)  # 1-12
    year = db.Column(db.Integer, nullable=False)
    month_name = db.Column(db.String(20), nullable=False)  # January, February, etc.
    filename = db.Column(db.String(200), nullable=False)
    file_path = db.Column(db.String(500), nullable=False)
    
    # Statistics
    total_lessons = db.Column(db.Integer, default=0)
    total_revenue = db.Column(db.Float, default=0.0)
    total_hours = db.Column(db.Float, default=0.0)
    
    exported_by = db.Column(db.String(100), default='system')  # system/manual
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    def to_dict(self):
        return {
            'id': self.id,
            'month': self.month,
            'year': self.year,
            'month_name': self.month_name,
            'filename': self.filename,
            'file_path': self.file_path,
            'total_lessons': self.total_lessons,
            'total_revenue': self.total_revenue,
            'total_hours': self.total_hours,
            'exported_by': self.exported_by,
            'created_at': self.created_at.strftime('%Y-%m-%d %H:%M:%S')
        }
