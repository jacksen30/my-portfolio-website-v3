const root = document.documentElement;
const darkModeToggle = document.getElementById('dark-mode-toggle');
const githubStatCard = document.getElementById('github-stat-card');

// https://streak-stats.demolab.com?user=jacksen30&theme=dark&hide_border=true&border_radius=0&date_format=j%2Fn%5B%2FY%5D&card_width=450&background=F7F9FC&currStreakNum=FF8D16


darkModeToggle.addEventListener('click', () => {

    root.classList.toggle('light-theme');

    // NEED TO WRITE A VARIABLE IsDarkMode to  know what to swap to ect
    // Gitcard is only changing to lightmode at the moment not able to swap back yet
    // githubStatCard.src="https://streak-stats.demolab.com?user=jacksen30&theme=dark&hide_border=true&border_radius=0&date_format=j%2Fn%5B%2FY%5D&card_width=450&background=F7F9FC&currStreakNum=FF8D16";
    githubStatCard.src="https://streak-stats.demolab.com?user=jacksen30&theme=dark&hide_border=true&border_radius=0&date_format=n%2Fj%5B%2FY%5D&card_width=450&background=F7F9FC&sideNums=339900&currStreakNum=FF8D16&sideLabels=339900&dates=000000";
})

