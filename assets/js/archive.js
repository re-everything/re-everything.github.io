document.addEventListener('DOMContentLoaded', function() {
  const radioButtons = document.querySelectorAll('.view-toggle input[type="radio"]');
  const viewContents = document.querySelectorAll('.view-content');

  radioButtons.forEach(radio => {
    radio.addEventListener('change', function() {
      viewContents.forEach(content => {
        if (content.classList.contains(this.value + '-view')) {
          content.style.display = 'block';
        } else {
          content.style.display = 'none';
        }
      });
    });
  });

  // Show the initial view
  const checkedRadio = document.querySelector('.view-toggle input[type="radio"]:checked');
  if (checkedRadio) {
    viewContents.forEach(content => {
      if (content.classList.contains(checkedRadio.value + '-view')) {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    });
  }
});