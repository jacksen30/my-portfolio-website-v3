const root = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const themeToggleIcon = document.getElementById('theme-toggle-icon');
const githubStatCard = document.getElementById('github-stat-card');

// Initialize theme from localStorage or set to dark theme if not present
let theme = localStorage.getItem('theme') || 'dark-theme';
root.classList.add(theme);
updateThemeIcon();
updateGithubStatCardTheme();

function updateThemeIcon() {
    if (theme === 'dark-theme') {
        themeToggleIcon.classList.remove('fa-sun');
        themeToggleIcon.classList.add('fa-moon');
    } else {
        themeToggleIcon.classList.remove('fa-moon');
        themeToggleIcon.classList.add('fa-sun');
    }
}


function updateGithubStatCardTheme() {
    if (githubStatCard !== null) {
        theme === 'dark-theme' ?  githubStatCard.src="https://streak-stats.demolab.com?user=jacksen30&theme=dark&hide_border=true&border_radius=0&date_format=j%2Fn%5B%2FY%5D&card_width=450&background=121212&sideNums=339900&currStreakNum=FF8D16&sideLabels=339900" : githubStatCard.src="https://streak-stats.demolab.com?user=jacksen30&theme=dark&hide_border=true&border_radius=0&date_format=j%2Fn%5B%2FY%5D&card_width=450&background=F7F9FC&sideNums=339900&currStreakNum=FF8D16&sideLabels=339900&dates=000000";
    }
}

function toggleTheme() {
    theme === 'dark-theme' ? theme = 'light-theme' : theme = 'dark-theme';

    updateThemeIcon();
    updateGithubStatCardTheme();

    root.className = theme;
    localStorage.setItem('theme', theme);
}


themeToggle.addEventListener('click', () => {
    toggleTheme();
});

