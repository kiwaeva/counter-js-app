let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("entries");
let count = 0;

function increment() {
	count += 1;
	countEl.textContent = count;
}

function save() {
	let countStr = count + " - ";
	entries.textContent += countStr;
	countEl.textContent = 0;
	count = 0;
}
