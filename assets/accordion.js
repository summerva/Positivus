function initAccordion() {
    const workingItems = document.querySelectorAll('.working-item');

    workingItems.forEach((item) => {
        const header = item.querySelector('.working-header');
        const toggle = item.querySelector('.working-toggle');

        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            workingItems.forEach((otherItem) => {
                otherItem.classList.remove('active');
                const otherToggle = otherItem.querySelector('.working-toggle');
                otherToggle.textContent = '+';
            });

            if (!isActive) {
                item.classList.add('active');
                toggle.textContent = '-';
            }
        });
    });
}

export { initAccordion };
