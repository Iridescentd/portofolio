tailwind.config = { darkMode: 'class' };
        
function toggleDarkMode() {
    const html = document.documentElement;
    html.classList.toggle('dark');

    // Save theme preference
    if (html.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Check local storage for theme preference
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.classList.add('dark');
    }
});