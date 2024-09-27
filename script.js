var icon = document.getElementById("mode-icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        icon.src = "images/sun.png";
    }else{
        icon.src = "images/moon.png";
    }
}

function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });
    
    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
    }
    
    // Show the "home" section by default on page load
    document.addEventListener('DOMContentLoaded', function() {
    showSection('home');
    });
    