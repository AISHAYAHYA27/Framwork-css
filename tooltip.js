
class Tooltip {
    static bind(selector) {
        document.querySelectorAll(selector).forEach(element => new Tooltip(element));
    }

    constructor(element) {
        this.element = element;
        this.title = element.getAttribute('title'); 
        if (!this.title) return; 

        this.element.addEventListener('mouseover', this.mouseOver.bind(this));
        this.element.addEventListener('mouseout', this.mouseOut.bind(this));
    }

    mouseOver() {
        this.tooltip = document.createElement('div');
        this.tooltip.className = 'tooltip-box';
        this.tooltip.innerHTML = this.title;
        document.body.appendChild(this.tooltip);
        
        let rect = this.element.getBoundingClientRect();
        let placement = this.element.getAttribute('data-placement') || 'top';
        
       
        const placements = {
            top: () => {
                this.tooltip.style.left = rect.left + window.scrollX + 'px';
                this.tooltip.style.top = (rect.top + window.scrollY - this.tooltip.offsetHeight) + 'px';
            },
            bottom: () => {
                this.tooltip.style.left = rect.left + window.scrollX + 'px';
                this.tooltip.style.top = (rect.bottom + window.scrollY) + 'px';
            },
            left: () => {
                this.tooltip.style.left = (rect.left + window.scrollX - this.tooltip.offsetWidth) + 'px';
                this.tooltip.style.top = rect.top + window.scrollY + 'px';
            },
            right: () => {
                this.tooltip.style.left = (rect.right + window.scrollX) + 'px';
                this.tooltip.style.top = rect.top + window.scrollY + 'px';
            }
        };
        
       
        (placements[placement] || placements.top)(); 

        this.tooltip.style.position = 'absolute';
        this.tooltip.style.background = 'black';
        this.tooltip.style.color = 'white';
        this.tooltip.style.padding = '5px 10px';
        this.tooltip.style.borderRadius = '5px';
        this.tooltip.style.fontSize = '12px';
    }

    mouseOut() {
        if (this.tooltip) {
            document.body.removeChild(this.tooltip);
            this.tooltip = null;
        }
    }
}


document.addEventListener("DOMContentLoaded", () => {
    Tooltip.bind('.tooltip');
});