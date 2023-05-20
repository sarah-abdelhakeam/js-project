//list 
// const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://flowers2.p.rapidapi.com/list?name=African%20Daisy&scientificName=Osteospermum&pageIndex=0&pageSize=10');
xhr.setRequestHeader('X-RapidAPI-Key', 'SIGN-UP-FOR-KEY');
xhr.setRequestHeader('X-RapidAPI-Host', 'flowers2.p.rapidapi.com');

xhr.send(data);

//get by id 
// const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://flowers2.p.rapidapi.com/6383808bff3dde72b0fc34ab');
xhr.setRequestHeader('X-RapidAPI-Key', 'SIGN-UP-FOR-KEY');
xhr.setRequestHeader('X-RapidAPI-Host', 'flowers2.p.rapidapi.com');

xhr.send(data);


//show image
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://flowers2.p.rapidapi.com/6383808bff3dde72b0fc35d6/image');
xhr.setRequestHeader('X-RapidAPI-Key', 'SIGN-UP-FOR-KEY');
xhr.setRequestHeader('X-RapidAPI-Host', 'flowers2.p.rapidapi.com');

xhr.send(data);
