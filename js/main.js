const addButton = document.getElementById('add');
const ul = document.querySelector('ul');
const items = document.querySelector('li');
const background = document.querySelector('.background');
const app = document.querySelector('.app');
const lightbulb = document.querySelector('.fa-lightbulb');
const add = document.getElementById('add');
const Note = document.querySelector('input');
const appDisplay = document.querySelector('.appBox');
const signIn = document.querySelector('.sign-in')
const password = document.querySelector('.password')
const userText = document.querySelector('.user-text')
const link = document.querySelector('.link');
const loginBorder = document.querySelector('.items')
const noUser = document.querySelector('.no-user');
const noPw = document.querySelector('.no-pass');
const log = document.querySelector('.loginOuter');
let user = document.getElementById('email');
let pw = document.getElementById('password');
const userColor = document.getElementById('email');
const passColor = document.getElementById('password');
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

userColor.addEventListener('click' , (e) => {
	userColor.classList.toggle('logColor')
})
passColor.addEventListener('click' , (e) => {
	passColor.classList.toggle('logColor')
})


appDisplay.style.display = 'none';

function login(){
	u = user.value;
	p = pw.value;

	if(u === 'User@mail.com'.toLowerCase() || u === 'User@mail.com') {
		if(p === 'User'){
		appDisplay.style.display = 'block';
		log.style.display = 'none';
		}
	}else{
		noUser.textContent = ' incorrect username'
		noPw.textContent = ' incorrect password'
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
	let editBtn = document.createElement('button');
	let delBtn = document.createElement('button');
	let delIcon = document.createElement('i');
	let editIcon = document.createElement('i');
	label.classList.add('list')
	editIcon.classList.add('fa-regular' , 'fa-pen-to-square');
	delIcon.classList.add("fa-solid", "fa-trash-can");
	li.classList.add('listNotes');
	li.classList.add('noStrike');	
	li.setAttribute('contentEditable' , false)
	editBtn.classList.add('edit');
	delBtn.classList.add('del');
	editBtn.setAttribute('type' , 'button');
	delBtn.setAttribute('type' , 'button');
	label.setAttribute('for' , 'notes');
	checkbox.classList.add('checkbox');
	checkbox.setAttribute('type' , 'checkbox');

	editBtn.innerText = 'EDIT';
	delBtn.innerText = 'DELETE';

	editBtn.appendChild(editIcon)
	delBtn.appendChild(delIcon)
	li.textContent = note;

	label.appendChild(li);
	label.appendChild(delBtn);
	label.appendChild(editBtn)
	ul.appendChild(label);

	
	const allNotes = document.querySelectorAll('li');
//note and appended elements show in list	
	for(let i = 0; i < allNotes.length; i++){		
		notes.push(allNotes[i].textContent);
	}

//Storage storing and getting stored notes	
	localStorage.setItem('notes', JSON.stringify(notes));
	let getStorage = localStorage.getItem('notes', JSON.stringify(notes));

		

//Delete Button
	delBtn.addEventListener('click', e => {
		ul.removeChild(label);
	})

//Edit Button to edit text after input
	editBtn.addEventListener('click' , (e) => {
		e.stopPropagation();
		li.contentEditable = true;
		li.classList.add('hoverList');
	})

});



