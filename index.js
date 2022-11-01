HTMLElement.prototype.show = function (display = 'block') {
    this.style.display = display;

    return this;
};

HTMLElement.prototype.hide = function () {
    this.style.display = 'none';

    return this;
};

HTMLElement.prototype.toggle = function (toggle, display = 'block') {
    return toggle ? this.show(display) : this.hide();
};

HTMLElement.prototype.outerWidth = function() {
    const styles = window.getComputedStyle(this, null);

    return this.offsetWidth +
        parseFloat(styles['marginLeft']) +
        parseFloat(styles['marginRight']);
};

HTMLElement.prototype.outerHeight = function() {
    const styles = window.getComputedStyle(this, null);

    return this.offsetHeight +
        parseFloat(styles['marginTop']) +
        parseFloat(styles['marginBottom']);
};
