export default function loadPageContentDinner() {
  const content = document.querySelector('#menu-content');

  const menu = document.createElement('div');
  menu.classList.add('menu');

  const dinnerTitle = document.createElement('h3');
  dinnerTitle.innerText = 'Dinner Menu';
  menu.appendChild(dinnerTitle);

  const menuOptions = document.createElement('h4');
  menuOptions.innerText = 'Menu Options';
  menu.appendChild(menuOptions);

  const threeCourses = document.createElement('p');
  threeCourses.innerText = '3 courses - €72';
  menu.appendChild(threeCourses);

  const fourCourses = document.createElement('p');
  fourCourses.innerText = '4 courses - €104 (paired wines +€48)';
  menu.appendChild(fourCourses);

  const fiveCourses = document.createElement('p');
  fiveCourses.innerText = '5 courses - €126 (paired wines +€64)';
  menu.appendChild(fiveCourses);

  const sixCourses = document.createElement('p');
  sixCourses.innerText = '6 courses - €148 (paired wines +€78)';
  menu.appendChild(sixCourses);

  const ingredientsList = document.createElement('p');
  ingredientsList.innerHTML = `
    Blue Lobster • Citrus Beurre Blanc • Seaweed • Finger Lime <br>
    Caramelized Scallops • Black Garlic • Leek Purée • Fennel <br>
    Venison Loin • Wild Mushroom Ragout • Chestnut • Juniper Berry Jus <br>
    Grilled Turbot • Salsify • Truffle Emulsion • Kale Chips <br>
    Foie Gras • Apple Chutney • Brioche • Mulled Wine Reduction <br>
    Wagyu Beef • Charred Onion • Bone Marrow • Red Wine Jus <br>
    Belgian Chocolate Mousse • Hazelnut Praline • Sea Salt • Passion Fruit <br>
    Blackberry Tart • Mascarpone • Pistachio Crust • Rosemary Crème Anglaise <br>
  `;
  menu.appendChild(ingredientsList);

  content.appendChild(menu);
}
