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
document.addEventListener('DOMContentLoaded', function () {
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    window.onscroll = function () {
      backToTopBtn.style.display =
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
          ? 'block'
          : 'none';
    };
    backToTopBtn.onclick = function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  }
});

// Portfolio card click event
// Open image in modal if no link is present
document.querySelectorAll('.portfolio-card').forEach((card) => {
  // Tik kortelėms be nuorodos
  if (!card.hasAttribute('href')) {
    card.addEventListener('click', function (e) {
      e.preventDefault();
      const img = this.querySelector('.portfolio-img');
      if (img) {
        const fullImg = img.getAttribute('data-full') || img.src;
        const modal = document.getElementById('img-modal');
        const modalImg = document.getElementById('img-modal-img');
        modalImg.src = fullImg;
        modal.style.display = 'flex';
      }
    });
  }
});

function closeModal() {
  document.getElementById('img-modal').style.display = 'none';
}

const imgModal = document.getElementById('img-modal');
if (imgModal) {
  imgModal.addEventListener('click', function (e) {
    if (e.target === this) closeModal();
  });
}
