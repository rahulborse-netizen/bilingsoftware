/**
 * Simple Chart Library - Works Offline
 * Lightweight alternative to Chart.js for basic charts
 */

class SimpleChart {
    constructor(canvasId, options) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) {
            console.error(`Canvas element ${canvasId} not found`);
            return;
        }
        this.ctx = this.canvas.getContext('2d');
        this.options = options || {};
        this.data = null;
    }
    
    renderLine(data) {
        const { labels, datasets } = data;
        const width = this.canvas.width;
        const height = this.canvas.height;
        const padding = 40;
        const chartWidth = width - padding * 2;
        const chartHeight = height - padding * 2;
        
        // Clear canvas
        this.ctx.clearRect(0, 0, width, height);
        
        // Draw axes
        this.ctx.strokeStyle = '#ccc';
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.moveTo(padding, padding);
        this.ctx.lineTo(padding, height - padding);
        this.ctx.lineTo(width - padding, height - padding);
        this.ctx.stroke();
        
        // Draw line
        if (datasets && datasets[0] && datasets[0].data) {
            const values = datasets[0].data;
            const max = Math.max(...values, 1);
            const min = Math.min(...values, 0);
            const range = max - min || 1;
            
            this.ctx.strokeStyle = datasets[0].borderColor || '#667eea';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            
            values.forEach((value, i) => {
                const x = padding + (i / (values.length - 1 || 1)) * chartWidth;
                const y = height - padding - ((value - min) / range) * chartHeight;
                
                if (i === 0) {
                    this.ctx.moveTo(x, y);
                } else {
                    this.ctx.lineTo(x, y);
                }
            });
            this.ctx.stroke();
        }
    }
    
    renderBar(data) {
        const { labels, datasets } = data;
        const width = this.canvas.width;
        const height = this.canvas.height;
        const padding = 40;
        const chartWidth = width - padding * 2;
        const chartHeight = height - padding * 2;
        
        this.ctx.clearRect(0, 0, width, height);
        
        if (datasets && datasets[0] && datasets[0].data) {
            const values = datasets[0].data;
            const max = Math.max(...values, 1);
            const barWidth = chartWidth / values.length * 0.8;
            const barSpacing = chartWidth / values.length * 0.2;
            
            this.ctx.fillStyle = datasets[0].backgroundColor || '#38ef7d';
            
            values.forEach((value, i) => {
                const x = padding + i * (barWidth + barSpacing);
                const barHeight = (value / max) * chartHeight;
                const y = height - padding - barHeight;
                
                this.ctx.fillRect(x, y, barWidth, barHeight);
            });
        }
    }
    
    renderDoughnut(data) {
        const { labels, datasets } = data;
        const width = this.canvas.width;
        const height = this.canvas.height;
        const centerX = width / 2;
        const centerY = height / 2;
        const radius = Math.min(width, height) / 2 - 20;
        
        this.ctx.clearRect(0, 0, width, height);
        
        if (datasets && datasets[0] && datasets[0].data) {
            const values = datasets[0].data;
            const colors = datasets[0].backgroundColor || ['#667eea', '#11998e', '#f5576c', '#4facfe', '#f093fb'];
            const total = values.reduce((a, b) => a + b, 0);
            
            let currentAngle = -Math.PI / 2;
            
            values.forEach((value, i) => {
                const sliceAngle = (value / total) * 2 * Math.PI;
                
                this.ctx.beginPath();
                this.ctx.moveTo(centerX, centerY);
                this.ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
                this.ctx.closePath();
                this.ctx.fillStyle = colors[i % colors.length];
                this.ctx.fill();
                
                currentAngle += sliceAngle;
            });
        }
    }
    
    renderPie(data) {
        this.renderDoughnut(data);
    }
}

// Chart.js compatibility wrapper
window.Chart = class {
    constructor(ctx, config) {
        const canvas = ctx.canvas;
        canvas.width = canvas.offsetWidth || 400;
        canvas.height = canvas.offsetHeight || 300;
        
        const chart = new SimpleChart(canvas.id, config.options);
        
        if (config.type === 'line') {
            chart.renderLine(config.data);
        } else if (config.type === 'bar') {
            chart.renderBar(config.data);
        } else if (config.type === 'doughnut' || config.type === 'pie') {
            chart.renderDoughnut(config.data);
        }
        
        return chart;
    }
};
