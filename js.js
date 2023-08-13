const container = document.querySelector('#container');
const button = document.querySelector("#start");

let i = 0;
button.addEventListener("click", start);
function start() {
num = prompt(`Enter number of squares per side for the new grid: `)
while (i < num) {
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
