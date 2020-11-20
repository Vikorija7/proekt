let add4 = () => {
    let name4 = document.querySelector('.container #name4'); 
    let comment4 = document.querySelector('.container #comment4'); 
     
    if (name4.value !== "" && comment4.value != "") { 
     
    let list4 = document.querySelector('.list4'); 
    let time4 = new Date();
    let d = time4.getDate();
    let mo = time4.getMonth();
    let y = time4.getFullYear();
    let h = time4.getHours(); 
    let m = time4.getMinutes(); 
    let s = time4.getSeconds(); 
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
    ${name4.value} :<br />
     <br />
    
</div>
    </p> 
    </span>
    <p>${comment4.value}</p>
    `;
    list4.append(list_item); 
    }
     
    if (name4.value == "" || comment4.value == "") {
    let list4 = document.querySelector('.list4'); 
    let list_item = document.createElement ("l2"); 
    var warn = 'Please enter name & comment!';  
    list_item.innerHTML = `
    <span>
    <p>${warn}</p> 
    </span>
    `;
    list4.append(list_item); 
     }
    name4.value=comment4.value = "";
    }
