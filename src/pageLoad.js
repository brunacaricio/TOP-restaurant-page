// import restImage from './images/rest1.jpg';

export default function loadPageContentLunch() {
  const content = document.querySelector('#menu-content');

  const menu = document.createElement('div');
  menu.classList.add('menu');

  const lunchTitle = document.createElement('h3');
  lunchTitle.innerText = 'Lunch Menu';
  menu.appendChild(lunchTitle);

  const menuOptions = document.createElement('h4');
  menuOptions.innerText = 'Menu Options';
  menu.appendChild(menuOptions);

  const threeCourses = document.createElement('p');
  threeCourses.innerText = '3 courses - €58';
  menu.appendChild(threeCourses);

  const fourCourses = document.createElement('p');
  fourCourses.innerText = '4 courses - €86 (paired wines +€42)';
  menu.appendChild(fourCourses);

  const fiveCourses = document.createElement('p');
  fiveCourses.innerText = '5 courses - €106 (paired wines +€56)';
  menu.appendChild(fiveCourses);

  const sixCourses = document.createElement('p');
  sixCourses.innerText = '6 courses - €126 (paired wines +€68)';
  menu.appendChild(sixCourses);

  const ingredientsList = document.createElement('p');
  ingredientsList.innerHTML = `
    North Sea Crab • Burrata • Umeboshi • Tomato 'Mangelmoes' <br>
    Zucchini 'Tromba d'Albenga' • Tonnato • Green Pepper • Olive <br>
    Monkfish • Capers • Algae • Carrot • Sobrasada <br>
    Bouchot Mussel • Fennel • Saffron • Watermelon • Samphire <br>
    Périgord Farm Chicken • Porcini Mushroom • Tarragon • Liquorice <br>
    'Schone van Boskoop' Apple • Almond • Joconde Biscuit • Lemon Verbena
  `;
  menu.appendChild(ingredientsList);

  content.appendChild(menu);
}
