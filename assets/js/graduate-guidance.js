let currentSection = 0;
const totalSections = 6;

function showSection(index) {
  // Update sections
  document.querySelectorAll('.section').forEach((s, i) => {
    s.classList.toggle('active', i === index);
  });

  // Update tabs
  document.querySelectorAll('.nav-tab').forEach((t, i) => {
    t.classList.toggle('active', i === index);
  });

  // Update progress dots
  document.querySelectorAll('.progress-dot').forEach((d, i) => {
    d.classList.toggle('active', i === index);
  });

  currentSection = index;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleAccordion(header) {
  const item = header.parentElement;
  item.classList.toggle('open');
}

function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  const btn = document.querySelector('.theme-toggle');
  btn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
}

function searchContent() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  if (query.length < 2) return;

  const sections = document.querySelectorAll('.section');
  sections.forEach((section, index) => {
    if (section.textContent.toLowerCase().includes(query)) {
      showSection(index);
      return;
    }
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Load saved theme
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    const btn = document.querySelector('.theme-toggle');
    if (btn) btn.textContent = '☀️';
  }

  // Progress dot clicks
  document.querySelectorAll('.progress-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      showSection(parseInt(dot.dataset.section));
    });
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' && currentSection < totalSections - 1) {
      showSection(currentSection + 1);
    } else if (e.key === 'ArrowLeft' && currentSection > 0) {
      showSection(currentSection - 1);
    }
  });
});
