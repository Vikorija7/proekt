let add2 = () => {
    let name2 = document.querySelector('.container #name2'); 
    let comment2 = document.querySelector('.container #comment2'); 
     
    if (name2.value !== "" && comment2.value != "") { 
     
    let list2 = document.querySelector('.list2'); 
    let time2 = new Date();
    let d = time2.getDate();
    let mo = time2.getMonth();
    let y = time2.getFullYear();
    let h = time2.getHours(); 
    let m = time2.getMinutes(); 
    let s = time2.getSeconds(); 
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
    ${name2.value} :<br />
     <br />
    
</div>
    </p> 
    </span>
    <p>${comment2.value}</p>
    `;
    list2.append(list_item); 
    }
     
    if (name2.value == "" || comment2.value == "") {
    let list2 = document.querySelector('.list2'); 
    let list_item = document.createElement ("l2"); 
    var warn = 'Please enter name & comment!';  
    list_item.innerHTML = `
    <span>
    <p>${warn}</p> 
    </span>
    `;
    list2.append(list_item); 
     }
    name2.value=comment2.value = "";
    }