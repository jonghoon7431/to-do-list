let input = document.getElementById('input-box');
let addBtn = document.querySelector('.add');
let tasks = document.querySelector('.tasks');

input.addEventListener('keyup', () => {
    if(input.value.trim() != 0){
        addBtn.classList.add('active');
    }else{
        addBtn.classList.remove('active')
    }
})

input.addEventListener('keydown',(e) => {
    if(e.keyCode == 13){
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
        <p> ${input.value} </p>
        <div class="item-btn">
            <i class="fa-solid fa-check"></i>
            <i class="fa-solid fa-xmark"></i>
        </div>`
        tasks.appendChild(newItem);
        input.value = '';
        
    }
})

addBtn.addEventListener('click', () =>{
    if(input.value.trim() != 0){
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
        <p> ${input.value} </p>
        <div class="item-btn">
            <i class="fa-solid fa-check"></i>
            <i class="fa-solid fa-xmark"></i>
        </div>`
        tasks.appendChild(newItem);
        input.value = '';
    }else{
        alert('please enter a task')
    }
})

//delete item from list

tasks.addEventListener('click', (e) => {
    if(e.target.classList.contains('fa-xmark')){
        e.target.parentElement.parentElement.remove();
        }
})

//mark item as completed

tasks.addEventListener('click', (e) => {
    if(e.target.classList.contains('fa-check')){
        e.target.parentElement.parentElement.classList.
        toggle('completed')
        }
})