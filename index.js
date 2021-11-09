'use strict';
var scrollTopBtn = document.querySelector('.scroll-to-top');//ссылка на кнопку(хоть она и див))

window.addEventListener('scroll', () => {
  const { scrollTop, clientHeight } = document.documentElement;
  if (scrollTop > clientHeight) {
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }
});//функция для определения положения скрола и присвоения класса отображения

scrollTopBtn.addEventListener('click', scrollToTop);//прослушка нажатия на кнопку

function scrollToTop() {
  document.documentElement.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}//функция скрола вверх

const toggleSwitch = document.querySelector('.theme-switcher input[type="checkbox"]');//ссылка на тугл

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};// место хранения тем

toggleSwitch.addEventListener('change', switchTheme, false);//прослушка на переключателе тем

 function switchTheme(e) {
  if (e.target.checked) {//проверка положения тугла
    document.documentElement.setAttribute('data-theme', Theme.DARK);
    
    document.querySelector('img').classList.add('imgboxDark');
    document.querySelector('img').classList.remove('imgboxLight');
    
    localStorage.setItem('theme', Theme.DARK);
  } else {
    document.documentElement.setAttribute('data-theme', Theme.LIGHT);
    document.querySelector('img').classList.remove('imgboxDark');
    document.querySelector('img').classList.add('imgboxLight');
    localStorage.setItem('theme', Theme.LIGHT);
  }
}// функция смены темы

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;// проверку текущей темы

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === Theme.DARK) {
    toggleSwitch.checked = true;
  }//проверка положения переключателя
}