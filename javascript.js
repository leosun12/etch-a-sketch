const container = document.querySelector('.sketch');

for (let i = 0; i < 16 * 16; i++) {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    grid.style.height = (1000 / 16) - 2 + 'px'
    grid.style.width = (1000 / 16) - 2 + 'px'
    container.appendChild(grid);
    grid.addEventListener('mouseover', () => {
        grid.classList.add('hovered');
        console.log('hovering');
    })
}

const sizer = document.querySelector('.sizer');
sizer.addEventListener('click', generateGrid);

function generateGrid() {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
    let size = +prompt('size');
    for (let i = 0; i < size * size; i++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        grid.style.height = (1000 / size) - 2 + 'px'
        grid.style.width = (1000 / size) - 2 + 'px'
        container.appendChild(grid);
        grid.addEventListener('mouseover', () => {
            grid.classList.add('hovered');
            console.log('hovering');
        })
    }
}