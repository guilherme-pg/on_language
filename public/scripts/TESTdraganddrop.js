
const letter = document.querySelector('.letter_formWord');
const empities = document.querySelectorAll('.empty_form_word');


letter.addEventListener('dragstart', dragStart);
letter.addEventListener('dragend', dragEnd);


// loop through empities and call drag events
for (const empty of empities) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
};

// WHEN HOLD
function dragStart() {
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);
};

// WHEN DROP
function dragEnd() {
    this.className = 'letter_formWord';
};



function dragOver(e) {
    e.preventDefault();
};


function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
};


function dragLeave() {
    this.className = 'empty_form_word';
};


function dragDrop() {
    this.className = 'empty_form_word';
    this.append(letter);
};











// OTHER -------------------------------------------


const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');

draggables.forEach(draggable => {

    // WHEN DRAG
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
        console.log('DRAG  START   !!!!!!');
    });

    // WHEN DROP
    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
        console.log('DRAG  END END   !!!!!!');
    });
});

containers.forEach(container => {
    container.addEventListener('dragover', e => {
        e.preventDefault();
        const afterElement = getDragAfterElement(container, e.clientY)
        const draggable = document.querySelectorAll('.dragging');

        if (afterElement == null) {
            container.appendChild(draggable);
            console.log('APPEND CHILD      xxxxxxxxxxxxx');
        } else {
            container.insertBefore(draggable, afterElement);
            console.log('INSERT BEFORE      yyyyyyyyyyyy');
        };
    });
});

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]
  
    return draggableElements.reduce((closest, child) => {

      const box = child.getBoundingClientRect()
      const offset = y - box.top - box.height / 2
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child }
      } else {
        return closest
      };

    }, {offset: Number.NEGATIVE_INFINITY }).element
};






// OTHER ------------------------------------------

// let draggedItem = null;

// for(let i = 0; i < draggables.length; i++) {

//     const draggable = draggables[i];
//     draggable.classList.add('transition');

//     draggable.addEventListener('dragstart', function () {
//         draggedItem = draggable;
//         // draggedItem.style.transform = 'scale(1.2)';
//         setTimeout(function () {
//             // draggable.style.display = 'none';
//             draggedItem.classList.remove('transition');
            
//             console.log('BBB draggedItem BBB  == ', draggedItem);
//         }, 0);
//     });

//     draggable.addEventListener('dragover', function() {
//         draggedItem.style.transition  = '0';
//         draggedItem.style.visibility  = 'hidden';
//         // draggedItem.style.transform = 'scale(1.2)';
//     });


//     draggable.addEventListener('dragend', function () {
//         setTimeout(function () {
//             draggedItem.style.display = 'flex';
//             draggedItem.style.visibility  = 'visible';
//             draggedItem.classList.add('transition');
//             // draggedItem.style.transform = 'scale(1)';
//             draggedItem = null;

//         }, 0);
//     });


//     for (let j = 0; j < containers.length; j++) {
//         const container = containers[j];

//         container.addEventListener('dragover', function(e) {
//             e.preventDefault();
//         });
//         container.addEventListener('dragenter', function (e) {
//             e.preventDefault();
//         });
//         container.addEventListener('drop', function (e) {
//             this.append(draggedItem)
//         });
//     };
// };