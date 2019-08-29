// Add your javascript here
const container = document.getElementsByClassName('container')[0];
const controls = document.getElementsByClassName('controls')[0];

controls.addEventListener('click', event => {
    if (event.target.id === 'left') {
        const firstChild = removeFirstChild(container);
        addFirstChildLast(container, firstChild);
    }
    else if (event.target.id ==='right') {
        const lastChild = removeLastChild(container);
        addLastChildFirst(container, lastChild);
    }
})

const removeFirstChild = container => {
    const firstButton = container.firstElementChild;
    return container.removeChild(firstButton);
}

const addFirstChildLast = (container, firstChild) => {
    container.appendChild(firstChild);
}

const removeLastChild = container => {
    const lastButton = container.lastElementChild;
    return container.removeChild(lastButton);
}

const addLastChildFirst = (container, lastElement) => {
    container.insertBefore(lastElement, container.firstElementChild);
}