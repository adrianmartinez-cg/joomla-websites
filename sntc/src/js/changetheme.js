const changeThemeBtn = document.querySelector('.change-theme');

changeThemeBtn.addEventListener('click', () => {
    const container = document.querySelector('.container-fluid');
    if(container.classList.contains('light-theme')){
        container.classList.remove('light-theme');
        container.classList.add('dark-theme');
    } else if(container.classList.contains('dark-theme')){
        container.classList.remove('dark-theme');
        container.classList.add('light-theme');
    }
});