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
// Show button when scrolled down 1000px
document.addEventListener('DOMContentLoaded', function () {
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    window.onscroll = function () {
      backToTopBtn.style.display =
        document.body.scrollTop > 1000 ||
        document.documentElement.scrollTop > 1000
          ? 'block'
          : 'none';
    };
    backToTopBtn.onclick = function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  }
});

// Universal modal for images
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('img[data-full]').forEach((img) => {
    img.addEventListener('click', function (e) {
      e.preventDefault();
      const modal = document.getElementById('img-modal');
      const modalImg = document.getElementById('img-modal-img');
      if (modal && modalImg) {
        modalImg.src = this.getAttribute('data-full') || this.src;
        modal.style.display = 'flex';
      }
    });
  });

  // Modal close
  const imgModal = document.getElementById('img-modal');
  if (imgModal) {
    imgModal.addEventListener('click', function (e) {
      if (e.target === this) closeModal();
    });
  }
});

function closeModal() {
  const modal = document.getElementById('img-modal');
  if (modal) modal.style.display = 'none';
}

// Accordion functionality
const accordionItems = document.querySelectorAll('.accordion-item');
accordionItems.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

const revealElements = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  revealElements.forEach((el) => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) el.classList.add('active');
    else el.classList.remove('active');
  });
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
