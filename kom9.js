let add8 = () => {
    let name8 = document.querySelector('.container #name8'); 
    let comment8 = document.querySelector('.container #comment8'); 
     
    if (name8.value !== "" && comment8.value != "") { 
     
    let list8 = document.querySelector('.list8'); 
    let time8 = new Date();
    let d = time8.getDate();
    let mo = time8.getMonth();
    let y = time8.getFullYear();
    let h = time8.getHours(); 
    let m = time8.getMinutes(); 
    let s = time8.getSeconds(); 
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
    ${name8.value} :<br />
     <br />
    
</div>
    </p> 
    </span>
    <p>${comment8.value}</p>
    `;
    list8.append(list_item); 
    }
     
    if (name8.value == "" || comment8.value == "") {
    let list8 = document.querySelector('.list8'); 
    let list_item = document.createElement ("l2"); 
    var warn = 'Please enter name & comment!';  
    list_item.innerHTML = `
    <span>
    <p>${warn}</p> 
    </span>
    `;
    list8.append(list_item); 
     }
    name8.value=comment8.value = "";
    }