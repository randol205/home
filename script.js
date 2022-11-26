var isDarkMode=false

function toggleTheme() {
    isDarkMode=!isDarkMode    

if(isDarkMode) {
    document.body.classList.add("dark")    
} else {
    document.body.classList.remove('dark')
  }  
}