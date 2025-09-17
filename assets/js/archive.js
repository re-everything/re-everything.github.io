function showView(viewType) {
  // Hide all views
  document.querySelectorAll('.archive-view').forEach(view => {
    view.style.display = 'none';
  });
  
  // Show selected view
  document.getElementById(`archive-by-${viewType}`).style.display = 'block';
  
  // Update button states
  document.querySelectorAll('.archive-nav-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`[onclick="showView('${viewType}')"]`).classList.add('active');
}

function toggleYear(year) {
  const content = document.getElementById(`year-${year}`);
  const icon = content.parentElement.querySelector('.toggle-icon');
  
  if (content.style.display === 'none') {
    content.style.display = 'block';
    icon.classList.remove('collapsed');
  } else {
    content.style.display = 'none';
    icon.classList.add('collapsed');
  }
}

function toggleMonth(monthId) {
  const content = document.getElementById(`month-${monthId}`);
  const icon = content.parentElement.querySelector('.toggle-icon');
  
  if (content.style.display === 'none') {
    content.style.display = 'block';
    icon.classList.remove('collapsed');
  } else {
    content.style.display = 'none';
    icon.classList.add('collapsed');
  }
}

// When the page loads, expand the current year by default
document.addEventListener('DOMContentLoaded', function() {
  const currentYear = new Date().getFullYear().toString();
  const yearContent = document.getElementById(`year-${currentYear}`);
  if (yearContent) {
    yearContent.style.display = 'block';
  }
});