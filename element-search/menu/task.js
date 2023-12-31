
const mainMenus = Array.from(document.querySelectorAll('.menu_main'));

mainMenus.forEach(mainMenu => {
  const menuLinks = mainMenu.querySelectorAll('.menu__link');

  Array.from(menuLinks).forEach(menuLink => {
      menuLink.addEventListener('click', (link) => {
      link.preventDefault();
      const menu = menuLink.nextElementSibling;
      
      if (menu && menu.classList.contains('menu_sub')) {
        const activeMenu = mainMenu.querySelector('.menu_active');
        
        if (activeMenu && activeMenu !== menu) {
          activeMenu.classList.remove('menu_active');
        }
        menu.classList.toggle('menu_active');
      } else {
        window.location.href = menuLink.getAttribute('href');
      }
    });
  });
})