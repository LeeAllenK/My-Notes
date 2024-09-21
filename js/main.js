const addButton = document.getElementById('add');
const ul = document.querySelector('ul');
const items = document.querySelector('li');
const background = document.querySelector('.background');
const app = document.querySelector('.app');
const lightbulb = document.querySelector('.fa-lightbulb');
const add = document.getElementById('add');
const Note = document.querySelector('input');
let game = document.querySelector('.appBox');
let signIn = document.querySelector('.sign-in')
let password = document.querySelector('.password')
let userText = document.querySelector('.user-text')
let link = document.querySelector('.link');
let loginBorder = document.querySelector('.items')
//Switch between light && dark mode!
lightbulb.addEventListener('click' , (e) => {
	background.classList.toggle('colorMode');
	e.target.classList.toggle('colorMode');
	app.classList.toggle('colorMode');
	add.classList.toggle('colorMode2');
	signIn.classList.toggle('sMode');
	password.classList.toggle('sMode');
	link.classList.toggle('sMode');
	loginBorder.classList.toggle('sMode')
})

let log = document.querySelector('.loginOuter');
let user = document.getElementById('user');
let pw = document.getElementById('password');

game.style.display = 'none';

function login(){
	u = user.value;
	p = pw.value;

	if(u === '' && p === '') {
		game.style.display = 'block';
		log.style.display = 'none';
		
	}
}
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

//Created elements to append to ul

	//Space created between text and trash can
	let space = document.createTextNode("\t");

	//Created elements to append to li
	let li = document.createElement('li');
	let ul = document.getElementById('ul-Notes')
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

	label.appendChild(checkbox);
	li.appendChild(space);
	li.appendChild(label);
	li.appendChild(del);
	ul.appendChild(li);
	
	
	const allNotes = document.querySelectorAll('li');
//note and appended elements show in list	
	for(let i = 0; i < allNotes.length; i++){
			
		notes.push(allNotes[i].innerText);
	}

//Storage storing and getting stored notes	
	localStorage.setItem('notes', JSON.stringify(notes));
	let getStorage = localStorage.getItem('notes', JSON.stringify(notes));

		

//Delete Button
	del.addEventListener('click', e => {
		ul.removeChild(li);
	})

//Listener to strike through text
	li.addEventListener('click' , getStrike);

});

//Strike through function if prefared instead of checking box line does partially cover text
function getStrike(e){

	if(e.target.classList.value === 'noStrike'){
			e.target.classList.add('strike');
	}else {
		e.target.classList.toggle('strike');  
	}
}



