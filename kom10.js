let add9 = () => {
    let name9 = document.querySelector('.container #name9'); 
    let comment9 = document.querySelector('.container #comment9'); 
     
    if (name9.value !== "" && comment9.value != "") { 
     
    let list9 = document.querySelector('.list9'); 
    let time9 = new Date();
    let d = time9.getDate();
    let mo = time9.getMonth();
    let y = time9.getFullYear();
    let h = time9.getHours(); 
    let m = time9.getMinutes(); 
    let s = time9.getSeconds(); 
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
    ${name9.value} :<br />
     <br />
    
</div>
    </p> 
    </span>
    <p>${comment9.value}</p>
    `;
    list9.append(list_item); 
    }
     
    if (name9.value == "" || comment9.value == "") {
    let list9 = document.querySelector('.list9'); 
    let list_item = document.createElement ("l2"); 
    var warn = 'Please enter name & comment!';  
    list_item.innerHTML = `
    <span>
    <p>${warn}</p> 
    </span>
    `;
    list9.append(list_item); 
     }
    name9.value=comment9.value = "";
    }