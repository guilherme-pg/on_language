
const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');



draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggedItem = draggable;
        draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragover', () => {
        draggedItem.style.visibility  = 'hidden';
    });
  
    draggable.addEventListener('dragend', () => {
        draggable.style.visibility  = 'visible';
        draggable.classList.remove('dragging');

        var containerOfDraggables = document.getElementById('container_answer');
        var draggablesInAnswerContainer = containerOfDraggables.children;
        var concatenatedWord2 = '';

        for (i = 0; i < draggablesInAnswerContainer.length; i++) {

            str = draggablesInAnswerContainer[i].textContent;
            concatenatedWord2 = concatenatedWord2.concat(str);
            
            // CHECK THE CORRECT CONSTRUCTION AND CHANGE COLOR
            if (concatenatedWord == concatenatedWord2) {
                for (i = 0; i < draggables.length; i++) {
                    draggables[i].style.backgroundColor = "green";
                };
            } else if (concatenatedWord.length == concatenatedWord2.length) {
                for (i = 0; i < draggables.length; i++) {
                    draggables[i].style.backgroundColor = "red";
                };
            };
        };
    });
});
  

containers.forEach(container => {
    container.addEventListener('dragover', e => {
        
        e.preventDefault();
        const afterElement = getDragAfterElement(container, e.clientX);
        const draggable = document.querySelector('.dragging');
        // container.appendChild(draggable);

        if (afterElement == null) {
            container.appendChild(draggable);
        } else {
            container.insertBefore(draggable, afterElement);
        };
    });
});


function getDragAfterElement(container, x) {
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {

        // MOUSE POSITION
        const box = child.getBoundingClientRect();
        const offset = x - box.left - box.width / 2;
        
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child }
        } else {
            return closest;
        };
    }, {offset: Number.NEGATIVE_INFINITY}).element;
};




// CHECK RESULT
var checkables = document.querySelectorAll('.checkable');
var concatenatedWord = '';

for (i = 0; i < checkables.length; i++) {
    str = checkables[i].textContent;
    concatenatedWord = concatenatedWord.concat(str);
};



