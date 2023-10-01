let sizes = Array.from(document.querySelectorAll('.font-size'));
let book = document.getElementById('book');
let childrens = Array.from(document.querySelectorAll('.book__control_color .color'));
let childrensBackground = Array.from(document.querySelectorAll('.book__control_background .color'));
let state = {
	fontSize: 'medium',
	textColor: 'black',
	backgroundColor: 'white'
  };
  
  sizes.forEach((sizeContr) => {
	sizeContr.addEventListener('click', (el) => {
	  el.preventDefault();
	  sizes.forEach(sizeContr => {
		sizeContr.classList.remove('font-size_active');
	  });
	  sizeContr.classList.add('font-size_active');
  
	  state.fontSize = sizeContr.dataset.size; 
	 
	  updateBookStyles();
	});
  });
  
  childrens.forEach(item => {
	item.addEventListener('click', (e) => {
	  e.preventDefault();
	  childrens.forEach(item => {
		item.classList.remove('color_active');
	  });
	  item.classList.add('color_active');
  
	  state.textColor = item.dataset.textColor; 
  
	  updateBookStyles();
	});
  });
  
  childrensBackground.forEach(item => {
	item.addEventListener('click', (e) => {
	  e.preventDefault();
	  childrensBackground.forEach(item => {
		item.classList.remove('color_active');
	  });
	  item.classList.add('color_active');
  
	  state.backgroundColor = item.dataset.bgColor; 
  
	  updateBookStyles();
	});
  });
  
  function updateBookStyles() {
	book.className = 'book';
	book.classList.add(`book_fs-${state.fontSize}`);
	book.classList.add(`book_color-${state.textColor}`);
	book.classList.add(`book_bg-${state.backgroundColor}`);
  }