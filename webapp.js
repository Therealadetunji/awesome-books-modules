import { bookStore } from '../modules/bookStore.js';
import { userInterface } from '../modules/user-interface.js';
import { bookBank } from '../modules/bookBank.js';
import { DateTime } from '../modules/luxon.js';

const now = DateTime.now();
document.getElementById('dateTime').innerHTML = now.toLocaleString(
  DateTime.DATETIME_MED
);

const navHeader = document.querySelector('#navlink-header');
const navcont = document.createElement('div');
const navbar = document.createElement('nav');
navbar.id = 'navbar';
const navspan = document.createElement('span');
navspan.innerText = 'awesome books';
navspan.id = 'navspan';
const navlist = document.createElement('ul');
navlist.id = 'navlist';
const navlistitem = document.createElement('li');
const navlistLinks = document.createElement('a');
navHeader.appendChild(navcont);
navcont.appendChild(navbar);
navbar.append(navspan, navlist);
navlist.append(navlistitem);
navlistitem.append(navlistLinks);
navlistitem.innerHTML = `<a href='#' id='link1' class='link'>list</a>`;
navlistitem.innerHTML += `<a href='#' id='link2' class='link'>add new</a>`;
navlistitem.innerHTML += `<a href='#' id='link3'class='link'>contact</a>`;
const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');

link1.addEventListener('click', () => {
  const toppart = document.getElementById('top-part');
  const form = document.getElementById('form');
  const contactinfo = document.getElementById('contact');
  toppart.style.display = 'flex';
  form.style.display = 'none';
  contactinfo.style.display = 'none';
});

link2.addEventListener('click', () => {
  const toppart = document.getElementById('top-part');
  const form = document.getElementById('form');
  const contactinfo = document.getElementById('contact');
  toppart.style.display = 'none';
  form.style.display = 'flex';
  contactinfo.style.display = 'none';
});

link3.addEventListener('click', () => {
  const toppart = document.getElementById('top-part');
  const form = document.getElementById('form');
  const contactinfo = document.getElementById('contact');
  toppart.style.display = 'none';
  form.style.display = 'none';
  contactinfo.style.display = 'flex';
});
