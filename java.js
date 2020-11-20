
let likebtn1 = document.querySelector('#likebtn1');
let dislikebtn1 = document.querySelector('#dislikebtn1');
let input11 = document.querySelector('#input11');
let input21 = document.querySelector('#input21');
likebtn1.addEventListener('click',()=>{input11.value = parseInt(input11.value) + 1; input11.style.color = "green";})
dislikebtn1.addEventListener('click',()=>{input21.value = parseInt(input21.value) + 1; input21.style.color = "green";})

let likebtn2 = document.querySelector('#likebtn2');
let dislikebtn2 = document.querySelector('#dislikebtn2');
let input12 = document.querySelector('#input12');
let input22 = document.querySelector('#input22');
likebtn2.addEventListener('click',()=>{input12.value = parseInt(input12.value) + 1; input12.style.color = "green";})
dislikebtn2.addEventListener('click',()=>{input22.value = parseInt(input22.value) + 1; input22.style.color = "green";})

let likebtn3 = document.querySelector('#likebtn3');
let dislikebtn3 = document.querySelector('#dislikebtn3');
let input13 = document.querySelector('#input13');
let input23 = document.querySelector('#input23');
likebtn3.addEventListener('click',()=>{input13.value = parseInt(input13.value) + 1; input13.style.color = "green";})
dislikebtn3.addEventListener('click',()=>{input23.value = parseInt(input23.value) + 1; input23.style.color = "green";})

let likebtn4 = document.querySelector('#likebtn4');
let dislikebtn4 = document.querySelector('#dislikebtn4');
let input14 = document.querySelector('#input14');
let input24 = document.querySelector('#input24');
likebtn4.addEventListener('click',()=>{input14.value = parseInt(input14.value) + 1; input14.style.color = "green";})
dislikebtn4.addEventListener('click',()=>{input24.value = parseInt(input24.value) + 1; input24.style.color = "green";})

let likebtn5 = document.querySelector('#likebtn5');
let dislikebtn5 = document.querySelector('#dislikebtn5');
let input15 = document.querySelector('#input15');
let input25 = document.querySelector('#input25');
likebtn5.addEventListener('click',()=>{input15.value = parseInt(input15.value) + 1; input15.style.color = "green";})
dislikebtn5.addEventListener('click',()=>{input25.value = parseInt(input25.value) + 1; input25.style.color = "green";})

let likebtn6 = document.querySelector('#likebtn6');
let dislikebtn6 = document.querySelector('#dislikebtn6');
let input16 = document.querySelector('#input16');
let input26 = document.querySelector('#input26');
likebtn6.addEventListener('click',()=>{input16.value = parseInt(input16.value) + 1; input16.style.color = "green";})
dislikebtn6.addEventListener('click',()=>{input26.value = parseInt(input26.value) + 1; input26.style.color = "green";})

let likebtn7 = document.querySelector('#likebtn7');
let dislikebtn7 = document.querySelector('#dislikebtn7');
let input17 = document.querySelector('#input17');
let input27 = document.querySelector('#input27');
likebtn7.addEventListener('click',()=>{input17.value = parseInt(input17.value) + 1; input17.style.color = "green";})
dislikebtn7.addEventListener('click',()=>{input27.value = parseInt(input27.value) + 1; input27.style.color = "green";})

let likebtn8 = document.querySelector('#likebtn8');
let dislikebtn8 = document.querySelector('#dislikebtn8');
let input18 = document.querySelector('#input18');
let input28 = document.querySelector('#input28');
likebtn8.addEventListener('click',()=>{input18.value = parseInt(input18.value) + 1; input18.style.color = "green";})
dislikebtn8.addEventListener('click',()=>{input28.value = parseInt(input28.value) + 1; input28.style.color = "green";})

let likebtn9 = document.querySelector('#likebtn9');
let dislikebtn9 = document.querySelector('#dislikebtn9');
let input19 = document.querySelector('#input19');
let input29 = document.querySelector('#input29');
likebtn9.addEventListener('click',()=>{input19.value = parseInt(input19.value) + 1; input19.style.color = "green";})
dislikebtn9.addEventListener('click',()=>{input29.value = parseInt(input29.value) + 1; input29.style.color = "green";})

let likebtn10 = document.querySelector('#likebtn10');
let dislikebtn10 = document.querySelector('#dislikebtn10');
let input110 = document.querySelector('#input110');
let input210 = document.querySelector('#input210');
likebtn10.addEventListener('click',()=>{input110.value = parseInt(input110.value) + 1; input110.style.color = "green";})
dislikebtn10.addEventListener('click',()=>{input210.value = parseInt(input210.value) + 1; input210.style.color = "green";})

let add = () => {
    let name = document.querySelector('.container #name'); 
    let comment = document.querySelector('.container #comment'); 
     
    if (name.value !== "" && comment.value != "") { 
     
    let list = document.querySelector('.list'); 
    let time = new Date();
    let d = time.getDate();
    let mo = time.getMonth();
    let y = time.getFullYear();
    let h = time.getHours(); 
    let m = time.getMinutes(); 
    let s = time.getSeconds(); 
    let b = d + "." + mo + "." + y;
    let now = h + " : " + m + " : " + s;
    let list_item = document.createElement ("l1"); 
     
    list_item.innerHTML = `
    <span>
    <p>
    <div style="text-align: left;">
    <span style="float:right;">
    ${b} <br>
    ${now} <br>
    </span>
    ${name.value} <br />
     <br />
    
</div>
    </p> 
    </span>
    <p>${comment.value}</p>
    `;
    list.append(list_item); 
    }
     
    if (name.value == "" || comment.value == "") {
    let list = document.querySelector('.list'); 
    let list_item = document.createElement ("l2"); 
    var warn = 'Please enter name & comment!';  
    list_item.innerHTML = `
    <span>
    <p>${warn}</p> 
    </span>
    `;
    list.append(list_item); 
     }
    name.value=comment.value = "";
    }
   