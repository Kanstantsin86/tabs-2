'use strict';

const nav = document.querySelector('#tabs > .tabs-nav');
const demoTab = nav.firstElementChild;
const articlesList = document.querySelectorAll('.tabs-content > *');

for (const article of articlesList) {
  const newTab = demoTab.cloneNode(true);
  demoTab.remove();
  const btn = newTab.getElementsByTagName('a')[0];
  btn.classList.add(article.dataset.tabIcon);
  btn.textContent = article.dataset.tabTitle;
  btn.addEventListener('click', event => chooseTab(event));
  nav.appendChild(newTab);
}

function setActiveTab(selectedTab) {
  for (const tab of nav.children) {
    tab.classList.toggle('ui-tabs-active', tab === selectedTab);
  }
  for (const article of articlesList) {
    article.classList
      .toggle('hidden', selectedTab.firstElementChild.textContent !== article.dataset.tabTitle)
  }
}

setActiveTab(nav.firstElementChild);

function chooseTab(event) {
  event.preventDefault();
  const tab = event.currentTarget.parentElement;
  if (tab.classList.contains('ui-tabs-active')) {
    return;
  }
  setActiveTab(tab);
}