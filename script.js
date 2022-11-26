var isDarkMode=false

function toggleTheme() {
    if (isDarkMode) {
        isDarkMode=!isDarkMode
    }
}
if(isDarkMode) {
    document.body.classList.add("dark")
    //Do something if DarkMode is true 
} else {
    document.body.classList.remove('dark')
    //Do something if DarkMode is false 
}