"""
Download Script for Offline Assets
Run this script once to download Bootstrap and Chart.js for offline use
"""
import os
import urllib.request
import sys
from pathlib import Path

# Fix Windows console encoding
if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

# Create lib directory if it doesn't exist
lib_dir = Path('static/lib')
lib_dir.mkdir(parents=True, exist_ok=True)

# URLs to download
assets = {
    'bootstrap.min.css': 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
    'bootstrap.bundle.min.js': 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
    'chart.umd.min.js': 'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js'
}

print("Downloading offline assets...")
print("=" * 50)

for filename, url in assets.items():
    filepath = lib_dir / filename
    if filepath.exists():
        print(f"[OK] {filename} already exists, skipping...")
        continue
    
    try:
        print(f"Downloading {filename}...")
        urllib.request.urlretrieve(url, filepath)
        print(f"[OK] Downloaded {filename}")
    except Exception as e:
        print(f"[ERROR] Error downloading {filename}: {e}")
        print(f"  You can manually download from: {url}")

print("=" * 50)
print("Done! Your app is now ready for offline use.")
print("\nNote: The app will work with fallback scripts even if downloads fail.")
