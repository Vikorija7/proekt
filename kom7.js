let add6 = () => {
    let name6 = document.querySelector('.container #name6'); 
    let comment6 = document.querySelector('.container #comment6'); 
     
    if (name6.value !== "" && comment6.value != "") { 
     
    let list6 = document.querySelector('.list6'); 
    let time6 = new Date();
    let d = time6.getDate();
    let mo = time6.getMonth();
    let y = time6.getFullYear();
    let h = time6.getHours(); 
    let m = time6.getMinutes(); 
    let s = time6.getSeconds(); 
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
    ${name6.value} :<br />
     <br />
    
</div>
    </p> 
    </span>
    <p>${comment6.value}</p>
    `;
    list6.append(list_item); 
    }
     
    if (name6.value == "" || comment6.value == "") {
    let list6 = document.querySelector('.list6'); 
    let list_item = document.createElement ("l2"); 
    var warn = 'Please enter name & comment!';  
    list_item.innerHTML = `
    <span>
    <p>${warn}</p> 
    </span>
    `;
    list6.append(list_item); 
     }
    name6.value=comment6.value = "";
    }