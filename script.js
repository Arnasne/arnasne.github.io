// Sidebar navigation
function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}
function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}

// Back to top button
// Show button when scrolled down 300px
window.onscroll = function () {
  document.getElementById('backToTop').style.display =
    document.body.scrollTop > 300 || document.documentElement.scrollTop > 300
      ? 'block'
      : 'none';
};

// Scroll to top when clicked
document.getElementById('backToTop').onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
