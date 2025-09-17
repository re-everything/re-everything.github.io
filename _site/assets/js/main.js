document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM loaded"); // Debug log
  
  var dropbtns = document.getElementsByClassName("dropbtn");
  console.log("Found dropbtns:", dropbtns.length); // Debug log
  
  // Add click handler to each dropdown button
  for (var i = 0; i < dropbtns.length; i++) {
    dropbtns[i].addEventListener("click", function(e) {
      console.log("Button clicked"); // Debug log
      e.stopPropagation();
      var dropdownContent = this.nextElementSibling;
      dropdownContent.classList.toggle("show");
    });
  }

  // Close dropdowns when clicking outside
  window.addEventListener("click", function(e) {
    if (!e.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  });
});
