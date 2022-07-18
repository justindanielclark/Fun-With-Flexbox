const flexContainer = document.querySelector('.flex-container');
const items = [];


window.addEventListener('load', ()=> {
    for(let i = 0; i < 3; i++){
        flexContainer.appendChild(createFlexItem(items));
    }
});

function createFlexItem(items){
    const item = document.createElement('div');
    item.classList.toggle('item');
    item.style.backgroundColor = createColor();

    const cancel = document.createElement('div');
    cancel.classList.toggle('material-symbols-outlined');
    cancel.innerHTML = 'cancel';
    cancel.addEventListener('click', ()=>{
        flexContainer.removeChild(item);
    })
    item.appendChild(cancel);

    const id = document.createElement('div');
    id.classList.toggle('item-id');
    id.innerHTML = items.length;
    item.appendChild(id);

    const content = document.createElement('div');
    content.classList.toggle('flex-content');
    content.innerHTML = 'Content';
    item.appendChild(content);

    items.push(item);

    return item;
}

function createColor(){
    return `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`;
}