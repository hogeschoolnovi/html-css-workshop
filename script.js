document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('opacity-slider');
    const valueDisplay = document.getElementById('opacity-value');
    const designReference = document.querySelector('.design-reference');
    const layerToggle = document.getElementById('layer-position');

    // Update opacity when slider changes
    slider.addEventListener('input', function () {
        const value = this.value;
        const opacity = value / 100;

        designReference.style.opacity = opacity;
        valueDisplay.textContent = value + '%';
    });

    // Toggle z-index when checkbox changes
    layerToggle.addEventListener('change', function () {
        designReference.style.zIndex = this.checked ? '1' : '3';
    });
}); 