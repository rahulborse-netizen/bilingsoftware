/**
 * Minimal Bootstrap JS Replacement - Works Offline
 * Provides basic modal and toast functionality without external dependencies
 */

// Modal functionality
class SimpleModal {
    constructor(element) {
        this.element = element;
        this.backdrop = null;
    }
    
    show() {
        // Create backdrop
        this.backdrop = document.createElement('div');
        this.backdrop.className = 'modal-backdrop';
        this.backdrop.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            z-index: 1040;
        `;
        document.body.appendChild(this.backdrop);
        
        // Show modal
        this.element.style.display = 'block';
        this.element.style.zIndex = '1050';
        this.element.classList.add('show');
        document.body.style.overflow = 'hidden';
        
        // Close on backdrop click
        this.backdrop.addEventListener('click', () => this.hide());
    }
    
    hide() {
        if (this.backdrop) {
            this.backdrop.remove();
            this.backdrop = null;
        }
        this.element.style.display = 'none';
        this.element.classList.remove('show');
        document.body.style.overflow = '';
    }
}

// Toast functionality
class SimpleToast {
    constructor(element, options) {
        this.element = element;
        this.options = options || {};
        this.timeout = null;
    }
    
    show() {
        this.element.style.display = 'block';
        this.element.classList.add('show');
        
        const delay = this.options.delay || 3000;
        if (delay > 0) {
            this.timeout = setTimeout(() => this.hide(), delay);
        }
    }
    
    hide() {
        this.element.classList.remove('show');
        setTimeout(() => {
            this.element.style.display = 'none';
        }, 300);
    }
}

// Bootstrap compatibility
window.bootstrap = {
    Modal: SimpleModal,
    Toast: SimpleToast
};

// Auto-initialize modals
document.addEventListener('DOMContentLoaded', function() {
    // Handle modal triggers
    document.querySelectorAll('[data-bs-toggle="modal"]').forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-bs-target') || this.getAttribute('href');
            const modalElement = document.querySelector(targetId);
            if (modalElement) {
                const modal = new SimpleModal(modalElement);
                modal.show();
            }
        });
    });
    
    // Handle modal close buttons
    document.querySelectorAll('[data-bs-dismiss="modal"]').forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) {
                const bsModal = new SimpleModal(modal);
                bsModal.hide();
            }
        });
    });
});
