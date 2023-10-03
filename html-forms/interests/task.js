const inputs = Array.from(document.querySelectorAll('.interest__check')) 

inputs.forEach(input => {
	input.addEventListener('click', () => {
		const children = Array.from(input.closest('li.interest').querySelectorAll('.interest__check'))	 
		console.log(children)
		children.forEach(child => {
			if (input.checked) {
				child.checked = true;
			} else {				
				child.checked = false;
			}
		})
	})
})
