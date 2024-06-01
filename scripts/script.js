const root = document.documentElement;
const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModeToggleIcon = document.getElementById('dark-mode-toggle-icon');
const githubStatCard = document.getElementById('github-stat-card');


darkModeToggle.addEventListener('click', () => {
    root.classList.toggle('light-theme');

    if (root.classList.contains('light-theme')) {
        darkModeToggleIcon.classList.remove('fa-moon');
        darkModeToggleIcon.classList.add('fa-sun');
        githubStatCard.src="https://streak-stats.demolab.com?user=jacksen30&theme=dark&hide_border=true&border_radius=0&date_format=j%2Fn%5B%2FY%5D&card_width=450&background=F7F9FC&sideNums=339900&currStreakNum=FF8D16&sideLabels=339900&dates=000000";
    } else {
        darkModeToggleIcon.classList.remove('fa-sun');
        darkModeToggleIcon.classList.add('fa-moon');
        githubStatCard.src="https://streak-stats.demolab.com?user=jacksen30&theme=dark&hide_border=true&border_radius=0&date_format=j%2Fn%5B%2FY%5D&card_width=450&background=121212&sideNums=339900&currStreakNum=FF8D16&sideLabels=339900";
    }
});
