/**
 * Mobile-Specific JavaScript for Tennis Billing App
 * Includes: Swipe gestures, touch interactions, PWA features
 */

// Touch/Swipe handling variables
let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;
let currentSwipeElement = null;

/**
 * Handle touch start event
 */
function handleTouchStart(event, lessonId) {
    touchStartX = event.changedTouches[0].screenX;
    touchStartY = event.changedTouches[0].screenY;
    currentSwipeElement = event.currentTarget;
}

/**
 * Handle touch move event
 */
function handleTouchMove(event) {
    if (!currentSwipeElement) return;
    
    touchEndX = event.changedTouches[0].screenX;
    touchEndY = event.changedTouches[0].screenY;
    
    const diffX = touchEndX - touchStartX;
    const diffY = Math.abs(touchEndY - touchStartY);
    
    // Only swipe horizontally if vertical movement is minimal
    if (diffY < 50) {
        if (diffX < -50) {
            currentSwipeElement.classList.add('swiping-left');
            currentSwipeElement.classList.remove('swiping-right');
        } else if (diffX > 50) {
            currentSwipeElement.classList.add('swiping-right');
            currentSwipeElement.classList.remove('swiping-left');
        }
    }
}

/**
 * Handle touch end event
 */
function handleTouchEnd(event) {
    if (!currentSwipeElement) return;
    
    touchEndX = event.changedTouches[0].screenX;
    touchEndY = event.changedTouches[0].screenY;
    
    const diffX = touchEndX - touchStartX;
    const diffY = Math.abs(touchEndY - touchStartY);
    
    // Only process swipe if vertical movement is minimal
    if (diffY < 50) {
        handleSwipeGesture(diffX, currentSwipeElement);
    }
    
    // Reset swipe classes
    currentSwipeElement.classList.remove('swiping-left', 'swiping-right');
    currentSwipeElement = null;
}

/**
 * Process swipe gesture
 */
function handleSwipeGesture(diffX, element) {
    const threshold = 100; // Minimum swipe distance
    
    if (diffX < -threshold) {
        // Swipe left - Delete
        const lessonId = element.dataset.id;
        if (confirm('Delete this lesson?')) {
            deleteLesson(parseInt(lessonId));
        }
    } else if (diffX > threshold) {
        // Swipe right - Edit
        const lessonId = element.dataset.id;
        // Extract lesson data from the card
        const studentName = element.querySelector('.lesson-student').textContent;
        const time = element.querySelector('.lesson-time').textContent.replace('🕐 ', '');
        
        // Trigger edit modal (this assumes editLesson function exists)
        if (typeof editLesson === 'function') {
            // We'll need to fetch the full lesson data
            fetchLessonAndEdit(lessonId);
        }
    }
}

/**
 * Fetch lesson data and open edit modal
 */
function fetchLessonAndEdit(lessonId) {
    fetch(`/api/lessons/${lessonId}`)
        .then(r => r.json())
        .then(data => {
            if (data.success && typeof editLesson === 'function') {
                editLesson(data.lesson);
            }
        })
        .catch(err => console.error('Error fetching lesson:', err));
}

/**
 * Pull-to-refresh functionality
 */
let pullStartY = 0;
let pullCurrentY = 0;
let isPulling = false;

document.addEventListener('touchstart', function(e) {
    if (window.scrollY === 0) {
        pullStartY = e.touches[0].clientY;
        isPulling = true;
    }
}, {passive: true});

document.addEventListener('touchmove', function(e) {
    if (!isPulling) return;
    
    pullCurrentY = e.touches[0].clientY;
    const pullDistance = pullCurrentY - pullStartY;
    
    if (pullDistance > 100 && window.scrollY === 0) {
        // Show refresh indicator
        showRefreshIndicator();
    }
}, {passive: true});

document.addEventListener('touchend', function(e) {
    if (!isPulling) return;
    
    const pullDistance = pullCurrentY - pullStartY;
    
    if (pullDistance > 100 && window.scrollY === 0) {
        // Trigger refresh
        location.reload();
    }
    
    hideRefreshIndicator();
    isPulling = false;
    pullStartY = 0;
    pullCurrentY = 0;
}, {passive: true});

/**
 * Show refresh indicator
 */
function showRefreshIndicator() {
    let indicator = document.getElementById('refreshIndicator');
    if (!indicator) {
        indicator = document.createElement('div');
        indicator.id = 'refreshIndicator';
        indicator.style.cssText = `
            position: fixed;
            top: 10px;
            left: 50%;
            transform: translateX(-50%);
            background: #007bff;
            color: white;
            padding: 15px 30px;
            border-radius: 25px;
            font-size: 18px;
            font-weight: bold;
            z-index: 9999;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        `;
        indicator.textContent = '↓ Release to refresh';
        document.body.appendChild(indicator);
    }
    indicator.style.display = 'block';
}

/**
 * Hide refresh indicator
 */
function hideRefreshIndicator() {
    const indicator = document.getElementById('refreshIndicator');
    if (indicator) {
        indicator.style.display = 'none';
    }
}

/**
 * Haptic feedback (vibration)
 */
function hapticFeedback(pattern = [50]) {
    if ('vibrate' in navigator) {
        navigator.vibrate(pattern);
    }
}

/**
 * Add haptic feedback to buttons
 */
document.addEventListener('DOMContentLoaded', function() {
    // Add haptic feedback to all buttons on touch
    const buttons = document.querySelectorAll('button, .btn, .bottom-nav-item');
    buttons.forEach(button => {
        button.addEventListener('touchstart', function() {
            hapticFeedback([10]);
        }, {passive: true});
    });
    
    // Handle orientation change
    window.addEventListener('orientationchange', function() {
        // Slight delay to let the orientation settle
        setTimeout(() => {
            // Adjust any layouts if needed
            adjustLayoutForOrientation();
        }, 100);
    });
    
    // Prevent double-tap zoom on buttons
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function(event) {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
    
    // Add loading indicators to forms
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function() {
            showLoadingIndicator();
        });
    });
});

/**
 * Adjust layout based on orientation
 */
function adjustLayoutForOrientation() {
    const isLandscape = window.matchMedia('(orientation: landscape)').matches;
    
    if (isLandscape) {
        // Landscape mode adjustments
        document.body.classList.add('landscape-mode');
        document.body.classList.remove('portrait-mode');
    } else {
        // Portrait mode adjustments
        document.body.classList.add('portrait-mode');
        document.body.classList.remove('landscape-mode');
    }
}

/**
 * Show loading indicator
 */
function showLoadingIndicator() {
    let loader = document.getElementById('loadingIndicator');
    if (!loader) {
        loader = document.createElement('div');
        loader.id = 'loadingIndicator';
        loader.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 30px 50px;
            border-radius: 15px;
            font-size: 24px;
            font-weight: bold;
            z-index: 99999;
            text-align: center;
        `;
        loader.innerHTML = `
            <div class="spinner-border text-light mb-3" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div>Loading...</div>
        `;
        document.body.appendChild(loader);
    }
    loader.style.display = 'block';
}

/**
 * Hide loading indicator
 */
function hideLoadingIndicator() {
    const loader = document.getElementById('loadingIndicator');
    if (loader) {
        loader.style.display = 'none';
    }
}

/**
 * Auto-hide loading indicator after page load
 */
window.addEventListener('load', function() {
    hideLoadingIndicator();
});

/**
 * Smooth scroll behavior
 */
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll to top on navigation
    const navLinks = document.querySelectorAll('.bottom-nav-item');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hapticFeedback([20]);
        });
    });
});

/**
 * Long press detection (for additional actions)
 */
let longPressTimer = null;

function handleLongPressStart(event, callback) {
    longPressTimer = setTimeout(() => {
        hapticFeedback([50, 100, 50]);
        if (typeof callback === 'function') {
            callback(event);
        }
    }, 800); // 800ms for long press
}

function handleLongPressEnd() {
    if (longPressTimer) {
        clearTimeout(longPressTimer);
        longPressTimer = null;
    }
}

// Add long press to lesson cards
document.addEventListener('DOMContentLoaded', function() {
    const lessonCards = document.querySelectorAll('.lesson-card');
    lessonCards.forEach(card => {
        card.addEventListener('touchstart', function(e) {
            handleLongPressStart(e, function() {
                // Show options menu
                showQuickActions(card);
            });
        });
        
        card.addEventListener('touchend', handleLongPressEnd);
        card.addEventListener('touchmove', handleLongPressEnd);
    });
});

/**
 * Show quick actions menu
 */
function showQuickActions(element) {
    const lessonId = element.dataset.id;
    
    // Create quick actions menu
    let menu = document.getElementById('quickActionsMenu');
    if (menu) {
        menu.remove();
    }
    
    menu = document.createElement('div');
    menu.id = 'quickActionsMenu';
    menu.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: white;
        border: 3px solid #dee2e6;
        border-radius: 15px;
        padding: 20px;
        z-index: 9999;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        animation: slideUp 0.3s ease;
    `;
    
    menu.innerHTML = `
        <div style="font-size: 24px; font-weight: bold; margin-bottom: 15px; text-align: center;">
            Quick Actions
        </div>
        <button class="btn btn-warning w-100 mb-2" style="font-size: 22px; padding: 15px;" onclick="fetchLessonAndEdit(${lessonId}); document.getElementById('quickActionsMenu').remove();">
            ✏️ Edit
        </button>
        <button class="btn btn-danger w-100 mb-2" style="font-size: 22px; padding: 15px;" onclick="deleteLesson(${lessonId}); document.getElementById('quickActionsMenu').remove();">
            🗑️ Delete
        </button>
        <button class="btn btn-secondary w-100" style="font-size: 22px; padding: 15px;" onclick="document.getElementById('quickActionsMenu').remove();">
            Cancel
        </button>
    `;
    
    document.body.appendChild(menu);
    
    // Add slide up animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideUp {
            from {
                transform: translateX(-50%) translateY(100%);
                opacity: 0;
            }
            to {
                transform: translateX(-50%) translateY(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Close menu when tapping outside
    setTimeout(() => {
        document.addEventListener('click', function closeMenu(e) {
            if (!menu.contains(e.target)) {
                menu.remove();
                document.removeEventListener('click', closeMenu);
            }
        });
    }, 100);
}

/**
 * Detect if app is installed as PWA
 */
function isStandalone() {
    return window.matchMedia('(display-mode: standalone)').matches || 
           window.navigator.standalone || 
           document.referrer.includes('android-app://');
}

/**
 * Show install prompt for PWA
 */
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    
    // Show install button if not standalone
    if (!isStandalone()) {
        showInstallPrompt();
    }
});

function showInstallPrompt() {
    const banner = document.createElement('div');
    banner.id = 'installBanner';
    banner.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: #007bff;
        color: white;
        padding: 15px;
        text-align: center;
        font-size: 18px;
        z-index: 9999;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    `;
    banner.innerHTML = `
        <div>📱 Install Tennis Billing App for quick access!</div>
        <button onclick="installApp()" style="background: white; color: #007bff; border: none; padding: 10px 20px; border-radius: 8px; font-weight: bold; margin: 10px 10px 0 0;">
            Install
        </button>
        <button onclick="document.getElementById('installBanner').remove()" style="background: transparent; color: white; border: 2px solid white; padding: 10px 20px; border-radius: 8px; font-weight: bold; margin: 10px 0 0 0;">
            Later
        </button>
    `;
    document.body.insertBefore(banner, document.body.firstChild);
}

async function installApp() {
    if (!deferredPrompt) return;
    
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
        console.log('User accepted the install prompt');
        hapticFeedback([50, 100, 50]);
    }
    
    deferredPrompt = null;
    const banner = document.getElementById('installBanner');
    if (banner) banner.remove();
}

/**
 * Check for updates
 */
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(err => {
        console.log('Service worker registration failed:', err);
    });
}

// Make functions globally available
window.handleTouchStart = handleTouchStart;
window.handleTouchMove = handleTouchMove;
window.handleTouchEnd = handleTouchEnd;
window.fetchLessonAndEdit = fetchLessonAndEdit;
window.hapticFeedback = hapticFeedback;
window.installApp = installApp;

console.log('📱 Mobile features loaded successfully!');
