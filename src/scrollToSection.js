export default function scrollToSection(section) {
  const navbarHeight = document.querySelector('header').offsetHeight;
  const targetPosition = section.getBoundingClientRect().top + window.scrollY - navbarHeight;
  window.scrollTo({ top: targetPosition, behavior: 'smooth' });
}
