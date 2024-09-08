const addButton = document.getElementById('add');
const ul = document.querySelector('ul');
const items = document.querySelector('.list');
const background = document.querySelector('.background');
const app = document.querySelector('.app');
const lightbulb = document.querySelector('.fa-lightbulb');
const Note = document.querySelector('input');

//Switch between light && dark mode!
	lightbulb.addEventListener('click', (e) => {
		background.classList.toggle('colorMode');
		e.target.classList.toggle('colorMode');
		app.classList.toggle('colorMode');
		addButton.classList.toggle('btnColor')	
	})

//Keypress event to display data when 'Enter' pressed
Note.addEventListener('keypress', (e) => {
	if(e.key === 'Enter') {
		addButton.click();
	}
})

//Main function 
addButton.addEventListener('click' , (e) => {

//Array for notes && appended elements
let notes = [];

let note = document.getElementById('text').value;

//Logic to clear input text after note added
	if(note){
		document.getElementById('text').value = '';
	}

	//Created elements to append to li
	let li = document.createElement('li');
	let label = document.createElement('label');
	let checkbox = document.createElement('input');
	let del = document.createElement('i');
	li.classList.add('noStrike');
	label.setAttribute('for' , 'notes');
	checkbox.classList.add('checkbox');
	checkbox.setAttribute('type' , 'checkbox');
	del.setAttribute('type' , 'button');
	del.classList.add("fa-solid", "fa-trash-can");

	li.textContent = note;

	//Appended Elements
	label.appendChild(checkbox);
	li.appendChild(label);
	li.appendChild(del);
	items.appendChild(li);
	ul.appendChild(items);
	
	const allNotes = document.querySelectorAll('li');
//note and appended elements show in list	
	for(let i = 0; i < allNotes.length; i++){
			
		notes.push(allNotes[i].textContent);
	}

//Storage storing and getting stored notes	
	localStorage.setItem('notes', JSON.stringify(notes));
	let getStorage = localStorage.getItem('notes', JSON.stringify(notes));
	
//Checkbox
	checkbox.addEventListener('click' , (e) => {
		li.classList.toggle('strike');

	})
//Delete Button
	del.addEventListener('click', e => {
		items.removeChild(li);
	})

});

<<<<<<< HEAD
//Strike through function if prefared instead of checking box line does partially cover text
function getStrike(e){

	if(e.target.classList.value === 'noStrike'){
			e.target.classList.add('strike');
	}else {
		e.target.classList.toggle('strike');  
	}
}



=======
>>>>>>> 7d65410441d290a7db7627b590ab87631a120aba
