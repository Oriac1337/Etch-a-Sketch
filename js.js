const container = document.querySelector('#container');
const button = document.querySelector("#start");

button.addEventListener("click", start);

function start() {

    const existingDivs = document.querySelectorAll('.content, .content:hover');
    existingDivs.forEach(div => container.removeChild(div));

num = prompt(`Enter number of squares per side for the new grid: `)
while (num > 100) {
    alert("Invalid input. Please enter a number less than or equal to 100.");
    num = prompt(`Enter number of squares per side for the new grid: `)
}
container.style.setProperty(`--num`, num);
let i = 0;
while (i < (num * num)) {
    const newDiv = document.createElement('div');
		newDiv.classList.add('content');
    container.appendChild(newDiv);
     i++
}
};



window.addEventListener('mouseover', hovering);

function hovering(event) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        if (content.contains(event.target)) {
            content.classList.toggle('hover');
        }
    });
}
