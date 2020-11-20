let add3 = () => {
    let name3 = document.querySelector('.container #name3'); 
    let comment3 = document.querySelector('.container #comment3'); 
     
    if (name3.value !== "" && comment3.value != "") { 
     
    let list3 = document.querySelector('.list3'); 
    let time3 = new Date();
    let d = time3.getDate();
    let mo = time3.getMonth();
    let y = time3.getFullYear();
    let h = time3.getHours(); 
    let m = time3.getMinutes(); 
    let s = time3.getSeconds(); 
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
    ${name3.value} :<br />
     <br />
    
</div>
    </p> 
    </span>
    <p>${comment3.value}</p>
    `;
    list3.append(list_item); 
    }
     
    if (name3.value == "" || comment3.value == "") {
    let list3 = document.querySelector('.list3'); 
    let list_item = document.createElement ("l2"); 
    var warn = 'Please enter name & comment!';  
    list_item.innerHTML = `
    <span>
    <p>${warn}</p> 
    </span>
    `;
    list3.append(list_item); 
     }
    name3.value=comment3.value = "";
    }