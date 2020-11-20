let add5 = () => {
    let name5 = document.querySelector('.container #name5'); 
    let comment5 = document.querySelector('.container #comment5'); 
     
    if (name5.value !== "" && comment5.value != "") { 
     
    let list5 = document.querySelector('.list5'); 
    let time5 = new Date();
    let d = time5.getDate();
    let mo = time5.getMonth();
    let y = time5.getFullYear();
    let h = time5.getHours(); 
    let m = time5.getMinutes(); 
    let s = time5.getSeconds(); 
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
    ${name5.value} :<br />
     <br />
    
</div>
    </p> 
    </span>
    <p>${comment5.value}</p>
    `;
    list5.append(list_item); 
    }
     
    if (name5.value == "" || comment5.value == "") {
    let list5 = document.querySelector('.list5'); 
    let list_item = document.createElement ("l2"); 
    var warn = 'Please enter name & comment!';  
    list_item.innerHTML = `
    <span>
    <p>${warn}</p> 
    </span>
    `;
    list5.append(list_item); 
     }
    name5.value=comment5.value = "";
    }