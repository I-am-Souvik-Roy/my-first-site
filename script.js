const form = document.getElementById('login-form');
const codeInput = document.getElementById('code');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

const secretCode = 'Tanisha'; // Replace with your secret code
const nextPageUrl = 'main.html'; // Replace with the URL of the new page

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const userInput = codeInput.value.trim();
	if (userInput === secretCode) {
		resultDiv.innerHTML = 'Baby';
		window.location.href = nextPageUrl; // Redirect to new page
	} 
	else if (userInput === 'tanisha') {
		resultDiv.innerHTML = 'Naam ka pehla letter capital hota hn gawar !';
	}
	else if (userInput === 'nishita') {
		resultDiv.innerHTML = 'Chhi Chhi Chhi ! kiska naam likh diya ! jldi se delete kar !';
	}else {
		resultDiv.innerHTML = 'Naa, Tum meri baby nhi ho, kon hooo tum? kaha hai meri Tanisha baby?';
	}
});