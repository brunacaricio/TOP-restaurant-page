import "./styles.css";
import loadPageContentLunch from './pageLoad.js';
import loadPageContentDinner from './dinnerMenu.js';
import scrollToSection from './scrollToSection.js'

const logoBtn = document.querySelector('#logo');
const menuBtn = document.querySelector('#menu-btn');
const aboutBtn = document.querySelector('#about-btn');
const contactBtn = document.querySelector('#contact-btn');

const lunchBtn = document.querySelector('#lunch-btn');
const dinnerBtn = document.querySelector('#dinner-btn');

const content = document.querySelector('#menu-content');
const aboutContent = document.querySelector('#about')
const contactContent = document.querySelector('#contact-hours')


document.addEventListener('DOMContentLoaded', () => {
  loadPageContentLunch();
  lunchBtn.focus();
});

logoBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

menuBtn.addEventListener('click', function() {
  scrollToSection(lunchBtn);
});

aboutBtn.addEventListener('click', function() {
  scrollToSection(aboutContent);
});

contactBtn.addEventListener('click', function() {
  scrollToSection(contactContent);
});

lunchBtn.addEventListener('click', () => {
  content.innerHTML = '';
  loadPageContentLunch();
});

dinnerBtn.addEventListener('click', () => {
  content.innerHTML = '';
  loadPageContentDinner();
});
