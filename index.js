const flexContent = Array.from(document.querySelectorAll('.item'));

window.addEventListener('DOMContentLoaded', updateContentInnerHTML)
window.addEventListener('resize', updateContentInnerHTML);

function updateContentInnerHTML(e){
    flexContent.forEach(element=>{
        let box = element.getBoundingClientRect();
        element.children[0].innerHTML = `Width: ${box.width}, Height: ${box.height}`;
    })
}