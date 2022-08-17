(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const modeButton = document.getElementById('mode-switch');
        const bodyElements = document.getElementsByTagName('body');

        if(modeButton.checked) {
            bodyElements[0].classList.toggle('dark-mode');
        }

        modeButton.addEventListener('change', ()=>{
            bodyElements[0].classList.toggle('dark-mode');
        });
    });
})();