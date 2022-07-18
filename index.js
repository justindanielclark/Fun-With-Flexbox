const flexContainer = document.querySelector('.flex-container');
const startingItems = 3;
let itemCount = {count: 0};


window.addEventListener('load', ()=> {
    for(let i = 0; i < startingItems; i++){
        createFlexItem(itemCount);
    }
});

document.querySelector('button').addEventListener('click', ()=>{
    createFlexItem(itemCount);
})

//Flex-Direction
document.querySelector('#flex-direction').addEventListener('change', (e)=>{
    flexContainer.style.flexDirection = e.target.value;
})
//Flex-Wrap
document.querySelector('#flex-wrap').addEventListener('change', (e)=>{
    flexContainer.style.flexWrap = e.target.value;
})
//Justify-Content
document.querySelector('#justify-content').addEventListener('change', (e)=>{
    flexContainer.style.justifyContent = e.target.value;
})
//Align-Items
document.querySelector('#align-items').addEventListener('change', (e)=>{
    flexContainer.style.alignItems = e.target.value;
})
//Align-Content
document.querySelector('#align-content').addEventListener('change', (e)=>{
    flexContainer.style.alignContent = e.target.value;
})
//Flex-Grow
document.querySelector('#flex-grow').addEventListener('change', (e)=>{
    if(e.target.value < 0) {
      e.target.value = 0;
      return;  
    }
    Array.from(document.querySelectorAll('.item')).forEach(item=>{
        e.target.value = Math.floor(e.target.value);
        item.style.flexGrow = Math.floor(e.target.value);
    })
})

//Flex-Shrink
document.querySelector('#flex-shrink').addEventListener('change', (e)=>{
    if(e.target.value < 0) {
      e.target.value = 0;
      return;  
    }
    Array.from(document.querySelectorAll('.item')).forEach(item=>{
        e.target.value = Math.floor(e.target.value);
        item.style.flexShrink = Math.floor(e.target.value);
    })
})

//Flex-Basis
document.querySelector('#flex-basis').addEventListener('change', (e)=>{
    if(e.target.value < 0) {
      e.target.value = 0;
      return;  
    }
    Array.from(document.querySelectorAll('.item')).forEach(item=>{
        e.target.value = Math.floor(e.target.value);
        item.style.flexBasis = `${Math.floor(e.target.value)}px`;
    })
})

//Min-Height
document.querySelector('#min-height').addEventListener('change', (e)=>{
    if(e.target.value < 0) {
      e.target.value = 0;
      return;  
    }
    Array.from(document.querySelectorAll('.item')).forEach(item=>{
        e.target.value = Math.floor(e.target.value);
        item.style.minHeight = `${Math.floor(e.target.value)}px`;
    })
})

//Min-Width
document.querySelector('#min-width').addEventListener('change', (e)=>{
    if(e.target.value < 0) {
      e.target.value = 0;
      return;  
    }
    Array.from(document.querySelectorAll('.item')).forEach(item=>{
        e.target.value = Math.floor(e.target.value);
        item.style.minWidth = `${Math.floor(e.target.value)}px`;
    })
})

function createFlexItem(itemCount){
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
    id.innerHTML = itemCount.count;
    itemCount.count = itemCount.count + 1;
    item.appendChild(id);

    // const content = document.createElement('div');
    // content.classList.toggle('flex-content');
    //     const contentWidth = document.createElement('p');
    //     contentWidth.classList.toggle('content-info');
    //     contentWidth.innerHTML = 'Width: ___'
    //     content.appendChild(contentWidth);
    //     const contentHeight = document.createElement('p');
    //     contentHeight.classList.toggle('content-info');
    //     contentHeight.innerHTML = 'Height: ___'
    //     content.appendChild(contentHeight);
    // item.appendChild(content);

    flexContainer.appendChild(item);
}

function createColor(){
    return `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`;
}